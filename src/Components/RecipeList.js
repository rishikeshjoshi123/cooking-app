import { React, useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'


export default function RecipeList({ recipies }) {

    const { handleRecipeAdd } = useContext(RecipeContext);

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
                    <button className='btn btn--primary' onClick={handleRecipeAdd}> Add New Recipe</button>
                </div>
                <div className="recipe-list__index">
                    {recipeElements}
                </div>
            </div>
        </>

    )
}
