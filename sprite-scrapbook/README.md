# Sprite Scrapbook

A nostalgic, interactive digital scrapbook where friends and family are represented as charming sprites on an infinite canvas. Built with React, TypeScript, and Tailwind CSS.

## 🎮 Features

- **Infinite Canvas**: Pan and zoom functionality with smooth animations
- **Sprite System**: Interactive sprites with hover animations
- **Scrapbook Drawer**: Side panel with draggable stories and photos
- **8-bit Aesthetic**: Nintendo Mii Plaza + Habbo Hotel inspired design
- **Modern Tech Stack**: React 18, TypeScript, Vite, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Linting**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── canvas/          # Canvas-related components
│   ├── sprites/         # Sprite components
│   ├── ui/             # UI components (nav, modals, etc.)
│   └── scrapbook/      # Scrapbook components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles and CSS
```

## 🎨 Design System

### Colors
- **Primary**: #32CD32 (vibrant green)
- **Secondary**: #FF69B4 (hot pink)
- **Accent**: #00BFFF (bright blue)
- **Paper**: #FFF8DC (cream for scrapbook notes)
- **Background**: #FFFFFF (clean white)

### Typography
- **Font Family**: Comic Sans MS (retro gaming aesthetic)
- **Custom Properties**: CSS variables for consistent theming

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Consistent code formatting
- **Performance**: Optimized for smooth 60fps animations

## 📋 Roadmap

- [x] Project setup and configuration
- [ ] Infinite canvas with pan/zoom
- [ ] Sprite system with hover animations
- [ ] Side drawer scrapbook
- [ ] Add sprite functionality
- [ ] Data persistence
- [ ] Polish and enhancements

## 🤝 Contributing

This is a learning project focused on building good development habits with modern React and TypeScript practices.

## 📄 License

MIT License - feel free to use this project for learning and experimentation.