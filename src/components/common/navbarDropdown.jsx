import { Grid, Link, Flex, Text, Image, Heading } from "@chakra-ui/react";

const Dropdown = ({ list, show, noImage, smallScreens }) => {
  return (
    <Grid
      mt="5"
      display={show ? "grid" : "none"}
      position={smallScreens ? "relative" : "absolute"}
      top="10"
      left="0"
      minW={noImage ? "11rem" : "55rem"}
      templateColumns={{ base: "1fr", md: noImage ? "1fr" : "1fr 1fr" }}
      bg="white"
      borderRadius="md"
      p={!noImage && "8"}
      overflow="hidden"
      gap={!noImage && "5"}
    >
      {list.map((item) => (
        <Grid
          key={item.id}
          alignItems="center"
          templateColumns={noImage ? "1fr" : "2rem 1fr"}
          align="center"
          textAlign="left"
          gap={!noImage && "5"}
          borderRadius={!noImage && "md"}
          px={!noImage && "5"}
          py={!noImage && "2"}
          cursor="pointer"
          _hover={{ bg: item.color }}
          overflow="hidden"
        >
          {noImage && (
            <Link
              _hover={{ bg: "blue.100" }}
              py="4"
              px="8"
              color="black"
              href={item.path}
            >
              {item.label}
            </Link>
          )}

          {!noImage && <Image src={item.icon} />}
          {!noImage && (
            <Flex gap="1" align="start" direction="column" color="black">
              <Heading color="gray.600" size="sm">
                {item.title}
              </Heading>
              <Text color="#9da8b6">{item.text}</Text>
            </Flex>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Dropdown;
