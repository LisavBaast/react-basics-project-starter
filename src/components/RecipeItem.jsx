import { Text, Image, Heading, Box, Center, Flex } from "@chakra-ui/react";

import { CautionLabels } from "./CautionLabels";
import { DietLabels } from "./dietLabels";

export const RecipeItem = ({ recipe, clickFn }) => {
  const VeganCheck = () => {
    if (
      recipe?.recipe.healthLabels.includes("Vegan") &&
      recipe?.recipe.healthLabels.includes("Vegetarian")
    ) {
      return (
        <Text fontWeight={"bold"} color={"orange.400"} align={"center"}>
          {" "}
          Vegan | Vegetarian
        </Text>
      );
    }
    if (recipe?.recipe.healthLabels.includes("Vegetarian")) {
      return (
        <Text fontWeight={"bold"} color={"orange.400"} align={"center"}>
          Vegetarian
        </Text>
      );
    } else if (recipe?.recipe.healthLabels.includes("Vegan")) {
      return (
        <Flex fontWeight={"bold"} color={"orange.400"} align={"center"}>
          Vegan
        </Flex>
      );
    }
  };

  return (
    <Box
      boxShadow={"lg"}
      onClick={() => clickFn(recipe)}
      maxWidth={"350px"}
      _hover={{ background: "pink.100", boxShadow: "dark-lg" }}
    >
      <>
        <Image src={recipe?.recipe.image} height={"15em"} width={"100%"} />

        <Text align={"center"} textTransform={"uppercase"} color={"pink.400"}>
          {" "}
          {recipe?.recipe.mealType}{" "}
        </Text>

        <Heading align={"center"} size={"md"}>
          {" "}
          {recipe?.recipe.label}
        </Heading>

        <VeganCheck />

        <Center>
          <Text fontWeight={"semibold"} p={"5px"}>
            Dish:
          </Text>
          <Text align={"center"}>{recipe?.recipe.dishType}</Text>
        </Center>

        <Text align={"center"} fontWeight={"semibold"} margin={"10px"}>
          Dietlabel:
        </Text>

        <Center>
          <DietLabels dietLabelsRecipes={recipe} />
        </Center>

        <Text align={"center"} fontWeight={"semibold"} margin={"10px"}>
          Cautions:
        </Text>
        <Center m={"10px"}>
          <CautionLabels cautionlabelrecipes={recipe} />
        </Center>
      </>
    </Box>
  );
};
