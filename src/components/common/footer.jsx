import { Flex, Grid, Link, Heading, Text, Image } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import {
  getCompanyContact,
  getCompanyInfoLinks,
  getServicesLinks,
  getLearnLinks,
  getLegalLinks,
  getCommunitiesLinks,
} from "../../services/data";
import logo from "../../assets/logo.png";

const Footer = () => {
  const services = getServicesLinks();
  const company = getCompanyInfoLinks();
  const learn = getLearnLinks();
  const legal = getLegalLinks();
  const contact = getCompanyContact();
  const communities = getCommunitiesLinks();

  return (
    <Grid bg="white" style={{ color: "#9da8b6" }}>
      <CustomContainer>
        {/* First */}
        <Grid
          borderBottom="solid 1px"
          borderColor="gray.200"
          py="20"
          px={{ base: "10", md: 0 }}
          alignItems="start"
          gap="20"
          justifyContent="center"
          templateColumns={{
            base: "1fr 1fr",
            md: "repeat(4, 1fr)",
          }}
        >
          <Flex gap="8" direction="column">
            <Heading color="gray.600" size="md">
              Products
            </Heading>
            <Flex gap="5" direction="column">
              {services.map((s) => (
                <Link key={s.id} href={s.path}>
                  {s.label}
                </Link>
              ))}
            </Flex>
          </Flex>
          <Flex gap="8" direction="column">
            <Heading color="gray.600" size="md">
              Company
            </Heading>
            <Flex gap="5" direction="column">
              {company.map((s) => (
                <Link key={s.id} href={s.path}>
                  {s.label}
                </Link>
              ))}
            </Flex>
          </Flex>
          <Flex gap="8" direction="column">
            <Heading color="gray.600" size="md">
              Learn
            </Heading>
            <Flex gap="5" direction="column">
              {learn.map((s) => (
                <Link key={s.id} href={s.path}>
                  {s.label}
                </Link>
              ))}
            </Flex>
          </Flex>
          <Grid
            // py="20"
            alignItems="start"
            gap="10"
            justifyContent="center"
          >
            <Flex gap="8" direction="column">
              <Heading color="gray.600" size="md">
                Legal
              </Heading>
              <Flex gap="5" direction="column">
                {legal.map((s) => (
                  <Link key={s.id} href={s.path}>
                    {s.label}
                  </Link>
                ))}
              </Flex>
            </Flex>

            <Flex gap="8" direction="column">
              <Heading color="gray.600" size="md">
                Community
              </Heading>
              <Flex gap="5" direction="column">
                {communities.map((s) => (
                  <Link key={s.id} href={s.path}>
                    {s.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Grid>
        </Grid>

        {/* Second */}
        <Grid
          py="20"
          alignItems="start"
          gap={{ base: 10, md: "20" }}
          px={{ base: "10", md: 0 }}
          justifyContent="center"
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr) 2fr",
          }}
        >
          <Flex gap="8" direction="column">
            <Image w="7rem" src={logo} />
            <Text maxW="30ch">
              © 2023 Patricia Technologies. All Rights Reserved
            </Text>
          </Flex>

          <Flex gap="8" direction="column">
            <Heading color="gray.600" size="md">
              Contact
            </Heading>
            <Flex color="secondary.100" gap="2" direction="column">
              <Link href={`mailto:${contact.email.path}`}>
                {contact.email.path}
              </Link>
              <Link href={`mailto:${contact.emailAlt.path}`}>
                {contact.emailAlt.path}
              </Link>
            </Flex>
          </Flex>

          <Grid
            // py="20"
            alignItems="start"
            gap={{ base: "10", md: "20" }}
            justifyContent="center"
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
          >
            <Flex gap="8" direction="column">
              <Heading color="gray.600" size="md">
                Ghana
              </Heading>
              <Text maxW="30ch">
                SCC Junction, near the Taxi Rank, Accra, Weija. P.O Box MP 4585,
                Mamprobi, Accra, GA/R Ghana
              </Text>
            </Flex>

            <Flex gap="8" direction="column">
              <Heading color="gray.600" size="md">
                United Kingdom
              </Heading>
              <Text maxW="30ch">
                2nd Floor College House, 17 King Edwards Road RUISLIP London HA4
                7AE
              </Text>
            </Flex>

            <Flex gap="8" direction="column">
              <Heading color="gray.600" size="md">
                United States
              </Heading>
              <Text maxW="30ch">8 The Green, Suite A, Dover, DE 1990</Text>
            </Flex>
          </Grid>
          <Text gridColumn="1/-1">
            MyPatricia.co is a property of Patricia Technologies Limited, a
            company duly registered with CAC with RC Number: 1484208. Account
            numbers and Verve Cards are provided by Rubies Microfinance Bank, a
            company duly registered under the Laws of the Federal Republic of
            Nigeria; and duly licensed by the Central Bank of Nigeria, and
            pursuant to the rules of Verve International Limited.
          </Text>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Footer;
