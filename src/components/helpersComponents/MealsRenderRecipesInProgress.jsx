import React from 'react';
import PropTypes from 'prop-types';
import { copyContent } from '../functionsProgressScreen';
import MealsListRecipeProgress from './MealListRecipeProgress';
import share from '../../images/shareIcon.svg';


function MealsRenderRecipesInProgress(props) {
  const { values } = props;
  const {
    setShowCopyAlert,
    inProgressRecipe,
    showCopyAlert,
    pathname,
  } = values;
  return (
    <div className="details-screen">
      <div className="basic-info">
        <div className="wrapper">
          <div className="square" />
          <img src={inProgressRecipe.strMealThumb} alt="" data-testid="recipe-photo" />
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
        <MealsListRecipeProgress listValues={values} />
      </div>
    </div>
  );
}

MealsRenderRecipesInProgress.propTypes = {
  values: PropTypes.string.isRequired,
};
export default MealsRenderRecipesInProgress;
