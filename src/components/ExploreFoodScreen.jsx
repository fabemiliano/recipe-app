import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getRandomMeal } from '../services/foodApi';
import Header from './Header';
import InferiorMenu from './InferiorMenu';
import './CSS/ExploreHomeScreen.css';

function ExploreFoodScreen() {
  const [id, setId] = useState('');

  const handleClick = () => {
    getRandomMeal()
      .then((answer) => setId(answer.meals[0].idMeal));
  };

  return (
    <div className="explore-screen">
      <Header screen={'Explore Food'} />
      <div className="explore-container" >
        <Link to="/explorar/comidas/ingredientes">
          <button
            className="explore-food-button fade-in-fwd"
            data-testid="explore-by-ingredient"
          >By Ingredients</button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            className="explore-food-button fade-in-fwd"
            data-testid="explore-by-area"
          >By Origin</button>
        </Link>
        <button
          className="explore-food-button fade-in-fwd"
          data-testid="explore-surprise"
          onClick={handleClick}
        >Surprise Me!</button>
      </div>
      {id !== '' && <Redirect to={`/comidas/${id}`} />}
      <InferiorMenu />
    </div>
  );
}

export default ExploreFoodScreen;
