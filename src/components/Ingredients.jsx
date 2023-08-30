import { Box } from "@chakra-ui/react";

export const Ingredients = ({ recipedata }) => {
  let ingredientList = recipedata.recipe.ingredientLines.map((ingredient) => {
    return (
      <>
        <Box margin={"5px 0px"} key={ingredient}>
          {ingredient}{" "}
        </Box>
      </>
    );
  });
  return <Box>{ingredientList}</Box>;
};
