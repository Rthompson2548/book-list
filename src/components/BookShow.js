import { useState } from "react";
import { render } from "react-dom";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  // State for hiding/displaying edit form
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = !showEdit ? (
    <h3>
      {book.title} ({book.id})
    </h3>
  ) : (
    <BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit} />
  );

  return (
    <div className="book-show">
      {/* {book.title} ({book.id}) */}
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
