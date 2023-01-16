import { useState } from "react";

const BookEdit = ({ book, onEdit, setShowEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log(`new title: ${title}`);
    onEdit(book.id, title);
    setShowEdit(false);
  };

  return (
    <form className="book-edit" onSubmit={handleSave}>
      <label>Title</label>
      <input
        className="input"
        value={title}
        // placeholder={book.title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
