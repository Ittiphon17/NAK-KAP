# NAK KAP - Premium Car Rental Web Application

A modern, full-stack car rental platform built with Next.js 16+, TypeScript, and Tailwind CSS. Features both a premium customer-facing website and a comprehensive admin dashboard.

## ✨ Features

### Customer Website
- **Home Page** - Hero section, featured cars, why choose us, testimonials, and CTA
- **Cars Listing** - Filterable grid of vehicles with advanced search
- **Car Details** - Comprehensive vehicle information with image gallery
- **Booking System** - Easy-to-use booking form with confirmation
- **About Page** - Brand story and company values
- **Contact Page** - Contact form and business information
- **Responsive Design** - Mobile-first approach for all devices

### Admin Dashboard
- **Dashboard** - Key metrics, revenue trends, and recent bookings
- **Fleet Management** - Manage vehicle inventory and specifications
- **Booking Management** - View, track, and manage all reservations
- **Customer Management** - Customer database with analytics
- **Analytics** - Detailed business insights and performance metrics
- **Settings** - System configuration and preferences

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Local fonts (Inter, Poppins) - offline-first
- **Architecture**: Component-based with reusable UI components
- **Design System**: Premium minimal luxury aesthetic

## 🎨 Design System

### Colors
- **Background**: #FFFFFF
- **Primary Text**: #1F2937
- **Secondary Text**: #6B7280
- **Accent**: #3B82F6 (Soft Blue)
- **Secondary Accent**: #C9A227 (Elegant Gold)
- **Card Background**: #F9FAFB

### Typography
- **Headings**: Poppins (Font Family)
- **Body**: Inter (Font Family)

## 📁 Project Structure

```
├── app/
│   ├── (public)/
│   │   ├── page.tsx                 # Home
│   │   ├── cars/                    # Cars listing
│   │   ├── car-detail/[slug]/       # Car details
│   │   ├── booking/                 # Booking form
│   │   ├── booking/confirmation/    # Confirmation
│   │   ├── about/                   # About page
│   │   ├── contact/                 # Contact page
│   │   └── layout.tsx
│   ├── admin/
│   │   ├── dashboard/
│   │   ├── cars/
│   │   ├── bookings/
│   │   ├── customers/
│   │   ├── analytics/
│   │   ├── settings/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── public/          # Customer-facing components
│   ├── admin/           # Admin-specific components
│   ├── ui/              # Reusable UI components
│   └── providers/       # Context providers
├── lib/                 # Utilities and helpers
├── types/              # TypeScript type definitions
├── data/               # Mock data and constants
├── public/             # Static assets
│   └── fonts/          # Local font files
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add local fonts** (optional but recommended)
   - Download Inter and Poppins font files (.woff2 format)
   - Place them in `public/fonts/`
   - Update font paths in `app/globals.css` if needed

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Pages

### Public Website
- `/` - Home page
- `/cars` - Cars listing with filters
- `/car-detail/[slug]` - Individual car details
- `/booking` - Booking form
- `/booking/confirmation` - Booking confirmation
- `/about` - About page
- `/contact` - Contact page

### Admin Dashboard
- `/admin` - Redirects to dashboard
- `/admin/dashboard` - Main dashboard
- `/admin/cars` - Fleet management
- `/admin/bookings` - Booking management
- `/admin/customers` - Customer management
- `/admin/analytics` - Analytics & reports
- `/admin/settings` - System settings

## 🎨 Component Library

### UI Components
- `Button` - Multiple variants (primary, secondary, outline)
- `Input` - Text input with label and validation
- `Card` - Reusable card component
- `Select` - Dropdown/select component

### Public Components
- `Header` - Navigation header
- `Footer` - Footer with links
- `CarCard` - Individual car card in listings
- `SearchForm` - Car search/booking form
- `WhyChooseUs` - Features section
- `Testimonials` - Customer testimonials
- `CTASection` - Call-to-action section

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile screens
- **Tablet** - Enhanced layout for tablets
- **Desktop** - Full-featured desktop experience
- **Large Screens** - Optimized for high-resolution displays

## 🔒 Local Fonts Setup

The application uses local fonts to avoid Google Fonts fetching at build time:

1. **Inter Font**
   - Download from: https://rsms.me/inter/
   - Convert to .woff2 format
   - Place in `public/fonts/inter.woff2`

2. **Poppins Font**
   - Download from: https://fonts.google.com/specimen/Poppins
   - Convert to .woff2 format
   - Place in `public/fonts/poppins.woff2`

Fallback fonts are configured in CSS for offline use.

## 📊 Data Structure

### Car Object
```typescript
{
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  price: number;
  seats: number;
  transmission: "manual" | "automatic";
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
  mileage: string;
  category: "economy" | "comfort" | "premium" | "luxury";
  description?: string;
  features?: string[];
}
```

## 🎯 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  background: "#FFFFFF",
  foreground: "#1F2937",
  // ... other colors
}
```

### Typography
Modify `globals.css` to adjust font settings and sizes.

### Data
Update mock data in `data/cars.ts` and create additional data files as needed.

## 📚 Best Practices

- Use reusable UI components
- Keep component files focused and small
- Use TypeScript for type safety
- Follow the established folder structure
- Use Tailwind CSS utility classes
- Implement mobile-first responsive design
- Add proper error handling and validation

## 🚀 Future Enhancements

- User authentication system
- Payment integration
- Email notifications
- Real-time booking updates
- Vehicle location tracking
- Customer reviews and ratings
- Multi-language support
- Dark mode toggle

## 📝 License

© 2024 NAK KAP. All rights reserved.

## 📧 Support

For support or questions, contact: hello@nakkap.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
