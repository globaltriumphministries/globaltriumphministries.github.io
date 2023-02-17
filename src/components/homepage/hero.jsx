import { Center, Text, Image, Grid, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo-white.png";

const Hero = () => {
  return (
    <Grid h="100vh" placeItems="center" color="white" bg="primary.200">
      <Center gap="2" flexDirection="column">
        <Center w="10rem" mb="3">
          <Image src={logo} />
        </Center>
        <Heading>We are coming soon!</Heading>
        <Text>Stay tuned to Global Triumph ministries</Text>
      </Center>
    </Grid>
  );
};

export default Hero;
