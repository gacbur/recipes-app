import React from 'react'

import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import PreparationItem from '../../components/preparationItem/PreparationItem'

import './RecipePreparation.css'

const RecipePreparation = () => {

    const instructions = useSelector((state: RootStore) => state.singleRecipe.single_recipe?.instructions)

    return (
        <div className="recipe-preparation">
            <h2>Preparation</h2>
            <div className="recipe-preparation__content">
                {instructions?.map((item, index) => (
                    <PreparationItem
                        key={index}
                        number={item.number}
                        step={item.step}
                        equipment={item.equipment}
                        ingredients={item.ingredients}
                    />
                ))}
            </div>
        </div>
    )
}

export default RecipePreparation
