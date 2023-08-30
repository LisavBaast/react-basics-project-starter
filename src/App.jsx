import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";

import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <>
      {userRecipe ? (
        <RecipePage recipe={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <RecipeListPage clickFn={setUserRecipe} />
      )}
    </>
  );
};
