import { React, useState, createContext, useEffect } from 'react'
import '../CSS/app.css';
//Components import
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import RecipeAdd from './RecipeAdd';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipies';
export const RecipeContext = createContext();

export default function App() {

  const [recipies, setRecipes] = useState(foodItems); 
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [addNewRecipie, setAddNewRecipie] = useState();

  useEffect(() => {
    const pkg = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (pkg)
      setRecipes(JSON.parse(pkg));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipies));
  }, [recipies]);

  const recipeContextValue = {
    //for modifying existing data
    handleRecipeDelete, handleRecipeSelect, handleRecipeChange, handleRecipeEditClose,
    //for adding new data
    handleClosePanel, handleRecipeSave
  };

  const editThisRecipe = recipies.find(R => R.id === selectedRecipe);

  return (
    <>
      <div className="page-container">
        <RecipeContext.Provider value={recipeContextValue}>
          <RecipeList props={[recipies, handleRecipeAdd]} />

          {editThisRecipe && <RecipeEdit recipieValues={editThisRecipe} />}
          {addNewRecipie && <RecipeAdd />}
        </ RecipeContext.Provider>
      </div>
    </>
  )

// ----FUNCTIONS FOR ADDING NEW DATA---- 
//on pressing 'Add new recipie' button
  function handleRecipeAdd() {
    setAddNewRecipie(true);
    setSelectedRecipe(null);
  }
  function handleClosePanel() {
    setAddNewRecipie(null);
  }
  function handleRecipeSave(newRecipe) {
    setRecipes([...recipies, newRecipe]);
  }

// ---FUNCTIONS FOR MODIFYING EXISTING DATA---
  function handleRecipeDelete(id) {
    setRecipes(recipies.filter(r => r.id !== id));
  }
  // to edit recipie
  function handleRecipeSelect(id) {
    setSelectedRecipe(id);
    setAddNewRecipie(null);
  }
  //to close edit recipe section( by clicking on Cross sign)
  function handleRecipeEditClose() {
    setSelectedRecipe(null);
  }
  //value of recipie is changed by input
  function handleRecipeChange(id, changed) {
    let newRecipies = [...recipies];
    let index = newRecipies.findIndex(r => r.id === id);
    newRecipies[index] = changed;

    setRecipes(newRecipies);
  }

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
  Instructions: `1: Add milk and rice in a pan and start gas.\n2: Mix milk and rice and heat.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh Rice', amount: '1Kg' },
  { id: 2, name: 'Milk', amount: '200g' },
    { id: 3, name: 'Sugar', amount: '100g' }]
}, {
  id: 6,
  name: 'Big Lassi',
  cookingTime: '3.5',
  servings: 6,
  Instructions: `1: Mix dahi in mixer.\n2: Add cream.\n3: Serve and eat.`,
  ingredients: [{ id: 1, name: 'Fresh dahi', amount: '1Kg' },
    { id: 2, name: 'Cream', amount: '200g' },
  { id: 3, name: 'Sugar', amount: '100g' }]
}]



