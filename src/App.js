import React from 'react';
import './App.css';


import JokesForm from './components/JokesForm';
import JokesList from './components/JokesList';

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <JokesForm />
      <JokesList/>
    </div>
  );
}

export default App;
