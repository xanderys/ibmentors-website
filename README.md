# IBMentors Website

A modern, responsive website for IBMentors - IB English tutoring service offering personalized mentoring, exam preparation, and coursework guidance.

## 🚀 Live Demo

- **Development Preview**: [View on Manus](https://3000-ibtta4i2u163cou7fymfh-5577e72f.manus.computer)
- **Production**: Deploy to Vercel (see deployment instructions below)

## 📋 Features

- **Hero Section** with compelling value proposition
- **About Section** showcasing tutor qualifications and achievements
- **45-Point Framework** highlighting unique teaching methodology
- **Programmes Section** detailing service offerings
- **Testimonials** from satisfied students
- **FAQs** addressing common questions
- **Contact Section** with call-to-action
- **Fully Responsive** design for mobile, tablet, and desktop
- **Modern UI** with smooth animations and interactions

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Wouter** - Lightweight routing
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
ibmentors/
├── client/
│   ├── public/
│   │   └── images/          # Images and assets
│   └── src/
│       ├── pages/
│       │   └── Home.tsx     # Main landing page
│       ├── components/      # Reusable UI components
│       │   └── ui/          # shadcn/ui components
│       ├── contexts/        # React contexts
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utility functions
│       ├── App.tsx          # App configuration & routing
│       ├── index.css        # Global styles & theme
│       └── main.tsx         # Entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xanderys/ibmentors-website.git
cd ibmentors-website
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Editing Content

All website content is in `/client/src/pages/Home.tsx`. Edit this file to:
- Update text and copy
- Modify sections
- Change layout
- Add/remove features

### Changing Colors

Edit `/client/src/index.css` to customize the color scheme:
```css
:root {
  --primary: oklch(0.55 0.2 270);      /* Purple */
  --accent: oklch(0.65 0.15 45);       /* Orange */
  /* ... other color variables */
}
```

### Adding/Replacing Images

Place images in `/client/public/images/` and reference them:
```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

## 🚀 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `xanderys/ibmentors-website`
4. Vercel will auto-detect the configuration
5. Click "Deploy"
6. Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to complete deployment

### Custom Domain

To use your custom domain (ibmentors.com):

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS records as instructed by Vercel

## 📦 Build for Production

To create a production build locally:

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint

## 📝 License

© 2024 IBMentors. All rights reserved.

## 🤝 Support

For questions or support, contact: info@ibmentors.com

---

**Built with ❤️ using modern web technologies**

