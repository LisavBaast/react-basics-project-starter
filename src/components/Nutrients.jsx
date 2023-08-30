import { Text, WrapItem, Wrap, Box, Heading } from "@chakra-ui/react";

export const Nutrients = ({ nutrientsRecipes }) => {
  const nutrients = nutrientsRecipes.recipe.totalNutrients;

  const caloriesQuantity = Math.round(nutrients.ENERC_KCAL.quantity);
  const caloriesUnit = nutrients.ENERC_KCAL.unit;

  const fatQuantity = Math.round(nutrients.FAT.quantity);
  const fatUnit = nutrients.FAT.unit;

  const carbsQuantity = Math.round(nutrients.CHOCDF.quantity);
  const carbsUnit = nutrients.CHOCDF.unit;

  const proteinQuantity = Math.round(nutrients.PROCNT.quantity);
  const proteinUnit = nutrients.PROCNT.unit;

  const cholestorolQuantity = Math.round(nutrients.CHOLE.quantity);
  const cholestorolUnit = nutrients.CHOLE.unit;

  const sodiumQuantity = Math.round(nutrients.NA.quantity);
  const sodiumUnit = nutrients.NA.unit;

  return (
    <>
      <Heading m={"5px 0"} size={"md"}>
        Nutritional value
      </Heading>
      <Wrap>
        <WrapItem m={"0px 10px 0 0"}>
          <Box>
            <Text align={"center"}> Calories</Text>
            <Text align={"center"}>
              {caloriesQuantity} {caloriesUnit}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem m={"0px 10px"}>
          <Box>
            <Text align={"center"}> Fat</Text>
            <Text align={"center"}>
              {fatQuantity} {fatUnit}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem m={"0px 10px"}>
          <Box>
            <Text align={"center"}> Carbs</Text>
            <Text align={"center"}>
              {carbsQuantity} {carbsUnit}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem m={"0px 10px"}>
          <Box>
            <Text align={"center"}> Protein</Text>
            <Text align={"center"}>
              {proteinQuantity} {proteinUnit}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem m={"0px 10px"}>
          <Box>
            <Text align={"center"}> Cholestorol</Text>
            <Text align={"center"}>
              {cholestorolQuantity} {cholestorolUnit}
            </Text>
          </Box>
        </WrapItem>

        <WrapItem m={"0px 10px"}>
          <Box>
            <Text align={"center"}> Sodium</Text>
            <Text align={"center"}>
              {sodiumQuantity} {sodiumUnit}
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
};
