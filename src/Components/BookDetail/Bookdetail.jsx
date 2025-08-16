import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Bookdetail = () => {
  const { id } = useParams(); // URL se book id milega
  const book = useSelector((state) =>
    state.books.find((b) => String(b.id) === id) // Redux store se book find kare
  );

  // Agar book na mile
  if (!book) {
    return (
      <div className="text-center text-red-600 font-semibold mt-10">
        Book not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 md:px-8">
      {/* Outer Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* ----------------- Left: Book Image ----------------- */}
        <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4">
          <img
            src={book.cover || "https://via.placeholder.com/200x300?text=No+Image"}
            alt={book.title}
            className="w-full h-auto object-contain rounded"
          />
        </div>

        {/* ----------------- Right: Book Details ----------------- */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between gap-4">
          {/* Title, Author & Description */}
          <div>
            <h2 className="text-3xl font-bold text-amber-900">{book.title}</h2>
            <p className="text-md text-gray-600 mt-1">
              by <span className="font-semibold">{book.author}</span>
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* Rating & Category */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-yellow-600 font-semibold">
              ⭐ {book.rating} / 5
            </span>
            <span className="px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full">
              {book.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
