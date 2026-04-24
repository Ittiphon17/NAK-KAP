import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, Locale } from "@/src/lib/i18n";

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const detectLocale = (request: NextRequest): Locale => {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && hasLocale(cookieLocale)) {
    return cookieLocale;
  }

  const accepted = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (accepted.includes("th")) {
    return "th";
  }

  return defaultLocale;
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const segmentLocale = segments[0];

  if (segmentLocale && hasLocale(segmentLocale)) {
    const rewrittenPath =
      segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rewrittenPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", segmentLocale);

    const response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
    response.cookies.set("NEXT_LOCALE", segmentLocale, {
      path: "/",
      maxAge: ONE_YEAR_IN_SECONDS,
    });
    return response;
  }

  const locale = detectLocale(request);
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
