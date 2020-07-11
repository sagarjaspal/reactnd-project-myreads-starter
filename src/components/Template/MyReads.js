import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import "./MyReads.css";
import ViewShelves from "../Organisms/ViewShelves";
import SearchBook from "../Organisms/SeachBook";

class MyReads extends PureComponent {
  state = {};
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <ViewShelves />
          </Route>
          <Route exact path="/search">
            <SearchBook />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default MyReads;
