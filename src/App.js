import React, { useState, useEffect } from 'react';
import HeroCard from './components/HeroCard';
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
      {superHeroes && loading ? 'loading' : 
        <>
        <HeroCard details={superHeroes} />
        </>
    }
    </div>
  );
}

export default App;
