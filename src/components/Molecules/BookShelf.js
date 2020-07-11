import React, { Component } from "react";
import Book from "../Atoms/Book";

class BookShelf extends Component {
  state = {};

  filterShelfBooks = (shelfId, books) =>
    books.filter((book) => book.shelf === shelfId);

  render() {
    const { shelf, books, updateBook } = this.props;
    let shelfBooks = this.filterShelfBooks(shelf.id, books);

    console.log(shelfBooks);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) => (
              <li key={book.id}>
                <Book book={book} updateBook={updateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
