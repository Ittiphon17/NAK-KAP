import Link from "next/link";

interface FooterProps {
  dict: any;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold tracking-tight text-primary">
              NAK <span className="text-accent">KAP</span>
            </span>
          </Link>
          <p className="text-secondary text-sm leading-relaxed mb-8">
            Experience the ultimate in <strong>luxury car rentals</strong>. <strong>NAK KAP</strong> offers a curated fleet of <strong>premium vehicles</strong> for those who demand excellence.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">{dict.nav.home}</h4>
          <ul className="space-y-4">
            <li><Link href="/cars" className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.cars}</Link></li>
            <li><Link href="/about" className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.about}</Link></li>
            <li><Link href="/contact" className="text-secondary text-sm hover:text-accent transition-colors">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Support</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">Help Center</Link></li>
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="text-secondary text-sm hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-primary mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-secondary text-sm">support@nakdrive.com</li>
            <li className="text-secondary text-sm">+66 2 123 4567</li>
            <li className="text-secondary text-sm">Bangkok, Thailand</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-secondary text-xs">
          © {new Date().getFullYear()} <strong>NAK KAP</strong>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {/* Social Icons would go here */}
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Instagram</span>
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Twitter</span>
          <span className="text-secondary text-xs cursor-pointer hover:text-accent transition-colors">Facebook</span>
        </div>
      </div>
    </footer>
  );
}
