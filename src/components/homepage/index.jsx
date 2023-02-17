import { Grid } from "@chakra-ui/react";
import useDocumentTitle from "@rehooks/document-title";

import Hero from "./hero";

const Homepage = () => {
  useDocumentTitle(
    "Global Triumph Ministries - Projecting triumph to the world"
  );
  return (
    <>
      <Hero />
    </>
  );
};

export default Homepage;
