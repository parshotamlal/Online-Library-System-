import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Store } from "./Store/Store";
import { Provider } from "react-redux";

import { AppLayout } from "./Applayout";
import { Home } from "./Components/Home/Home";
import { Contact } from "./Components/Contact/Contact";
import { AddBook } from "./Components/AddBook/AddBook";
import { Browsebooks } from "./Components/Browsebooks/Browsebooks.jsx";
import { Bookdetail } from "./Components/BookDetail/Bookdetail.jsx";
import { Errorpage } from "./Components/ErrorPage/Errorpage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Errorpage />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="addbook" element={<AddBook />} />
      <Route path="books/:categoryname/:name?" element={<Browsebooks />}>
        <Route path=":name" element={<Bookdetail />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
