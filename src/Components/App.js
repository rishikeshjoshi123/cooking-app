import React from 'react'

import '../CSS/app.css'

import RecipeList from './RecipeList';

function App() {
  return (
    <>
      <RecipeList recipies={foodItems} />
    </>
  )
}


const foodItems = [{
  id: 1,
  name: 'Shahi Panner',
  cookingTime: '1.5',
  servings: 3,
  Instructions: "1: Add water and salt.\n2: Add spices and stir in pan.\n3: Serve and eat.",
  ingredients: [{ id: 1, name: 'Fresh Panner', amount: '1Kg' },
  { id: 2, name: 'Cream', amount: '200g' },
  { id: 3, name: 'Panner Masala', amount: '3tbs' }]
}, {
  id: 2,
  name: 'Chole Chawal',
  cookingTime: '4.5',
  servings: 5,
  Instructions: `1: Chole chawal guide.\n2: Add spices and stir in pan.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh Chole', amount: '1Kg' },
  { id: 2, name: 'Tomatoes', amount: '200g' },
  { id: 3, name: 'Chole Masala', amount: '3tbs' }]
}, {
  id: 3,
  name: 'Kheer',
  cookingTime: '3.5',
  servings: 6,
  Instructions: `1: Kheer is very beautiful.\n2: Mix milk and rice and heat.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh Rice', amount: '1Kg' },
  { id: 2, name: 'Milk', amount: '200g' },
  { id: 3, name: 'Sugar', amount: '100g' }]
},
{
  id: 4,
  name: 'Daal Makhni',
  cookingTime: '1.5',
  servings: 3,
  Instructions: "1: Add water and salt.\n2: Add spices and stir in pan.\n3: Serve and eat.",
  ingredients: [{ id: 1, name: 'Fresh Panner', amount: '1Kg' },
  { id: 2, name: 'Cream', amount: '200g' },
  { id: 3, name: 'Panner Masala', amount: '3tbs' }]
}, {
  id: 5,
  name: 'Veg Special Biryani',
  cookingTime: '4.5',
  servings: 5,
  Instructions: `1: Chole chawal guide.\n2: Add spices and stir in pan.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh Chole', amount: '1Kg' },
  { id: 2, name: 'Tomatoes', amount: '200g' },
  { id: 3, name: 'Chole Masala', amount: '3tbs' }]
}, {
  id: 6,
  name: 'Big Lassi',
  cookingTime: '3.5',
  servings: 6,
  Instructions: `1: Kheer is very beautiful.\n2: Mix milk and rice and heat.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh Rice', amount: '1Kg' },
  { id: 2, name: 'Milk', amount: '200g' },
  { id: 3, name: 'Sugar', amount: '100g' }]
}]

export default App;
