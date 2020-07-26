import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import InferiorMenu from './InferiorMenu';
import './CSS/ExploreHomeScreen.css';

function ExploreHomeScreen() {
  return (
    <div className="explore-screen">
      <Header screen={'Explore'} />
      <div className="explore-menu fade-in-fwd ">
        <Link to="/explorar/comidas">
          <p className="explore-button" data-testid="explore-food">Explore Food</p>
        </Link>
        <Link to="/explorar/bebidas">
          <p className="explore-button" data-testid="explore-drinks">Explore Drinks</p>
        </Link>
      </div>
      <InferiorMenu />
    </div>
  );
}

export default ExploreHomeScreen;
