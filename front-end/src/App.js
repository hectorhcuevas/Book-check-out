import logo from './logo.svg';
import './App.css';
import Booklist from './components/Booklist.js'
import Book from './components/Book.js';

//REACT HOOKS IMPORT
import React, { useState, useEffect } from 'react'

//REACT ROUTER IMPORT
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//MATERIAL UI IMPORTS
import AppBar from '@material-ui/core/AppBar';


function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/books/')
    .then(res => res.json())
    .then(json => setBooks(json))
    .catch(err => console.log("ERROR: ", err))

  }, []) 

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <p>SDI Library</p>
        </AppBar>
        <Switch>
          <Route path="/api/books/:bookId" children={(props) => <Book {...props}/> }/>
          <Route path="/" children={<Booklist books={books}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;