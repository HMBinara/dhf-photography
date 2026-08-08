# Dewindu Fernando — Photography Portfolio

A high-performance, dark-themed, ultra-responsive portfolio web application built for **Dewindu Fernando Photography**. Designed to showcase fine-art macro, light painting, pencil art, and event photography with seamless micro-interactions and dynamic filtering.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## 🌟 Features

- **Hero & Interactive Landing:** Custom gradient aesthetics, high-contrast profile avatar, and islandwide availability indicator.
- **Category-Based Filtering:** Seamless gallery filtering across Macro, Light Painting, Pencil Art, and Events/Weddings.
- **High-Contrast Lightbox:** Full-screen responsive lightbox modal with background backdrop blur and keyboard/click dismissals.
- **Micro-Interactions & Motion:** Fluid page transitions and interactive hover effects powered by Framer Motion.
- **Mobile First & Fully Responsive:** Optimized layout across mobile, tablet, and high-DPI desktop viewports.
- **Image Sharpness Engine:** Custom CSS rendering rules applied across gallery items for ultra-crisp photo previews.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling & UI:** Tailwind CSS, Custom CSS Utilities
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (v6)

---

## 📁 Project Structure

```text
dhf-react/
├── public/
│   └── images/            # Categorized high-resolution photo assets
├── src/
│   ├── components/        # Reusable UI components (Navbar, GalleryGrid, CategoryCard, etc.)
│   ├── pages/             # Route views (Home, Gallery, About, Contact)
│   ├── App.jsx            # Routing configuration
│   ├── index.css          # Global styles & Tailwind layers
│   └── main.jsx           # React DOM entrypoint
├── package.json
└── vite.config.js
🚀 Getting Started
Prerequisites
Ensure you have Node.js (v18 or higher) and npm installed on your machine.

Installation
Clone the repository:

Bash
git clone [https://github.com/HMBinara/dhf-photography.git](https://github.com/HMBinara/dhf-photography.git)
cd dhf-photography
Install dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

Build for production:

Bash
npm run build
📋 Requirements & Compliance
Performance: Optimized lazy loading and WebP support with target load times under 3s.

Accessibility: Keyboard navigable lightbox (Esc key), semantic HTML tags, and accessible contrast levels.

Cross-Browser: Tested on Chrome, Firefox, Edge, and Safari mobile/desktop environments.

📄 License
This project is created for Dewindu Fernando Photography. All photography content and custom graphic assets are copyright protected and subject to original ownership.