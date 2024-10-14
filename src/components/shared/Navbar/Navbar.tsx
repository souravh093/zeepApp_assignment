import { Heart, NotebookText } from "lucide-react";
import Container from "../../ui/Container/Container";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <Container className="py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black flex gap-1 items-center text-secondary hover:scale-110 transition duration-200 cursor-pointer">
            <NotebookText className="w-8 h-8" /> ZEPBOOKS
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-3 text-white">
            <li className="hover:text-gray-300 cursor-pointer hover:scale-110 transition duration-200">
              Home
            </li>
            <li className="flex items-center gap-1 hover:text-gray-300 cursor-pointer hover:scale-110 transition duration-200">
              <Heart className="w-4 h-4 text-secondary" /> WishList
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
