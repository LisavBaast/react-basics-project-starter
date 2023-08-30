import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <>
      <Heading color={"pink.400"} align={"center"} size={"lg"} m={"20px"}>
        RecipeListPage
      </Heading>

      <Center>
        <TextInput onChange={handleChange} />
      </Center>
      <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
    </>
  );
};
