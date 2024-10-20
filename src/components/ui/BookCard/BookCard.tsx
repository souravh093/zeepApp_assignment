import { Heart } from "lucide-react";
import { IBook } from "../../../types";
import { useEffect, useState } from "react";

const BookCard = ({ data }: { data: IBook }) => {
  const [book, setBook] = useState(false);
  const { title, authors, formats, id } = data;

  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const bookIndex = wishlist.findIndex((book: IBook) => book.id === id);

    if (bookIndex !== -1) {
      wishlist.splice(bookIndex, 1);
      setBook(false);
    } else {
      wishlist.push({
        id,
        title,
        author: authors[0]?.name,
        image: formats["image/jpeg"],
      });
      setBook(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  useEffect(() => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ) as IBook[];
    if (wishlist.find((book: IBook) => book.id === id)) {
      setBook(true);
    }
  }, [id]);

  return (
    <div className="border shadow-lg rounded-md hover:scale-105 transition cursor-pointer overflow-hidden">
      <div className="relative">
        <img
          src={formats["image/jpeg"]}
          className="bg-gray-50 h-80 w-full object-cover transition-transform duration-300 hover:scale-110"
          alt={title}
        />
        <span
          onClick={handleWishlist}
          className="absolute right-5 top-5 bg-white p-2 rounded-full shadow-md cursor-pointer transition-colors duration-300 hover:bg-gray-200"
        >
          {book ? <Heart className="text-red-500" /> : <Heart />}
        </span>
      </div>
      <div className="px-4 py-2 bg-white">
        <h3 className="text-lg font-semibold mb-1">
          {title.length > 20 ? `${title.slice(0, 20)}...` : title}
        </h3>
        <p className="text-gray-600 mb-2">
          Author:
          {authors[0]?.name.length > 15
            ? `${authors[0]?.name.slice(0, 15)}...`
            : authors[0]?.name}
        </p>
        <p className="text-gray-500 text-sm">ID: {id}</p>
      </div>
    </div>
  );
};

export default BookCard;
