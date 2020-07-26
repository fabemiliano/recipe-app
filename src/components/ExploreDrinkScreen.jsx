import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getRandomDrink } from '../services/drink-api';
import Header from './Header';
import InferiorMenu from './InferiorMenu';
import './CSS/ExploreHomeScreen.css';

function ExploreDrinkScreen() {
  const [id, setId] = useState('');

  const handleClick = () => {
    getRandomDrink()
      .then((answer) => setId(answer.drinks[0].idDrink));
  };
  return (
    <div className="explore-screen">
      <Header screen={'Explore Drinks'} />
      <div className="explore-container" >
        <Link to="/explorar/bebidas/ingredientes">
          <button
            className="explore-food-button"
            data-testid="explore-by-ingredient"
          >By Ingredients</button>
        </Link>
        <button
          className="explore-food-button" data-testid="explore-surprise"
          onClick={handleClick}
        >Surprise me!</button>
      </div>
      {id !== '' && <Redirect to={`/bebidas/${id}`} />}
      <InferiorMenu />
    </div>
  );
}

export default ExploreDrinkScreen;
