import React, { useState, useEffect } from 'react';
import './App.css';

const SUPERHERO_API_URL = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [superHeroes, setSuperHeroes] = useState([]);
  useEffect(() => {
    fetch(SUPERHERO_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setSuperHeroes(jsonResponse);
        setLoading(false);
      });
  }, []);


  return (
    <div>
      {loading ? 'loading' : 
        <>
        <p>{superHeroes[0].name}</p>
        <img src={superHeroes[0].images.lg} alt=""/>
        </>
    }
    </div>
  );
}

export default App;
