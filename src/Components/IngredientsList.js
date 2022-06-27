import React from 'react'
import Ingredient from './Ingredient';


export default function IngredientsList({ ingList }) {

    const ingredientElements = ingList.map(I => {
        return (<Ingredient {...I} />)
    })

    return (
        <>
            {ingredientElements}
        </>
        // NOTE: If we dont wrap with <>,</> here then we'll get error that 'react cant allow object as childs of component'
    )
}
