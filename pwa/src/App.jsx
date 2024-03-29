import React, { Component } from 'react';
import { Routes, Route,Link } from "react-router-dom"
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <h3>Grocery List</h3>
    <div className="links">
      <Link to="/">To Buy</Link>
      <Link to="/purchased">Purchased</Link>
    </div>
  </div>
);

const ToBuy = () => {
  return (
    <>
      <NavBar />
      <p className="layout">Still Need:</p>
      <ul className="Needed">
        <li>Eggs</li>
        <li>Bread</li>
        <li>Avocados</li>
      </ul>
    </>
  );
};

const Purchased = () => {
  return (
    <>
      <NavBar />
      <p className="layout">Purchase History:</p>
      <ul className="Purchased">
        <li>Almond Milk</li>
        <li>Raspberries</li>
        <li>Tea</li>
      </ul>
    </>
  );
};

class App extends Component {
  render() {
    return (
      <Routes>
          <Route  path="/" element={ <ToBuy/> } />
          <Route path="/purchased" element={ <Purchased/> } />
       </Routes>
    );
  }
}

export default App;