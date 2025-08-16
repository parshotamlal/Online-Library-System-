import React, { useState } from "react";
import { Categorycard } from "../Categorycard/Categorycard";
import { Bookslayout } from "../BooksLayout/Bookslayout";
import { Hero } from "../Hero/Hero";
import { useSelector } from "react-redux";

export const Home = () => {
  const [booklayoutTitle, setBooklayoutTitle] = useState("All Books");
  const [activeCategory, setActiveCategory] = useState("");

  const category = useSelector((state) => state.category);

  return (
    <>
      <Hero />

      {/* Category Section */}
      <section className="my-8">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
          <h2 className="text-2xl sm:text-3xl font-outfit uppercase text-indigo-700 text-center">
            Popular Categories
          </h2>
        </header>

        {/* Scrollable category list */}
        <div
          className=" mt-5 flex items-center justify-center gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 transition-all duration-300 sm:flex-wrap sm:gap-4 sm:overflow-visible bg-gradient-to-r from-amber-50 via-white to-amber-50 "
        >
          {category.map((cat, index) => (
            <Categorycard
              key={index}
              categoryname={cat}
              isActive={activeCategory === cat}
              OnClick={() => {
                setBooklayoutTitle(cat);
                setActiveCategory(cat);
              }}
            />
          ))}
        </div>
      </section>

      {/* Books Section */}
      <Bookslayout title={booklayoutTitle} />
    </>
  );
};
