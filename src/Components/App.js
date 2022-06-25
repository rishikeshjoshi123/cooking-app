import { React, useState, createContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import '../CSS/app.css'
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipies';

export const RecipeContext = createContext(); //creating context

export default function App() {
  const [recipies, setRecipes] = useState(foodItems); //creating state
  const [selectedRecipe, editSelectedRecipe] = useState();

  // only runs on app startup
  useEffect(() => {
    const pkg = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (pkg)
      setRecipes(JSON.parse(pkg));
  }, [])

  // runs whenever recipies is modified
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipies));
  }, [recipies])



  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New food',
      cookingTime: '1.0',
      servings: 1,
      Instructions: "Put Instructions here.\n And Press enter button.",
      ingredients: [{ id: uuidv4(), name: 'ing name', amount: '1' },
      { id: uuidv4(), name: 'ing name', amount: '1' }, { id: uuidv4(), name: 'ing name', amount: '1' }]
    }
    setRecipes([...recipies, newRecipe]);
  }
  function handleRecipeDelete(id) {
    setRecipes(recipies.filter(r => r.id !== id));
  }
  function handleRecipeSelect(id) {
    editSelectedRecipe(id);
  }
  function handleRecipeChange(id, changed) {
    let newRecipies = [...recipies];
    let index = newRecipies.findIndex(r => r.id === id);
    newRecipies[index] = changed;

    setRecipes(newRecipies);
  }

  const recipeContextValue = {
    handleRecipeAdd, handleRecipeDelete, handleRecipeSelect, handleRecipeChange
  };

  const editThisRecipe = recipies.find(R => R.id === selectedRecipe);

  return (
    <>
      <div className="page-container">
        <RecipeContext.Provider value={recipeContextValue}>
          <RecipeList recipies={recipies} />

          {editThisRecipe && <RecipeEdit recipieValues={editThisRecipe} />}
        </ RecipeContext.Provider>


      </div>

    </>
  )
}



//Default dummy data
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

