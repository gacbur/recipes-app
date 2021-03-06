import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from "react-router-dom";

import Axios from 'axios'

import { RouteComponentProps, withRouter } from 'react-router';

import { RootStore } from '../../redux/Store'
import { getSingleRecipe, singleRecipeLoaded, SingleRecipeNotLoaded } from '../../redux/actions/singleRecipeActions'
import { addToPinned } from '../../redux/actions/pinnedRecipesActions'
import { addToDone } from '../../redux/actions/doneRecipesActions'
import { addToFavorites } from '../../redux/actions/favoriteRecipesActions'

import { instructionsStep, equipmentItem, ingredientItem, singleRecipe } from '../../redux/actions/singleRecipeActionTypes'

import Loading from '../../components/loading/Loading'
import IngredientsList from '../../components/ingredientsList/IngredientsList'
import RecipePreparation from '../../components/recipePreparation/RecipePreparation'
import SimiliarRecipes from '../../components/similiarRecipes/SimiliarRecipes'

import './SingleRecipe.css'

import { RiPushpinLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { ImCheckmark2 } from 'react-icons/im'
import { HiArrowNarrowLeft } from 'react-icons/hi'

//@ts-ignore
import { NotificationManager } from 'react-notifications';

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleRecipe: React.FC<SingleRecipeProps> = ({ match }) => {

    const dispatch = useDispatch()

    let history = useHistory();

    const id = match.params.id

    const [renderErrorPage, setRenderErrorPage] = useState(false)

    useEffect(() => {

        if (id) {
            dispatch(SingleRecipeNotLoaded())
            Axios.get(`${process.env.REACT_APP_API_URL}/recipes/${id}/information?analyzedInstructions=false&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(result => result.data)
                .then(data => {
                    const singleRecipe: singleRecipe = {
                        id: data.id,
                        title: data.title,
                        image: data.image,
                        imageType: data.imageType,
                        author: data.creditsText,
                        readyInMinutes: data.readyInMinutes,
                        servings: data.servings,
                        vegan: data.vegan,
                        vegetarian: data.vegetarian,
                        instructions: data.analyzedInstructions[0].steps.map((item: instructionsStep) => {

                            return {
                                number: item.number,
                                step: item.step,
                                equipment: item.equipment.map((item: equipmentItem) => {
                                    return {
                                        image: item.image,
                                        name: item.name
                                    }
                                }),
                                ingredients: item.ingredients.map((item: ingredientItem) => {
                                    return {
                                        image: item.image,
                                        name: item.name
                                    }
                                })
                            }
                        }),
                        ingredientsInfo: data.extendedIngredients.map((item: any) => {
                            return {
                                image: item.image,
                                name: item.name,
                                measureUS_amount: item.measures.metric.amount,
                                measureUS_unit: item.measures.metric.unitShort,
                                measureMetric_amount: item.measures.us.amount,
                                measureMetric_unit: item.measures.us.unitShort
                            }
                        })
                    }
                    setRenderErrorPage(false)
                    dispatch(getSingleRecipe(singleRecipe))
                    dispatch(singleRecipeLoaded())
                })
                .catch(err => {
                    dispatch(SingleRecipeNotLoaded())
                    setRenderErrorPage(true)
                    console.log(err)
                })
        }

    }, [id, dispatch])

    const recipe_loaded = useSelector((state: RootStore) => state.singleRecipe.recipe_loaded)
    const single_recipe = useSelector((state: RootStore) => state.singleRecipe.single_recipe)

    const pinned_recipes = useSelector((state: RootStore) => state.pinnedRecipes.pinned_recipes)
    const done_recipes = useSelector((state: RootStore) => state.doneRecipes.done_recipes)
    const favorite_recipes = useSelector((state: RootStore) => state.favoriteRecipes.favorite_recipes)

    const handleActionButtons = (type: string) => {
        if (single_recipe) {
            const single_recipe_item = {
                id: single_recipe.id,
                title: single_recipe.title,
                image: single_recipe.image
            }
            switch (type) {
                case "pin":
                    const isInPinned = pinned_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInPinned) {
                        NotificationManager.error("This recipe is already in Pinned", '', 2000)
                    }
                    else {
                        dispatch(addToPinned(single_recipe_item))
                        NotificationManager.success("Recipe was successfully added to Pinned", '', 2000)
                    }
                    break;
                case 'done':
                    const isInDone = done_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInDone) {
                        NotificationManager.error("This recipe is already in Completed", '', 2000)
                    }
                    else {
                        dispatch(addToDone(single_recipe_item))
                        NotificationManager.success("Recipe was successfully added to Completed", '', 2000)
                    }
                    break;
                case 'favorite':
                    const isInFavorite = favorite_recipes.find(item => item.id === single_recipe_item.id)
                    if (isInFavorite) {
                        NotificationManager.error("This recipe is already in Favorite", '', 2000)
                    }
                    else {
                        dispatch(addToFavorites(single_recipe_item))
                        NotificationManager.success("Recipe was successfully added to Favorite", '', 2000)
                    }
                    break;
            }
        }
    }

    return (
        <>
            {renderErrorPage ?
                <div className="single-recipe-error">
                    <div className="single-recipe-error__button">
                        <button
                            onClick={() => history.goBack()}
                        >
                            <HiArrowNarrowLeft />
                        </button>
                    </div>
                    <div className="single-recipe-error__text">
                        <h3>Missing information</h3>
                        <h4>This recipe has missing recipe informations, Sorry! </h4>
                    </div>

                </div>
                :
                <div className="single-recipe">
                    {recipe_loaded && single_recipe ?
                        <>
                            <div className="single-recipe__header">
                                <img className="header__image" src={single_recipe.image} alt={single_recipe.title} />
                                <div className="header__frame">
                                    <div>
                                        <h2>{single_recipe.title}</h2>
                                        <h4>By</h4>
                                        <h3>{single_recipe.author}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="single-recipe__actions">
                                <button
                                    onClick={() => handleActionButtons('pin')}
                                ><RiPushpinLine /></button>
                                <button
                                    onClick={() => handleActionButtons('favorite')}
                                ><AiOutlineHeart /></button>
                                <button
                                    onClick={() => handleActionButtons('done')}
                                ><ImCheckmark2 /></button>
                            </div>
                            <div className="single-recipe__content">
                                <h3>Time: {single_recipe.readyInMinutes} minutes</h3>
                                <h3>Servings: {single_recipe.servings}</h3>
                                <h3>Vegan: {single_recipe.vegan ? 'Yes' : 'No'}</h3>
                                <h3>Vegetarian: {single_recipe.vegetarian ? 'Yes' : 'No'}</h3>
                                <IngredientsList />
                                <RecipePreparation />
                                <SimiliarRecipes singleRecipeID={id} />
                            </div>
                        </>
                        :
                        <Loading />}
                </div>
            }
        </>
    )
}

export default withRouter(SingleRecipe)
