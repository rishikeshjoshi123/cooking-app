import { React } from 'react'

export default function RecipeIngredientEdit({ ing }) {
    const [ingredient, handleIngredientChange] = ing;
    return (
        <>
            <div className='ingredient__row'>
                <div className="row-input-container">
                    <div className="input-wrapper">

                        <input className='section__row--input' type="text" value={ingredient.name}
                            onInput={e => handleIngredientChange(ingredient.id, { ...ingredient, name: e.target.value })}
                        />
                    </div>
                    <div className="input-wrapper">
                        <input className='section__row--input' type="text" value={ingredient.amount}
                            onInput={e => handleIngredientChange(ingredient.id, { ...ingredient, amount: e.target.value })} />
                    </div>
                </div>


                <div className='row__close-btn-container'>
                    <button className='btn btn--danger ingredient__row-close-btn'>&times;</button>
                </div>
            </div>
        </>
    )
}
