import { Grid } from "@chakra-ui/react";
import CustomContainer from "./customContainer";

const Section = ({ col, row, children }) => {
  return (
    <Grid>
      <CustomContainer>
        <Grid
          py="20"
          templateRows={{ base: "1fr", md: `repeat(${row}, 1fr)` }}
          templateColumns={{ base: "1fr", md: `repeat(${col}, 1fr)` }}
        >
          {children}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Section;
