import React from 'react'

import { instructionsStep } from '../../redux/actions/singleRecipeActionTypes'

import './PreparationItem.css'

const PreparationItem: React.FC<instructionsStep> = ({ number, step, equipment, ingredients }) => {

    return (
        <div className="preparation__content__item">
            <p><strong>{number + '. '}</strong>{step}</p>
            <div className="preparation__content__item__images">
                {equipment.length > 0 ?
                    equipment.map((item, index) => (
                        <div key={index} className="content__item__equipment">
                            <img src={`${process.env.REACT_APP_RECIPE_EQUIPMENT}${item.image}`} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))
                    : null}
                {ingredients.length > 0 ?
                    ingredients.map((item, index) => (
                        <div key={index} className="content__item__ingredient">
                            <img src={`${process.env.REACT_APP_RECIPE_INGREDIENT}${item.image}`} alt={item.name} />
                            <h4>{item.name}</h4>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    )
}

export default PreparationItem
