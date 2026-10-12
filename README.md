# 🍕 FoodieHub – Modern React & Vite Frontend

![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.1-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green)

> **FoodieHub Frontend** is an ultra-fast, responsive single-page web application (SPA) built with **React 19** and **Vite**. Designed with an appetizing UI, interactive cart drawer, real-time order tracking stepper, and seamless connectivity to the FoodieHub Spring Boot backend REST APIs.

---

## 🌟 Key Features

* **⚡ Modern Component Architecture**: Built using functional components, modern React hooks (`useState`, `useEffect`), and Lucide icons.
* **🔍 Instant Search & Category Filtering**: Real-time restaurant discovery with category tabs (Biryani, Pizzas, Burgers, South Indian, Desserts, Beverages).
* **🛒 Interactive Shopping Cart Drawer**:
  * Real-time item additions with veg/non-veg tags.
  * Quantity increment/decrement controls.
  * Item subtotal, GST, platform fee, and dynamic free delivery thresholds (Free on orders ₹299+).
  * Strict single-restaurant cart enforcement rule.
* **💳 Seamless Checkout Modal**:
  * Delivery address input and validation.
  * Payment simulation for Cash on Delivery (COD) and Online Payment (`DEMO_ONLINE`).
* **📍 Live Order Tracking Stepper**:
  * Visual progress tracker through order lifecycle states:
    `PENDING` ➔ `CONFIRMED` ➔ `PREPARING` ➔ `OUT_FOR_DELIVERY` ➔ `DELIVERED`.
* **🔑 Instant 1-Click Demo Authentication**:
  * Pre-configured quick login for Customer, Restaurant Owner, and Admin roles.
  * Registration modal for new customer account creation.
* **🌐 Hybrid API & Standalone Mode**:
  * Automatically connects to Spring Boot backend REST endpoints on `http://localhost:8080/api`.
  * Gracefully falls back to integrated mock data when running standalone.

---

## 🛠️ Technology Stack

| Layer | Technology |
|:---|:---|
| **Framework** | React 19 |
| **Build Tool & Bundler** | Vite 6 |
| **HTTP Client** | Axios |
| **Icons** | Lucide React |
| **Styling** | Modern CSS Variables & Flexbox/Grid Layouts |
| **Fonts** | Google Fonts (Plus Jakarta Sans) |

---

## 📂 Project Structure

```text
foodiehub-frontend/
├── index.html                  # HTML entry point with fonts & metadata
├── vite.config.js              # Vite configuration & backend proxy
├── package.json                # Project dependencies and npm scripts
├── README.md                   # Frontend documentation
└── src/
    ├── main.jsx                # Application bootstrap
    ├── App.jsx                 # Main stateful application component
    ├── index.css               # Global theme variables, animations & styles
    ├── services/
    │   └── api.js              # Axios client, REST API calls & fallback data
    └── components/
        ├── Navbar.jsx          # Header with logo, cart counter & auth status
        ├── Hero.jsx            # Promotional banner, search bar & highlights
        ├── CategoryFilter.jsx  # Interactive cuisine/category pills
        ├── RestaurantCard.jsx  # Card with ratings, delivery time & pricing
        ├── MenuModal.jsx       # Categorized dish list with Add-to-Cart actions
        ├── CartDrawer.jsx      # Slide-out cart with bill breakdown
        ├── CheckoutModal.jsx   # Address selection & payment methods
        ├── OrderTrackerModal.jsx # Animated order tracking status timeline
        ├── AuthModal.jsx       # Login/Register modal with 1-click demo logins
        └── Footer.jsx          # Project credentials & GitHub profile link
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure **Node.js** (v18+) and **npm** are installed on your computer:
```bash
node -v
npm -v
```

### 2. Installation
Navigate into the frontend project folder and install dependencies:
```bash
cd foodiehub-frontend
npm install
```

### 3. Run Development Server
Start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔗 Backend Integration

This frontend is designed to work seamlessly with the [FoodieHub Spring Boot Backend](https://github.com/24eg109b47-dev/foodiehub-backend).
By default, the Vite development server proxies API requests to `http://localhost:8080/api`:
* Start the backend (`mvn spring-boot:run` on port `8080`).
* Start the frontend (`npm run dev` on port `5173`).
* All restaurant data, user logins, and orders will sync with MySQL in real time!

---

## 👨‍💻 Author
* **GitHub Profile**: [@24eg109b47-dev](https://github.com/24eg109b47-dev)
