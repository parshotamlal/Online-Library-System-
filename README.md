#  Online Library System  

A **full-stack React + Redux library system** where users can browse books by category, view details, and add new books with ease.  

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux" />
  <img src="https://img.shields.io/badge/Router-DOM-orange?style=for-the-badge&logo=reactrouter" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>  

---

## 🚀 Features  

- 📖 **Home Page** with welcome message & categories  
- 🔍 **Search & Filter** books by title or author  
- ➕ **Add Book** functionality with validation  
- 📂 **Category-based Routing** using React Router  
- 🆕 **Displays Newly Added Books** instantly (Redux state)  
- ❌ **404 Page** for undefined routes  

---

## 🧭 Project Structure  

src/
├── Components/
│   ├── AddBook/
│   │   └── AddBook.jsx
│   ├── BookCard/
│   │   └── BookCard.jsx
│   ├── BrowseBooks/
│   │   └── BrowseBooks.jsx
│   ├── BookDetail/
│   │   └── BookDetail.jsx
│   ├── Home/
│   │   └── Home.jsx
│   └── NotFound/
│       └── NotFound.jsx
│
├── Features/
│   └── bookSlice.js        # Redux slice for book state
│
├── Store/
│   └── store.js            # Redux store configuration
│
├── AppLayout.jsx           # Navbar + Footer layout
├── App.jsx                 # Route configuration
└── main.jsx                # React entry point


## ⚡ Installation & Setup  

Follow these steps to run the project locally:  

<div align="center" style="background:#000; padding:15px; border-radius:10px;">

# 1️⃣ Clone the repo
git clone https://github.com/your-username/online-library-system.git

# 2️⃣ Navigate into project folder
cd online-library-system

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run dev

# 5️⃣ Build for production
npm run build

# 6️⃣ Preview production build (optional)
npm run preview


