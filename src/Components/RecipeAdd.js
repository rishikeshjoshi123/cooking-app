import { React, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { RecipeContext } from './App';

import RecipeAddIngredient from './RecipeAddIngredient';
import '../CSS/recipe-add.css'

export default function RecipeAdd() {
    const {
        handleClosePanel,
        handleRecipeSave
    } = useContext(RecipeContext);
    const [curRecipie, setCurRecipie] = useState(
        {
            id: uuidv4(),
            name: '',
            cookingTime: '',
            servings: '',
            Instructions: "",
            ingredients:
                [{ id: uuidv4(), name: '', amount: '' }]
        }
    );
    return (
        <>
            <div className='recipe-add'>
                <div className="recipe-add__save-recipe-btn-container">
                    <button onClick={handleSaveClickEvent} className="btn btn--primary save-recipe-btn ">Save Recipie</button>
                </div>
                <div className='recipe-add__close-button-container'>
                    <button onClick={handleClosePanel} className='btn recipe-add__close-button'>&times;</button>
                </div>
                <div className='recipe-add__details'>
                    <div className='details__section'>
                        <label className='section__row section__row--label' htmlFor="name">Name</label>
                        <label className='section__row section__row--label' htmlFor="cookingTime">Cooking time</label>
                        <label className='section__row section__row--label' htmlFor="servings">Servings</label>
                        <label className='section__row section__row--label' htmlFor="instructions">Instructions</label>
                    </div>
                    <div className='details__section'>
                        <div className='section__row'>
                            <input className='section__row--input' type="text" name='name'
                                value={curRecipie.name}
                                onChange={e => handleUpdate({ name: e.target.value })} />
                        </div>
                        <div className='section__row'>
                            <input className='section__row--input' type="text" name='cookingTime'
                                value={curRecipie.cookingTime}
                                onChange={e => handleUpdate({ cookingTime: e.target.value })} />
                        </div>
                        <div className='section__row'>
                            <input className='section__row--input' type="number" min="1"
                                value={curRecipie.servings}
                                onChange={e => handleUpdate({ servings: parseInt(e.target.value) }) || ''} />
                        </div>

                        <div className='section__row'>
                            <textarea className='section__row--input' name="instructions" id="instructions_id" cols="30" rows="5"
                                value={curRecipie.Instructions}
                                onChange={e => handleUpdate({ Instructions: e.target.value })} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='add-ingredients-container'>
                        <div className='add-ingredients-heading'>Ingredients</div>
                        <div className="add-ingredient-row-list">
                            {
                                curRecipie.ingredients.map(ingredient => {
                                    return <RecipeAddIngredient key={ingredient.id} ing={[ingredient, handleIngredientUpdate, handleIngredientBoxDelete]} />
                                })
                            }

                        </div>
                    </div>

                    <div className="add-ingredient-btn-container">
                        <button onClick={handleAddIngredientBox} className='btn btn--dark add-ingredient-btn'>Add Ingredient</button>
                    </div>
                </div>

            </div>

        </>


    )

    // ----FUNCTIONS---
    function handleUpdate(update) {
        setCurRecipie({ ...curRecipie, ...update });
    }
    function handleAddIngredientBox() {
        handleUpdate({
            ingredients: [...curRecipie.ingredients, { id: uuidv4(), name: '', amount: '' }]
        });
    }
    function handleIngredientBoxDelete(ingId) {
        let newIngredients = curRecipie.ingredients.filter(I => I.id !== ingId);
        handleUpdate({
            ingredients: newIngredients
        });
    }
    function handleIngredientUpdate(ingId, update) {
        let newIngredients = [...curRecipie.ingredients];
        const index = newIngredients.findIndex(I => I.id === ingId);
        newIngredients[index] = { ...newIngredients[index], ...update };
        handleUpdate({
            ingredients: newIngredients
        });
    }
    function handleSaveClickEvent() {
        handleRecipeSave({ ...curRecipie });

        //reset values in form 
        setCurRecipie(
            {
                id: uuidv4(),
                name: '',
                cookingTime: '',
                servings: '',
                Instructions: "",
                ingredients:
                    [{ id: uuidv4(), name: '', amount: '' }]
            }
        );
    }
}
