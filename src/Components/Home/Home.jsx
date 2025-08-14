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
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl sm:text-3xl font-outfit uppercase text-indigo-700">
            Popular Categories
          </h2>
        </header>

        {/* Scrollable category list */}
        <div
          className="
            mt-5 flex gap-3 overflow-x-auto scrollbar-hide snap-x
            sm:flex-wrap sm:gap-4 sm:overflow-visible
          "
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
