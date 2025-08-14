import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../Features/BookSlice";

export const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category || !description || !rating) {
      alert("Please fill in all fields.");
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category,
      description,
      rating,
    };

    dispatch(addBook(newBook));
    navigate(-1);

    setTitle("");
    setAuthor("");
    setCategory("");
    setDescription("");
    setRating("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-amber-100"
      >
        <h2 className="text-3xl font-bold text-amber-800 text-center drop-shadow-sm">
          📚 Add New Book
        </h2>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-gray-700 font-medium mb-1">
            Author
          </label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
            Category
          </label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-1">
            Rating (1 to 5)
          </label>
          <input
            id="rating"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};
