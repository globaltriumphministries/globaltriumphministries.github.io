import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import CustomButton from "./common/customButton";
import CustomContainer from "./common/customContainer";

const NotFound = () => {
  return (
    <Grid bg="primary.200">
      <CustomContainer>
        <Flex
          color="white"
          textAlign="center"
          align="center"
          justify="center"
          direction="column"
          minH="50rem"
          gap="5"
        >
          <Heading fontSize="10rem">404</Heading>
          <Text mb="5" fontSize="xl" maxW="70ch" lineHeight="1.5">
            The page you're looking for cannot be found, or is under
            development.
          </Text>

          <CustomButton secondaryColor onClick={() => location.replace("/")}>
            Go home
          </CustomButton>
        </Flex>
      </CustomContainer>
    </Grid>
  );
};

export default NotFound;
