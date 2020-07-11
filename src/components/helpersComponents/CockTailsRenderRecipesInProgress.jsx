import React from 'react';
import PropTypes from 'prop-types';
import { copyContent } from '../functionsProgressScreen';
import CockTailsListRecipeProgress from './CockTailsListRecipeProgress';
import share from '../../images/shareIcon.svg';

function CocktailsRenderRecipesInProgress(props) {
  const { values } = props;
  const {
    setShowCopyAlert,
    inProgressDrink,
    showCopyAlert,
    pathname,
  } = values;
  return (
    <div className="details-screen">
      <div className="basic-info">
        <div className="wrapper">
          <div className="square" />
          <img src={inProgressDrink.strDrinkThumb} alt="" data-testid="recipe-photo" />
        </div>
        {showCopyAlert ? <h2>Link copiado!</h2> : null}
        <button
          type="button"
          data-testid="share-btn"
          onClick={() => copyContent(`http://localhost:3000/${pathname}`, setShowCopyAlert)}
          className="share"
        >
          <img src={share} alt="icon" />
        </button>
        <CockTailsListRecipeProgress listValues={values} />
      </div>
    </div>
  );
}

CocktailsRenderRecipesInProgress.propTypes = {
  values: PropTypes.string.isRequired,
};
export default CocktailsRenderRecipesInProgress;
