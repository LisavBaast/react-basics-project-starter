import { RecipeItem } from "./RecipeItem";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      <SimpleGrid p={"30px"} spacing={10} minChildWidth={"300px"}>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe?.recipe.label}
            recipe={recipe}
            clickFn={clickFn}
          />
        ))}
      </SimpleGrid>
    </>
  );
};
