import { useEffect, useState } from "react";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import Container from "./components/ui/Container/Container";
import BookCard from "./components/ui/BookCard/BookCard";
import { IBook } from "./types";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const response = await fetch("https://gutendex.com/books");
      const data = await response.json();
      setLoading(false);
      setBooks(data.results);
    };

    fetchBooks();
  }, []);

  console.log(books, loading);

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <div className="my-5 flex justify-between items-center">
            <div>
              <input
                type="text"
                placeholder="Search books..."
                className="border-2 px-4 py-2 rounded-md outline-none border-secondary w-[500px]"
              />
            </div>
            <div>
              <select className="border-2 border-secondary py-1 px-2 rounded-md">
                <option value="all">All</option>
                <option value="ebooks">Ebooks</option>
                <option value="free-ebooks">Free Ebooks</option>
                <option value="paid-ebooks">Paid Ebooks</option>
              </select>
            </div>
          </div>

          <div>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
              {books.map((book: IBook) => (
                <BookCard key={book.id} data={book} />
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
