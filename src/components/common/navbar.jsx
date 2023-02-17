import { useState } from "react";

import {
  Grid,
  Flex,
  Icon,
  Hide,
  Show,
  Text,
  Image,
  Link,
  Center,
  Box,
} from "@chakra-ui/react";
import { getMainNavLinks } from "../../services/data";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logo-white.png";

import CustomButton from "../common/customButton";
import CustomContainer from "../common/customContainer";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import useSticky from "../useSticky";
import CustomOutlineButton from "./customOutlineButton";
import Dropdown from "./navbarDropdown";

const Navbar = () => {
  const { sticky, stickyRef } = useSticky();
  const links = getMainNavLinks();
  // const { pathname } = useLocation();
  const [currentPath] = useState("");
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Grid
      position={sticky ? "fixed" : "absolute"}
      w="100%"
      zIndex="100"
      transition=".2s"
      bg={sticky ? "white" : "transparent"}
      borderBottom="solid 1px"
      borderColor={sticky ? "gray.100" : "transparent"}
      ref={stickyRef}
    >
      <CustomContainer>
        <Grid
          py="6"
          templateColumns={{
            base: "1fr",
            md: "max-content 1fr",
          }}
        >
          <Flex
            align="center"
            justify={{ base: "space-between", md: "center" }}
          >
            <Link mr="20" w={{ base: "6rem", md: "7rem" }} href="/">
              <Image src={sticky ? logo : logoWhite} />
            </Link>

            <Show below="md">
              <Flex align="center" justifyContent="end">
                <Icon
                  cursor="pointer"
                  fontSize="3xl"
                  as={FaBars}
                  color={!sticky && "white"}
                  onClick={() => setShow(!show)}
                />
              </Flex>
            </Show>

            <Hide below="md">
              <Flex h="100%" align="center" justify="center" gap="10" as="ul">
                {links.map((item, index) => (
                  <Link
                    key={item.id}
                    fontWeight="normal"
                    color={
                      currentPath === item.path
                        ? "primary.100"
                        : sticky
                        ? "black"
                        : "white"
                    }
                    _hover={{
                      color:
                        currentPath === item.path
                          ? "primary.100"
                          : sticky
                          ? "black"
                          : "white",
                    }}
                    href={item.path}
                  >
                    <Center
                      _hover={{ div: { display: "grid" } }}
                      gap="1"
                      position="relative"
                    >
                      <Text>{item.label}</Text>
                      {item.dropdown && <FaCaretDown />}
                      <Box
                        h="8rem"
                        w="5rem"
                        position="absolute"
                        top="0"
                        left="0"
                        onMouseOver={() => setShowDropDown(item.id)}
                        onMouseOut={() => setShowDropDown("")}
                      ></Box>

                      {item.dropdown && (
                        <Dropdown
                          show={showDropDown - 1 === index}
                          noImage={item.noImage}
                          list={item.list}
                        />
                      )}
                    </Center>
                  </Link>
                ))}
              </Flex>
            </Hide>
          </Flex>

          {show && (
            <Flex
              // position="fixed"
              direction="column"
              bg="white"
              top="0"
              mt="5"
              left="0"
              width="100%"
              height="100vh"
              zIndex="100"
              align="start"
              justify="start"
              px="10"
              gap="10"
              as="ul"
              py="20"
            >
              {links.map((item, index) => (
                <Link
                  key={item.id}
                  fontWeight="normal"
                  color={
                    currentPath === item.path
                      ? "primary.100"
                      : sticky
                      ? "black"
                      : "black"
                  }
                  _hover={{
                    color:
                      currentPath === item.path
                        ? "primary.100"
                        : sticky
                        ? "black"
                        : "white",
                  }}
                  href={item.path}
                >
                  <Center
                    _hover={{ div: { display: "grid" } }}
                    gap="1"
                    position="relative"
                  >
                    <Text>{item.label}</Text>
                    {item.dropdown && <FaCaretDown />}
                    <Box
                      h="8rem"
                      w="5rem"
                      position="absolute"
                      top="0"
                      left="0"
                      onMouseOver={() => setShowDropDown(item.id)}
                      onMouseOut={() => setShowDropDown("")}
                    ></Box>

                    {item.dropdown && (
                      <Dropdown
                        smallScreens
                        show={showDropDown - 1 === index}
                        noImage={item.noImage}
                        list={item.list}
                      />
                    )}
                  </Center>
                </Link>
              ))}

              <Grid mt="5" placeItems="start" w="50%" gap="5">
                <Link href="/sign-in">Sign in</Link>
                <CustomButton
                  onClick={() => location.replace("/check-if-we-deliver")}
                  secondaryColor
                  size="lg"
                >
                  Get started
                </CustomButton>
              </Grid>
            </Flex>
          )}

          <Hide below="md">
            <Flex align="center" justify="end" gap="10">
              <Link color={sticky ? "black" : "white"} href="/sign-in">
                Sign in
              </Link>
              {sticky && (
                <CustomButton
                  size="sm"
                  secondaryColor
                  onClick={() => location.replace("/sign-up")}
                >
                  Get started
                </CustomButton>
              )}

              {!sticky && (
                <CustomOutlineButton
                  whiteColor
                  size="sm"
                  onClick={() => location.replace("/sign-up")}
                >
                  Get started
                </CustomOutlineButton>
              )}
            </Flex>
          </Hide>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Navbar;
