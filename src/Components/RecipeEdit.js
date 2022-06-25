import { React, useContext } from 'react'
import '../CSS/recipe-edit.css'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App';



export default function RecipeEdit({ recipieValues }) {
    const {
        id,
        name,
        cookingTime,
        servings,
        Instructions,
        ingredients } = recipieValues;
    const { handleRecipeChange } = useContext(RecipeContext);

    function handleChange(changes) {
        handleRecipeChange(id, { ...recipieValues, ...changes });
    }
    return (
        <>
            <div className='recipe-edit'>
                <div className='recipe-edit__close-button-container'>
                    <button className='btn recipe-edit__close-button'>&times;</button>
                </div>
                <div className='recipe-edit__details'>
                    <div className='details__section'>
                        <label className='section__row section__row--label' htmlFor="name">Name</label>
                        <label className='section__row section__row--label' htmlFor="cookingTime">Cooking time</label>
                        <label className='section__row section__row--label' htmlFor="servings">Servings</label>
                        <label className='section__row section__row--label' htmlFor="instructions">Instructions</label>
                    </div>
                    <div className='details__section'>
                        <div className='section__row'>
                            <input className='section__row--input' type="text" name='name' value={name}
                                onInput={e => handleChange({ name: e.target.value })} />
                        </div>
                        <div className='section__row'>
                            <input className='section__row--input' type="text" name='cookingTime' value={cookingTime}
                                onInput={e => handleChange({ cookingTime: e.target.value })} />
                        </div>
                        <div className='section__row'>
                            <input className='section__row--input' type="number" min="1" name='servings' value={servings}
                                onInput={e => handleChange({ servings: e.target.value })} />
                        </div>

                        <div className='section__row'>
                            <textarea className='section__row--input' name="instructions" id="instructions_id" cols="30" rows="5"
                                value={Instructions}
                                onInput={e => handleChange({ Instructions: e.target.value })}></textarea>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='add-ingredients-container'>
                        <div className='add-ingredients-heading'>Ingredients</div>
                        <div className="add-ingredient-row-list">
                            {
                                ingredients.map(I =>
                                    <RecipeIngredientEdit key={I.id} {...I} />
                                )
                            }
                        </div>
                    </div>


                    <div className="add-ingredient-btn-container">
                        <button className='btn btn--primary'>Add Ingredient</button>
                    </div>
                </div>

            </div>

        </>

    )
}
