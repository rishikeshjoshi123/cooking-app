import { React } from 'react'

export default function RecipeIngredientEdit({ name, amount }) {

    return (
        <>
            <div className='ingredient__row'>
                <div className="row-input-container">
                    <div className="input-wrapper">

                        <input className='section__row--input' type="text" value={name}
                        />
                    </div>
                    <div className="input-wrapper">

                        <input className='section__row--input' type="text" value={amount} />
                    </div>
                </div>

                <div className='row__close-btn-container'>
                    <button className='btn btn--danger ingredient__row-close-btn'>&times;</button>
                </div>
            </div>
        </>
    )
}
