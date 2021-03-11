import Navbar from '../src/layouts/navbar/Navbar'
import Main from '../src/layouts/main/Main'
import Footer from './layouts/footer/Footer'

import ScrollToTop from './components/scrollToTop/ScrollToTop'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="app__content">
          <Navbar />
          <Main />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
