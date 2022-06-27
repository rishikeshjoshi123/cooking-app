import { React, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { RecipeContext } from './App';

import '../CSS/recipe-edit.css'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipieValues }) {
    const {
        id, name, cookingTime, servings, Instructions, ingredients
    } = recipieValues;
    const { handleRecipeChange,
        handleRecipeEditClose
    } = useContext(RecipeContext);

    return (
        <>
            <div className='recipe-edit'>
                <div className='recipe-edit__close-button-container'>
                    <button onClick={() => handleRecipeEditClose()} className='btn recipe-edit__close-button'>&times;</button>
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
                                onInput={e => handleChange({ servings: parseInt(e.target.value) || '' })} />
                        </div>

                        <div className='section__row'>
                            <textarea className='section__row--input' name="instructions" id="instructions_id" cols="30" rows="5"
                                value={Instructions}
                                onInput={e => handleChange({ Instructions: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='add-ingredients-container'>
                        <div className='add-ingredients-heading'>Ingredients</div>
                        <div className="add-ingredient-row-list">
                            {
                                ingredients.map(I => {
                                    return (<RecipeIngredientEdit key={I.id} ing={[I, handleIngredientChange, handleIngredientRemove]} />);
                                }
                                )
                            }
                        </div>
                    </div>

                    <div className="add-ingredient-btn-container">
                        <button onClick={() => handleIngredientAddition()} className='btn btn--dark add-ingredient-btn'>Add Ingredient</button>
                    </div>
                </div>

            </div>

        </>

    )

    // ---- FUNCTIONS ----
    function handleChange(changes) {
        handleRecipeChange(id, { ...recipieValues, ...changes });
    }
    function handleIngredientChange(ingId, ingChange) {
        let newIngredient = [...ingredients];
        let index = newIngredient.findIndex(i => i.id === ingId);
        newIngredient[index] = { ...newIngredient[index], ...ingChange };

        handleChange({ ingredients: newIngredient });
    }
    function handleIngredientRemove(ingid) {
        let newIngredient = ingredients.filter(I => I.id !== ingid);
        handleChange({ ingredients: newIngredient });
    }
    function handleIngredientAddition() {
        let newIngredient = [...ingredients];
        newIngredient.push(
            { id: uuidv4(), name: '', amount: '' }
        );
        handleChange({ ingredients: newIngredient });
    }
}
