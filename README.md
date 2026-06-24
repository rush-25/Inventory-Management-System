# Inventory Management System

Inventory Management System built with React, Vite, TypeScript, and Tailwind CSS. This system allows businesses to easily track their stock, manage products, handle suppliers, and generate detailed reports.

## 🚀 Features

- **Dashboard Overview**: Get a high-level snapshot of your inventory health, recent movements, and key metrics.
- **Product Management**: Add, edit, and categorize products with detailed information including pricing, reorder levels, and barcodes.
- **Stock Tracking**:
  - **Stock In**: Receive new inventory from suppliers.
  - **Stock Out**: Record stock deductions due to sales, damages, internal use, or returns.
  - **Stock Balance**: View real-time stock levels across all products.
- **Supplier & Category Management**: Keep track of your vendors and organize your products logically.
- **Alerts & Notifications**: Automated low-stock alerts based on configurable reorder levels.
- **Comprehensive Reporting**: Generate inventory summaries, stock movement logs, and product/supplier specific performance reports.

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: Built using accessible primitives from [Radix UI](https://www.radix-ui.com/) (inspired by shadcn/ui).
- **Charts**: [Recharts](https://recharts.org/)

## 🏃‍♂️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
   ```bash
   cd "Inventory Management System"
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
The optimized assets will be generated in the `dist` folder.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/  # Reusable UI components (Buttons, Modals, Forms)
│   │   ├── layouts/     # Main application wrappers (DashboardLayout)
│   │   ├── pages/       # Route-level components (Products, StockIn, Reports)
│   │   ├── store/       # Global state management context
│   │   └── routes.tsx   # Application routing logic
│   ├── styles/          # Global CSS and Tailwind directives
│   └── main.tsx         # Application entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```
