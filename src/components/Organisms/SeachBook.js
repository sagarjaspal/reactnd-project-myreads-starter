import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import BookShelf from "../Molecules/BookShelf";

class SearchBook extends Component {
  state = {
    searchedBooks: [],
  };

  handleChange = (event, shelfBooks, searchedBooks) => {
    const query = event.target.value;
    query === ""
      ? this.setState({ searchedBooks: [] })
      : BooksAPI.search(query).then((searchedBooks) => {
          const allBooks =
            searchedBooks.length > 0 &&
            searchedBooks.map(
              (b1) => shelfBooks.find((b2) => b1.id === b2.id) || b1
            );
          this.setState({ searchedBooks: allBooks });
        });
  };

  render() {
    const { updateBook, books } = this.props;
    const { searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) =>
                this.handleChange(event, books, searchedBooks)
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          <BookShelf books={searchedBooks} updateBook={updateBook} />
        </div>
      </div>
    );
  }
}

export default SearchBook;
