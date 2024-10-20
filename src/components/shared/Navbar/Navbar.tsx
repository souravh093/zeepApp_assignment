import { Heart, NotebookText } from "lucide-react";
import Container from "../../ui/Container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <Container className="py-5 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-black flex gap-1 items-center text-secondary hover:scale-110 transition duration-200 cursor-pointer">
            <NotebookText className="w-8 h-8" /> ZEPBOOKS
          </h1>
        </Link>
        <div>
          <ul className="flex items-center gap-3 text-white">
            <Link to={"/"} className="hover:text-gray-300 cursor-pointer hover:scale-110 transition duration-200">
              Home
            </Link>
            <Link to="/wishlist" className="flex items-center gap-1 hover:text-gray-300 cursor-pointer hover:scale-110 transition duration-200">
              <Heart className="w-4 h-4 text-secondary" /> WishList
            </Link>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
