import React, { Component } from "react";
import Book from "../Atoms/Book";

class BookShelf extends Component {
  state = {};

  filterShelfBooks = (shelfId, books) =>
    books.filter((book) => book.shelf === shelfId);

  render() {
    const { shelf, books, updateBook } = this.props;
    let shelfBooks = shelf ? this.filterShelfBooks(shelf.id, books) : books;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf && shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks &&
              shelfBooks.length > 0 &&
              shelfBooks.map((book) => (
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
