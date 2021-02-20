import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import './ingredientsList.css'

import IngredientItem from '../ingredientItem/IngredientItem'

const IngredientsList = () => {

    const [measuresType, setMeasuresType] = useState<string>('metric')
    const single_recipe = useSelector((state: RootStore) => state.singleRecipe.single_recipe)

    console.log(single_recipe?.ingredientsInfo)

    return (
        <div className='ingredients-list'>
            <h2>Ingredients</h2>
            <select
                value={measuresType}
                onChange={(e) => setMeasuresType(e.target.value)}>
                <option value="metric">metric</option>
                <option value="us">us</option>
            </select>
            <div className="ingredients-list__content">
                {single_recipe && single_recipe?.ingredientsInfo.map(item => (
                    <IngredientItem
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        measureUS_amount={item.measureUS_amount}
                        measureUS_unit={item.measureUS_unit}
                        measureMetric_amount={item.measureMetric_amount} measureMetric_unit={item.measureMetric_unit}
                        measuresType={measuresType}
                    />
                ))}
            </div>
        </div>
    )
}

export default IngredientsList
