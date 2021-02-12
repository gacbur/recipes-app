import React from 'react'

import { ingredientItemInfo } from '../../redux/actions/singleRecipeActionTypes'

import './IngredientItem.css'

type IngredientItemProps = {
    measuresType: string
    image: string,
    name: string
    measureUS_amount: number,
    measureUS_unit: string,
    measureMetric_amount: number
    measureMetric_unit: string
}

const IngredientItem: React.FC<IngredientItemProps> = ({ image, name, measureMetric_amount, measureMetric_unit, measuresType, measureUS_unit, measureUS_amount }) => {
    return (
        <div className="list__content__item" style={{ textAlign: 'center' }}>
            <img src={`${process.env.REACT_APP_RECIPE_INGREDIENT}${image}`} alt={name}></img>
            <h5>{name}</h5>
            <h4>{measuresType !== "metric" ? measureMetric_amount : measureUS_amount}/{measuresType !== "metric" ? measureMetric_unit : measureUS_unit}</h4>
        </div>
    )
}

export default IngredientItem
