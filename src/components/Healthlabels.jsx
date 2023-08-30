import { Flex, Wrap } from "@chakra-ui/react";

export const HealthLabels = ({ healthLabelsRecipes }) => {
  if (healthLabelsRecipes.recipe.healthLabels.length !== 0) {
    let healthList = healthLabelsRecipes.recipe.healthLabels.map(
      (healthlabel) => {
        return (
          <>
            <Flex
              p={"2px 10px"}
              borderRadius={"5%"}
              bg={"pink.400"}
              key={healthlabel}
            >
              {healthlabel}{" "}
            </Flex>
          </>
        );
      }
    );
    return <Wrap>{healthList}</Wrap>;
  }
};
