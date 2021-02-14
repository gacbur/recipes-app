import React from 'react'

import { Link } from 'react-router-dom'

import './SimiliarRecipeItem.css'

type SimiliarRecipesItemProps = {
    id: string,
    title: string,
}

const SimiliarRecipeItem: React.FC<SimiliarRecipesItemProps> = ({ id, title }) => {
    return (
        <>

            <div className="similiar-recipes__content__item">
                <Link to={`/recipe/${id}`}>
                    <h2>{title}</h2>
                </Link>
            </div>
        </>
    )
}

export default SimiliarRecipeItem
