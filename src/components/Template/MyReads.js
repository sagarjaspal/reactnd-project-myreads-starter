import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";

import "./MyReads.css";
import ViewShelves from "../Organisms/ViewShelves";
import SearchBook from "../Organisms/SeachBook";

class MyReads extends PureComponent {
  state = {
    books: [],
  };

  getAllBooks = () =>
    BooksAPI.getAll().then((books) => this.setState({ books }));

  componentDidMount() {
    this.getAllBooks();
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getAllBooks());
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ViewShelves books={books} updateBook={this.updateBook} />
          </Route>
          <Route exact path="/search">
            <SearchBook books={books} updateBook={this.updateBook} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default MyReads;
