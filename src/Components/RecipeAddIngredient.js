import { React } from 'react'

export default function RecipeAddIngredient({ ing }) {
    const [ingredient, handleIngredientUpdate, handleIngredientBoxDelete] = ing;
    return (
        <>
            <div className='ingredient__row'>
                <div className="row-input-container">
                    <div className="input-wrapper">

                        <input className='section__row--input' type="text" value={ingredient.name} onChange={(e) => handleIngredientUpdate(ingredient.id, {
                            name: e.target.value
                        })} />
                    </div>
                    <div className="input-wrapper">
                        <input className='section__row--input' type="text" value={ingredient.amount}
                            onChange={(e) => handleIngredientUpdate(ingredient.id, {
                                amount: e.target.value
                            })} />
                    </div>
                </div>

                <div className='row__close-btn-container'>
                    <button onClick={() => handleIngredientBoxDelete(ingredient.id)} className='btn btn--danger ingredient__row-close-btn'>&times;</button>
                </div>
            </div>
        </>
    )
}