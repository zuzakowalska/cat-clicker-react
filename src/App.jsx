import React, { Component } from 'react';
import CatList from './components/CatList.jsx';
import './App.css';

const cats = [
  {
    'name': 'Puszek',
    'img': 'http://bit.ly/1SxM9yo',
    'clicks': 0
  },
  {
    'name': 'Okruszek',
    'img': 'http://bit.ly/1NF4QwZ',
    'clicks': 0
  },
  {
    'name': 'Awaria',
    'img': 'http://bit.ly/2AlHOdT',
    'clicks': 0
  },
  {
    'name': 'Blep',
    'img': 'http://bit.ly/2AlHOdT',
    'clicks': 0
  }
]

class App extends Component {
  render() {
    return (
      <div className="cat-clicker-app">
        <h1>Cat Clicker</h1>
        <CatList cats={cats}/>
      </div>
    );
  }
}

export default App;
