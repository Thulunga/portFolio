# Thulunga's Portfolio - Modern Next.js Version

A production-ready, modern portfolio website built with **Next.js 14**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Mode**: Built-in dark theme support
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Performance**: Static generation, optimized images, and fast load times
- **Accessibility**: WCAG-compliant semantic HTML
- **SEO Optimized**: Proper meta tags and schema markup
- **Component-Based**: Reusable React components for maintainability

## 📋 Content Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Professional summary with key achievements
3. **Experience** - Detailed work history at SOTI Inc.
4. **Projects** - Featured portfolio projects (StoreBanao, Planningo, Internal AI Package)
5. **Skills** - Organized by category (Frontend, Full-Stack, Database, Auth, Infrastructure)
6. **Contact** - Multiple ways to connect
7. **Footer** - Quick navigation and social links

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Build**: Vercel-optimized Next.js build
- **Node**: v24.x

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the portfolio.

## 📂 Project Structure

```
app/
├── components/
│   ├── Header.tsx        # Navigation header with theme toggle
│   ├── Hero.tsx          # Hero section with intro
│   ├── About.tsx         # About me section
│   ├── Experience.tsx    # Work experience
│   ├── Projects.tsx      # Featured projects
│   ├── Skills.tsx        # Technical skills by category
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer with links
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Main page
├── providers.tsx         # App providers
└── globals.css           # Global styles

public/
└── images/               # Static images (add here)

Configuration files:
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color palette.

### Content Updates
Update the content directly in the component files:
- Hero: `app/components/Hero.tsx`
- About: `app/components/About.tsx`
- Projects: `app/components/Projects.tsx`
- Skills: `app/components/Skills.tsx`

### Images
Add images to `public/images/` and reference them in components using Next.js Image component for optimal performance.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project uses standard Next.js, so it can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS
- DigitalOcean
- etc.

## 📝 Performance

- **Build Size**: ~148 KB First Load JS (production optimized)
- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic per-page code splitting

## 🔍 SEO

The portfolio includes:
- Semantic HTML5 structure
- Proper Open Graph meta tags
- Twitter Card metadata
- Schema.org markup (Person)
- Responsive design (mobile-friendly)

## ✨ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

- **Email**: thulunga.tb@gmail.com
- **LinkedIn**: linkedin.com/in/thulunga
- **GitHub**: github.com/Thulunga
- **WhatsApp**: +91 86381 13906

---

Built with ❤️ using Next.js, React, and Tailwind CSS
