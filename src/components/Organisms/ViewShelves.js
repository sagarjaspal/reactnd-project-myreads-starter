import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelf from "../Molecules/BookShelf";

class ViewShelves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getAllBooks = () =>
    BooksAPI.getAll().then((books) => this.setState({ books }));

  componentDidMount() {
    this.getAllBooks();
  }

  updateBook = (book, shelf) =>
    BooksAPI.update(book, shelf)
      .then(this.getAllBooks())
      .then(this.forceUpdate());

  render() {
    const { books } = this.state;
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
              updateBook={this.updateBook}
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
