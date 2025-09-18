# Next.js Boilerplate with TypeScript & Testing

This is a modern Next.js project bootstrapped with TypeScript, ESLint, Prettier, Vitest for testing, and shadcn/ui components. It's designed as a production-ready boilerplate for building scalable web applications.

## 🚀 Features

- ⚛️ **Next.js 14+** with App Router
- 🟦 **TypeScript** for type safety
- 📋 **ESLint & Prettier** for code quality and formatting
- 🧪 **Vitest** with React Testing Library for comprehensive testing
- 🎨 **shadcn/ui** components with Tailwind CSS and Radix UI
- 📱 **Responsive Design** with Tailwind CSS
- 🔒 **Husky** pre-commit hooks for linting and testing
- 🌐 **Internationalization** ready (i18n setup)
- 🚀 **Optimized Performance** with Next.js built-in optimizations
- 📦 **Modern Tooling** (ES modules, flat config)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **UI Components**: Radix UI primitives
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint (flat config) + Prettier
- **Git Hooks**: Husky + lint-staged
- **Fonts**: Geist Sans & Mono (Vercel)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pbKris/my-nextjs-boilerplate.git
   cd my-nextjs-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Copy the environment variables (if any):
   ```bash
   cp .env.example .env.local
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions
└── setupTests.ts        # Test setup
```

## 🧪 Testing

Run the test suite:

```bash
npm run test
# or
yarn test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `start` | Start production server |
| `lint` | Run ESLint |
| `lint:fix` | Fix linting issues |
| `format` | Format code with Prettier |
| `test` | Run tests |
| `test:watch` | Run tests in watch mode |
| `test:coverage` | Run tests with coverage |
| `type-check` | Check TypeScript types |

## 📝 Code Quality

### Linting & Formatting

- **ESLint**: Enforces code quality and consistency
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit linting
- **lint-staged**: Only lint staged files

Run linting:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

### TypeScript

TypeScript configuration is set up with strict mode and path mapping for cleaner imports.

## 🎨 Styling

This project uses **Tailwind CSS** with **shadcn/ui** components. All components are fully customizable.

### Adding new shadcn/ui components

```bash
npx shadcn-ui@latest add button
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Static export or serverless functions
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Workflow

1. Install dependencies: `npm install`
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and run tests: `npm run test`
4. Lint and format: `npm run lint:fix`
5. Commit with conventional commits: `git commit -m "feat: add your feature"`
6. Push and create PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [shadcn/ui](https://ui.shadcn.com) - Beautifully designed components
- [Vercel](https://vercel.com) - Deployment platform
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [Vitest](https://vitest.dev) - Fast testing framework

---

⭐ **Star this repository if you found it helpful!**
