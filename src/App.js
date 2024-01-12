import React from "react";
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <HomeScreen />
      {/* <Router>
        <Routes>
          <Route exact path="/">
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
