import { Box, Wrap, Text } from "@chakra-ui/react";

export const CautionLabels = ({ cautionlabelrecipes }) => {
  if (cautionlabelrecipes.recipe.cautions.length !== 0) {
    let CautionList = cautionlabelrecipes.recipe.cautions.map(
      (cautionlabel) => {
        return (
          <>
            <Box
              p={"2px 10px"}
              borderRadius={"5%"}
              bg={"red.100"}
              key={cautionlabel}
            >
              {cautionlabel}{" "}
            </Box>
          </>
        );
      }
    );
    return <Wrap>{CautionList}</Wrap>;
  } else {
    return <Text>None</Text>;
  }
};
