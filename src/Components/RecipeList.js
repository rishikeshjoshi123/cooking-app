import React from 'react'
import Recipe from './Recipe'


export default function RecipeList({ recipies }) {

    const recipeElements = recipies.map(r => {
        return (
            <>
                <Recipe key={r.id} {...r} />
            </>
        )
    });

    return (
        <>


            <div className='recipe-list'>
                <div className='recipe-list__add-recipe-btn-container'>
                    <button className='btn btn--primary'> Add New Recipe</button>
                </div>
                <div className="recipe-list__index">
                    {recipeElements}
                </div>
            </div>
        </>

    )
}
