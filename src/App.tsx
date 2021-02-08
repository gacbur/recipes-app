import React, { useState } from 'react'

import Navbar from '../src/layouts/navbar/Navbar'
import Main from '../src/layouts/main/Main'
import Sidedrawer from './components/sidedrawer/Sidedrawer'
import Footer from './layouts/footer/Footer'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="app">
      <Router>
        <div className="app__content">
          <Navbar setShow={setShow} />
          <Main />
          <Sidedrawer show={show} setShow={setShow} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
