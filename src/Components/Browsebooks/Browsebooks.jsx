import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "@mui/joy/Button";

import { BookCard } from "../BookCard/Bookcard";
import { Bookdetail } from "../BookDetail/Bookdetail";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

export const Browsebooks = () => {
  const navigate = useNavigate();

  const { categoryname, name } = useParams();

  const allbookdata = useSelector((state) => state.list);

  const categoryWisedata = allbookdata.filter((data) => {
    return data.category === categoryname;
  });

  const singleBook = categoryWisedata?.find((book) => book.title === name);
  console.log(singleBook);

  return (
    <div className="flex flex-col gap-4 space-y-4 my-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-outfit text-amber-950 uppercase">
          {categoryname} - {name ? `Book Detail - ${name}` : "Books"}
        </p>

        <Button
          startDecorator={<KeyboardArrowLeft />}
          color="success"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      {/* Show single book if id exists */}

      {name ? (
        singleBook ? (
          <Bookdetail book={singleBook} />
        ) : (
          <p>Book not found</p>
        )
      ) : (
        <div
          className="grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5"
        >
          {categoryWisedata &&
            categoryWisedata.map((bookitem, index) => {
              return <BookCard key={index} book={bookitem} />;
            })}
        </div>
      )}
    </div>
  );
};
