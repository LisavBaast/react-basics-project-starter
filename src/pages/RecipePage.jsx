import {
  Center,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Wrap,
  Text,
  Button,
} from "@chakra-ui/react";
import { Ingredients } from "../components/Ingredients";
import { HealthLabels } from "../components/Healthlabels";
import { AiFillHome } from "react-icons/ai";
import { DietLabels } from "../components/dietLabels";
import { Nutrients } from "../components/Nutrients";
import { CautionLabels } from "../components/CautionLabels";

export const RecipePage = ({ recipe, clickFn }) => {
  const HeadingStyle = {
    m: "-10px 20px",
    fontSize: { base: "24px", md: "40px", lg: "50px" },
  };
  const TitleStyle = {
    m: "5px 0",
    fontSize: { base: "14px", md: "15px", lg: "25px" },
  };
  const TextStyle = {
    fontWeight: "bold",
    fontSize: { base: "10px", md: "11px", lg: "16px" },
  };

  return (
    <Center>
      <Box w={"70%"} bg={"gray.200"}>
        <Image width={"100%"} h={"auto"} src={recipe?.recipe.image} />
        {/* Menu */}
        <Box bg={"gray.300"}>
          <Button
            leftIcon={<AiFillHome />}
            borderRadius={"0"}
            colorScheme="pink"
            variant={"ghost"}
            onClick={() => clickFn()}
          >
            Home
          </Button>
          {/* Recipe Overview */}
        </Box>

        <Text textTransform={"uppercase"} color={"pink.400"} m={"20px"}>
          {recipe?.recipe.mealType}
        </Text>

        <Heading sx={HeadingStyle}>{recipe?.recipe.label}</Heading>
        <SimpleGrid m={"20px"} columns={2}>
          <Box>
            <Heading sx={TitleStyle}>General Information</Heading>
            <Wrap m={"10px 0px"}>
              <Text sx={TextStyle}>Dishtype: </Text>
              <Text>{recipe?.recipe.dishType}</Text>
            </Wrap>
            <Wrap m={"10px 0px"}>
              <Text fontWeight={"bold"}>Total coocking time: </Text>
              <Text>{recipe?.recipe.totalTime}</Text>
            </Wrap>
            <Wrap m={"10px 0px"}>
              <Text fontWeight={"bold"}>Servings: </Text>
              <Text>{recipe?.recipe.yield}</Text>
            </Wrap>

            <Heading sx={TitleStyle}>Ingredients</Heading>
            <Ingredients recipedata={recipe} />
          </Box>
          <Box>
            <Heading sx={TitleStyle}>Diet Labels</Heading>
            <DietLabels dietLabelsRecipes={recipe} />
            <Heading sx={TitleStyle}>Health labels</Heading>
            <HealthLabels healthLabelsRecipes={recipe} />
            <Heading sx={TitleStyle}>Cautions</Heading>
            <CautionLabels cautionlabelrecipes={recipe} />
            <Nutrients nutrientsRecipes={recipe} />
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
