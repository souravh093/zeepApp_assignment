import { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react'

interface IBook {
  id: string
  title: string
  author: string
  image: string
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<IBook[]>([])

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    setWishlist(storedWishlist)
  }, [])

  const handleRemove = (id: string) => {
    const updatedWishlist = wishlist.filter(book => book.id !== id)
    setWishlist(updatedWishlist)
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
  }

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-2xl font-bold mb-5">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Image</th>
                <th className="py-2 px-4 border-b text-left">Title</th>
                <th className="py-2 px-4 border-b text-left">Author</th>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    <img src={book.image} alt={book.title} className="w-16 h-24 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b font-medium">{book.title}</td>
                  <td className="py-2 px-4 border-b">{book.author}</td>
                  <td className="py-2 px-4 border-b">{book.id}</td>
                  <td className="py-2 px-4 border-b text-right">
                    <button
                      onClick={() => handleRemove(book.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <Trash2 className="h-5 w-5 inline-block" />
                      <span className="sr-only">Remove from wishlist</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}