import React from "react";
import { BookCard } from "../BookCard/Bookcard.jsx";
import { Newbooksection } from "../NewBookSection/Newbooksection.jsx";
import { useSelector, useDispatch } from "react-redux";
import { clearSearch } from "../../Features/BookSlice.js";
import Button from "@mui/joy/Button";

export const Bookslayout = () => {
  const dispatch = useDispatch();
  const booksfromStore = useSelector((state) => state.list);
  const newBook = useSelector((state) => state.newBook);
  const query = useSelector((state) => state.searchquery);

  const filteredbook = booksfromStore.filter((book) => {
    return book.title.toLowerCase() === query.toLowerCase();
  });

  const Books = query ? filteredbook : booksfromStore;

  return (
    <>
      {newBook.length > 0 && <Newbooksection />}

      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-outfit text-amber-950 uppercase">
            {query ? "Queried Book" : "All Books"}
          </p>
          {query && (
            <Button
              color="success"
              onClick={() => {
                dispatch(clearSearch());
              }}
            >
              clear
            </Button>
          )}
        </div>
        <div
          className="grid gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5"
        >
          {Books.map((book) => {
            return <BookCard key={book.id} book={book} />;
          })}
        </div>
      </div>
    </>
  );
};
