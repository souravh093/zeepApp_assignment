import { useEffect, useState } from "react";
import Container from "./components/ui/Container/Container";
import BookCard from "./components/ui/BookCard/BookCard";
import { IBook } from "./types";

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("popular");
  const itemsPerPage = 15;

  console.log(searchTerm);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const response = await fetch(
        `https://gutendex.com/books?search=${encodeURIComponent(searchTerm)}&sort=${sortOption}`
      );
      const data = await response.json();
      setLoading(false);
      setBooks(data.results);
    };

    fetchBooks();
  }, [searchTerm, sortOption]);

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  const currentBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <main>
        <Container>
          <div className="my-5 flex justify-between items-center">
            <div>
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border-2 px-4 py-2 rounded-md outline-none border-secondary w-[500px]"
              />
            </div>
            <div>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className="border-2 border-secondary py-1 px-2 rounded-md"
              >
                <option value="popular">Most Popular</option>
                <option value="ascending">ID Ascending</option>
                <option value="descending">ID Descending</option>
              </select>
            </div>
          </div>

          <div>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {currentBooks.map((book: IBook) => (
                <BookCard key={book.id} data={book} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <nav className="inline-flex -space-x-px">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-2 leading-tight border ${
                    currentPage === index + 1
                      ? "text-white bg-blue-500 border-blue-500"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          </div>
        </Container>
      </main>
    </>
  );
}

export default App;