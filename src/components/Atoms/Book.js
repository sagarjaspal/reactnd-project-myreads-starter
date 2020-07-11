import React from "react";

const Book = ({ book, updateBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(event) => updateBook(book, event.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.length > 1 ? (
          book.authors.map((author) => (
            <span key={author}>{`${author}, `}</span>
          ))
        ) : (
          <span>{book.authors}</span>
        )}
        {}
      </div>
    </div>
  );
};

export default Book;
