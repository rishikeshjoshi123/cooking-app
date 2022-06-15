import React from 'react'
import IngredientsList from './IngredientsList';

export default function Recipe(props) {

    const {
        name,
        cookingTime,
        servings,
        Instructions,
        ingredients
    } = props;

    return (
        <>
            <div className='recipe'>
                <div className="recipe__header">

                    <h3 className='recipe__title '>{name}</h3>

                    <div className='btn__container'>
                        <button className='btn btn--success mr-1'>Edit</button>
                        <button className='btn btn--danger'>Delete</button>
                    </div>
                </div>



                <div>
                    <div className='recipe__row'>

                        <span className='recipe__label'>CookTime: </span><span className='recipe__value'>{cookingTime}</span>
                    </div>
                    <div className='recipe__row'>

                        <span className='recipe__label'>Servings: </span><span className='recipe__value'>{servings}</span>
                    </div>
                    <div className='recipe__row'>
                        <span className='recipe__label'>Instructions: </span>
                        <div className='recipe__value recipe__value--indented recipe__value--instructions'>
                            {Instructions}
                        </div>
                    </div>
                    <div className='recipe__row'>
                        <span className='recipe__label'>Ingredients :</span>
                        <div className="recipe__value recipe__value--indented">
                            <IngredientsList ingList={ingredients} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
