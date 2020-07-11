import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../Molecules/BookShelf";

class ViewShelves extends Component {
  render() {
    const { books, updateBook } = this.props;
    const shelves = [
      { id: "currentlyReading", name: "Currently Reading" },
      { id: "wantToRead", name: "Want to Read" },
      { id: "read", name: "Read" },
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <BookShelf
              key={shelf.id}
              shelf={shelf}
              books={books}
              updateBook={updateBook}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ViewShelves;
