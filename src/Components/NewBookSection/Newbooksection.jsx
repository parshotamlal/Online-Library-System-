import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/joy/Button";
import { BookCard } from "../BookCard/Bookcard";
import { clearNewBook } from "../../Features/BookSlice.js";

export const Newbooksection = () => {
  const dispatch = useDispatch();
  const newBooks = useSelector((state) => state.newBook);
  console.log(newBooks);

  return (
    <div className="my-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl font-outfit uppercase text-indigo-700">
          Recently Added Books
        </p>

        <Button
          variant="soft"
          color="neutral"
          onClick={() => {
            dispatch(clearNewBook());
          }}
        >
          Clear Section
        </Button>
      </div>
      <div
        className="
          mt-4
          flex snap-x gap-3 overflow-x-auto          /* horizontal scroll on mobiles */
          sm:flex-wrap sm:gap-4 sm:overflow-visible  /* wrap nicely on ≥640 px */
        "
      >
        {newBooks.map((bookitem, index) => {
          return <BookCard key={index} book={bookitem} />;
        })}
      </div>
    </div>
  );
};
