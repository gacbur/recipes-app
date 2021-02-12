export const SINGLE_RECIPE_LOADED = "SINGLE_RECIPE_LOADED"
export const SINGLE_RECIPE_NOT_LOADED = "SINGLE_RECIPE_NOT_LOADED"
export const GET_SINGLE_RECIPE = "GET_SINGLE_RECIPE"

export type equipmentItem = {
    image: string,
    name: string
}

export type ingredientItem = {
    image: string,
    name: string
}

export type ingredientItemInfo = {
    image: string,
    name: string
    measureUS_amount: number,
    measureUS_unit: string,
    measureMetric_amount: number
    measureMetric_unit: string
}

export type instructionsStep = {
    number: string,
    step: string,
    equipment: equipmentItem[]
    ingredients: ingredientItem[]
}

export type singleRecipe = {
    id: number,
    title: string,
    image: string,
    imageType: string,
    author: string,
    readyInMinutes: number,
    servings: number,
    vegan: boolean,
    vegetarian: boolean,
    instructions: instructionsStep[]
    ingredientsInfo: ingredientItemInfo[]
}

export type recipeLoaded = {
    recipe_loaded: boolean
}

export interface SingleRecipeLoaded {
    type: typeof SINGLE_RECIPE_LOADED
}

export interface SingleRecipeNotLoaded {
    type: typeof SINGLE_RECIPE_NOT_LOADED
}

export interface GetSingleRecipe {
    type: typeof GET_SINGLE_RECIPE,
    payload: {
        single_recipe: singleRecipe
    }
}

export type SingleRecipeDispatchTypes = SingleRecipeLoaded | SingleRecipeNotLoaded | GetSingleRecipe