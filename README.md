# The Green Pantry 🥗

A premium, high-performance static website for a healthy cloud kitchen brand. Designed to be visually stunning, mobile-responsive, and blazing fast.

## 🌟 Features

*   **Premium UI/UX**: Elegant design with glassmorphism effects and smooth Framer Motion animations.
*   **Dynamic Menu**: Filterable menu (Salads, Wraps, Drinks) powered by fast local static data.
*   **Fully Responsive**: Optimized for all devices with mobile-first navigation and touch-friendly interactions.
*   **Zero Backend**: Completely static architecture, removing server costs and complexity.
*   **Real Reviews**: Integrated customer testimonials carousel using `framer-motion`.
*   **Direct Ordering**: One-click links to Zomato, Swiggy, and WhatsApp for orders.

## 🛠️ Tech Stack

*   **Frontend**: React (TypeScript)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Routing**: Wouter

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/The-Green-Pantry.git
    cd Green-Pantry
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run locally:**
    ```bash
    npm run dev
    ```

## 📦 Deployment

This project is pre-configured for **GitHub Pages**.

1.  Push your code to a GitHub repository.
2.  Go to `Settings` > `Pages`.
3.  Under **Build and deployment**, select **GitHub Actions** (recommended) or deploy from the `gh-pages` branch if you set up a workflow.
4.  The build output directory is `dist`.

**Configuration Note**:
The `vite.config.ts` file is currently set with:
```typescript
base: '/The-Green-Pantry/'
```
If your repository name is different, please update this value in `vite.config.ts` to match your repo name (e.g., `base: '/my-repo-name/'`).
