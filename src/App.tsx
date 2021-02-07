import React, { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Sidedrawer from './components/sidedrawer/Sidedrawer'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="app">
      <Router>
        <div className="app__content">
          <Navbar setShow={setShow} />
          <Sidedrawer show={show} setShow={setShow} />
        </div>
        <footer className="footer">

        </footer>
      </Router>
    </div>
  );
}

export default App;
