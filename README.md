##Online Library System ##

A full-stack React + Redux library system where users can browse books by category, view details, and add new books with ease.

##🚀 Features ##

📖 Home Page with welcome message & categories

🔍 Search & Filter books by title or author

➕ Add Book functionality with validation

📂 Category-based Routing using React Router

🆕 Displays Newly Added Books instantly (Redux state)

❌ 404 Page for undefined routes

🔗 Live Demo

👉 Click here to view live project

🛠️ Tech Stack

⚛️ React 18

🟣 Redux Toolkit

🛣 React Router DOM v6

🎨 TailwindCSS / Material UI (MUI)

⚡ Vite / Create React App

🧭 Project Structure
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

