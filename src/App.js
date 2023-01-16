import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(`title: ${title}`);

    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 100000000), title }
    ];
    setBooks(updatedBooks);
    console.log(books);
  };

  const editBookById = (id, newTitle) => {
    let updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    let updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  // handleEditBook

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}
