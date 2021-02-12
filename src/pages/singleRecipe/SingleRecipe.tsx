import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import Axios from 'axios'

import { RouteComponentProps, withRouter } from 'react-router';

import { RootStore } from '../../redux/Store'
import { getSingleRecipe, singleRecipeLoaded, SingleRecipeNotLoaded } from '../../redux/actions/singleRecipeActions'
import { instructionsStep, equipmentItem, ingredientItem } from '../../redux/actions/singleRecipeActionTypes'

import Loading from '../../components/loading/Loading'
import IngredientsList from '../../components/ingredientsList/IngredientsList'

import './SingleRecipe.css'

import { GrPin } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'
import { ImCheckmark2 } from 'react-icons/im'


type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleRecipe: React.FC<SingleRecipeProps> = ({ match }) => {

    const dispatch = useDispatch()

    const id = match.params.id

    useEffect(() => {

        if (id) {
            dispatch(SingleRecipeNotLoaded())
            Axios.get(`${process.env.REACT_APP_API_URL}/recipes/${id}/information?analyzedInstructions=false&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(result => result.data)
                .then(data => {
                    console.log(data)
                    const singleRecipe = {
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
                    dispatch(getSingleRecipe(singleRecipe))
                    dispatch(singleRecipeLoaded())
                })
                .catch(err => {
                    dispatch(SingleRecipeNotLoaded())
                    console.log(err)
                })
        }

    }, [id, dispatch])

    const recipe_loaded = useSelector((state: RootStore) => state.singleRecipe.recipe_loaded)
    const single_recipe = useSelector((state: RootStore) => state.singleRecipe.single_recipe)

    return (
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
                        <Link to="/"><button><GrPin /></button></Link>
                        <Link to="/"><button><AiOutlineHeart /></button></Link>
                        <Link to="/"><button><ImCheckmark2 /></button></Link>
                    </div>
                    <div className="single-recipe__content">
                        <h3>Time: {single_recipe.readyInMinutes} minutes</h3>
                        <h3>Servings: {single_recipe.servings}</h3>
                        <h3>Vegan: {single_recipe.vegan ? 'Yes' : 'No'}</h3>
                        <h3>Vegetarian: {single_recipe.vegetarian ? 'Yes' : 'No'}</h3>
                        <IngredientsList />
                    </div>
                </>
                :
                <Loading />}

        </div>
    )
}

export default withRouter(SingleRecipe)