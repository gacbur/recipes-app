import { FC } from 'react'

import { Link } from 'react-router-dom'

import './RecipeItem.css'

type RecipeItemProps = {
    id: number,
    image: string,
    title: string
}

const RecipeItem: FC<RecipeItemProps> = ({ id, image, title }) => {
    return (
        <>
            <div className="recipe-item">
                <img className="recipe_item__img" src={`${image}`} alt={`${title}`} />
                <div className="recepie-item__overlay">
                    <h6 >
                        {title}
                    </h6>
                    <Link to={`/recipe/${id}`}>
                        <button>
                            View recepie
                         </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default RecipeItem
