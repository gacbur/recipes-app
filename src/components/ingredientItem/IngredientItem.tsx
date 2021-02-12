import React from 'react'

import { ingredientItemInfo } from '../../redux/actions/singleRecipeActionTypes'

import './IngredientItem.css'

const IngredientItem: React.FC<ingredientItemInfo> = ({ image, name, measureMetric_amount, measureMetric_unit }) => {
    return (
        <div className="list__content__item" style={{ textAlign: 'center' }}>
            <img src={`${process.env.REACT_APP_RECIPE_INGREDIENT}${image}`} alt={name}></img>
            <h5>{name}</h5>
            <h4>{measureMetric_amount}/{measureMetric_unit}</h4>
        </div>
    )
}

export default IngredientItem
