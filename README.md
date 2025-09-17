# TimeCraft - Premium Watches & Timepieces E-commerce

[![Live Demo](https://img.shields.io/badge/Live%20Demo-https://time--craft--kian.netlify.app-blue?style=for-the-badge&logo=netlify)](https://time-craft-kian.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive e-commerce platform for premium watches and timepieces built with Next.js 15, TypeScript, and Tailwind CSS. TimeCraft offers an elegant shopping experience for luxury wristwatches, wall clocks, pocket watches, desk clocks, and smart watches.

## 🌟 Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Comprehensive collection of premium timepieces
- **Category Filtering**: Browse by wrist watches, wall clocks, pocket watches, desk clocks, antique clocks, and smart watches
- **Product Search**: Advanced search and filtering capabilities
- **Shopping Cart**: Persistent cart state management with Zustand
- **Quick View Modal**: Instant product preview without page navigation
- **Product Details**: Detailed product information with specifications

### 🎨 User Experience
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, elegant interface with smooth animations
- **Performance Optimized**: Fast loading with Next.js 15 and Turbopack
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Toast Notifications**: User-friendly feedback for actions

### 🏗️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components
- **State Management**: Global state with Zustand for cart and UI state
- **Image Optimization**: Optimized images with Next.js Image component
- **Modern Styling**: Tailwind CSS 4.0 with custom design system

## 🚀 Live Demo

**Deployment**: [https://time-craft-kian.netlify.app](https://time-craft-kian.netlify.app)

Experience the full functionality of TimeCraft with our live demo showcasing all features and responsive design.

## 📱 Screenshots

### Desktop View
- **Homepage**: Hero section with featured timepieces
- **Product Catalog**: Grid layout with filtering options
- **Product Details**: Comprehensive product information
- **Shopping Cart**: Persistent cart with item management

### Mobile View
- **Responsive Navigation**: Mobile-optimized header and menu
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Performance**: Optimized for mobile devices

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **State Management**: [Zustand 5.0.8](https://zustand-demo.pmnd.rs/)
- **Icons**: [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Hot Toast 2.6.0](https://react-hot-toast.com/)

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js 15)
- **Type Checking**: TypeScript compiler

## 📦 Installation

### Prerequisites
- Node.js 18.0 or later
- pnpm (recommended) or npm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/timecraft.git
   cd timecraft
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── collections/       # Collections page
│   ├── contact/           # Contact page
│   ├── watches/           # Product pages
│   │   ├── [slug]/        # Dynamic product detail pages
│   │   └── page.tsx       # Watches listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── common/            # Shared components
│   │   ├── cards/         # Product cards
│   │   ├── footers/       # Footer components
│   │   ├── headers/       # Header components
│   │   ├── images/        # Image components
│   │   ├── logo/          # Logo component
│   │   ├── modals/        # Modal components
│   │   └── ...            # Other common components
│   ├── landing/           # Homepage sections
│   └── pages/             # Page-specific components
├── services/              # Data services and utilities
│   ├── data.ts           # Mock data and data fetching
│   ├── icons.tsx         # Icon components
│   └── images.ts         # Image management
├── stores/                # State management
│   └── cartStore.ts      # Shopping cart store
└── types/                 # TypeScript type definitions
    ├── caregoryData.type.ts
    ├── collectionData.type.ts
    ├── testimonialData.type.ts
    └── watchData.type.ts
```

## 🎯 Key Components

### Product Management
- **WatchCard**: Displays product information with quick actions
- **WatchDetailClient**: Detailed product view with specifications
- **QuickViewModal**: Instant product preview modal

### Navigation & Layout
- **Header**: Main navigation with cart indicator
- **Footer**: Site links and information
- **SearchAndFilter**: Product search and filtering interface

### State Management
- **CartStore**: Global cart state with Zustand
- **Toast**: User notification system

## 🎨 Design System

### Color Palette
- **Primary**: Elegant gold and black tones
- **Secondary**: Professional grays and whites
- **Accent**: Category-specific color coding

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Responsive**: Mobile-first typography scaling

### Components
- **Cards**: Consistent product card design
- **Buttons**: Unified button styling and states
- **Modals**: Smooth modal animations and interactions

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Turbopack**: Fast development builds
- **TypeScript**: Compile-time error checking
- **ESLint**: Code quality and consistency

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Cross Browser**: Compatible with modern browsers

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Alternative with npm
npm run dev
npm run build
npm run start
npm run lint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js best practices
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Modular and reusable components

## 🌐 Deployment

### Netlify (Current)
The application is currently deployed on Netlify:
- **URL**: [https://time-craft-kian.netlify.app](https://time-craft-kian.netlify.app)
- **Build Command**: `pnpm build`
- **Publish Directory**: `.next`

### Other Platforms
The application can be deployed on:
- **Vercel**: Optimized for Next.js applications
- **AWS Amplify**: Full-stack deployment
- **Railway**: Simple deployment with database support
- **Docker**: Containerized deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Project Link**: [https://github.com/your-username/timecraft](https://github.com/your-username/timecraft)
- **Live Demo**: [https://time-craft-kian.netlify.app](https://time-craft-kian.netlify.app)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the comprehensive icon library
- Zustand for the simple state management solution

---

**TimeCraft** - Crafting timeless pieces that blend precision engineering with elegant design. From classic wristwatches to sophisticated wall clocks, we bring you the finest timepieces.

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*