import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// context
import { useStateValue } from "./StateProvider";
//
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

import { auth } from "./firebase";
//
import "./App.css";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  //
  useEffect(() => {
    const unsubscripbe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // clean up
      unsubscripbe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
