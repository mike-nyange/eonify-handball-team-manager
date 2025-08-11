# Eonify - Handball Team Management App

A modern handball team management application built with a monorepo structure supporting both web and mobile platforms.

## 🏗️ Project Structure

```
handball-team-app/
├── apps/
│   ├── web/                 # Next.js web application
│   └── mobile/              # React Native/Expo mobile app
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── config/              # Shared configurations
│   └── utils/               # Shared utilities
├── turbo.json               # Turborepo configuration
└── package.json             # Root package.json
```

## 🚀 Features

- **Team Management**: Keep track of all your team members and their details
- **Expense Tracking**: Monitor team expenses and contributions easily  
- **Analytics**: Get insights into your team's financial health
- **Cross-Platform**: Consistent experience across web and mobile
- **Modern UI**: Clean, responsive design based on Eonify design system

## 🛠️ Tech Stack

### Web (Next.js)
- **Framework**: Next.js 15+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Development**: Turbopack for fast builds

### Mobile (React Native)
- **Framework**: Expo with React Native
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind for React Native)
- **Platform**: iOS, Android, and Web support

### Shared
- **Monorepo**: Turborepo for efficient builds and development
- **Language**: TypeScript for type safety
- **Package Manager**: npm with workspaces

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd handball-team-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

#### Web Application
```bash
# Start the web development server
cd apps/web
npm run dev

# Or from root using turbo
npm run web:dev
```
The web app will be available at `http://localhost:8000`

#### Mobile Application
```bash
# Start the mobile development server
cd apps/mobile
npm start

# Or run on specific platforms
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

#### Both Applications (Turbo)
```bash
# Start all applications
npm run dev
```

## 📱 Application Flow

### Splash Screens
1. **Welcome Screen**: App introduction with Eonify branding
2. **Features Screen**: Key features overview (Team Management, Expense Tracking, Analytics)
3. **Authentication Screen**: Sign in/Sign up options

### Design System
- **Primary Color**: Blue (#2563eb)
- **Background**: Gradient from blue-50 to white
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Consistent buttons, cards, and layouts
- **Responsive**: Mobile-first design that scales to desktop

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start all apps in development mode
npm run web:dev      # Start only web app
npm run build        # Build all apps for production
npm run lint         # Lint all packages

# Individual app commands
cd apps/web && npm run dev     # Web development
cd apps/mobile && npm start   # Mobile development
```

## 📦 Package Structure

### `/apps/web`
Next.js application with:
- Splash screen flow
- Responsive design
- Tailwind CSS styling
- TypeScript support

### `/apps/mobile`
React Native/Expo application with:
- Native splash screens
- Cross-platform compatibility
- Expo Router navigation
- NativeWind styling

### `/packages/ui`
Shared UI component library:
- Button components
- Card components
- Splash screen layouts
- Utility functions

## 🎨 Design Philosophy

The application follows the Eonify design system with:
- **Clean & Modern**: Minimalist interface focusing on usability
- **Consistent Branding**: Blue color scheme with geometric logo
- **Mobile-First**: Responsive design that works on all devices
- **Accessible**: Built with accessibility best practices

## 🚧 Future Development

This is the initial phase focusing on splash screens and basic navigation. Future phases will include:

- User authentication system
- Team member management
- Expense tracking features
- Financial analytics dashboard
- Real-time notifications
- Data synchronization

## 📄 License

This project is private and proprietary.

---

Built with ❤️ for handball teams everywhere.
