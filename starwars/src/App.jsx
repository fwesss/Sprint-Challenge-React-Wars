import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardColumns } from 'reactstrap';

import Header from './components/Header/Header';
import CharacterCard from './components/CharacterCard/CharacterCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [swapiData, setSwapiData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then((result) => setSwapiData(result.data.results))
      .catch(() => console.log('Error retrieving data from swapi.'));

    axios
      .get('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then((result) => setImageData(result.data))
      .catch(() => console.log('Error retrieving data from starwas-api.'));
  }, []);

  return (
    <>
      <Header />
      <CardColumns className="p-4">
        {swapiData.map((character) => (
          <CharacterCard
            key={character.url}
            character={character}
            image={imageData.filter((person) => (
              person.name === character.name
            ))}
          />
        ))}
      </CardColumns>
    </>
  );
};


export default App;
