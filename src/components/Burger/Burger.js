import _ from 'lodash';
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const ingredientRender = _.keys(props.ingredients).map((ingredient) => {
    let currentIngredient = [];

    for (let i = 0, length = props.ingredients[ingredient]; i < length; i++) {
      currentIngredient.push(<BurgerIngredient key={ingredient + i} type={ingredient} />);
    }

    return currentIngredient;
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientRender}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
