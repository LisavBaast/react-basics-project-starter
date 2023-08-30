import { Flex, Wrap, Text } from "@chakra-ui/react";

export const DietLabels = ({ dietLabelsRecipes }) => {
  if (dietLabelsRecipes.recipe.dietLabels.length !== 0) {
    let dietList = dietLabelsRecipes.recipe.dietLabels.map((dietlabel) => {
      return (
        <Flex
          p={"2px 10px"}
          borderRadius={"5%"}
          bg={"green.100"}
          key={dietlabel}
        >
          {dietlabel}{" "}
        </Flex>
      );
    });
    return <Wrap>{dietList}</Wrap>;
  } else {
    return <Text>None</Text>;
  }
};
