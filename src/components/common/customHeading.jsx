import { Center, Heading, Text } from "@chakra-ui/react";

const CustomHeading = ({
  heading,
  text,
  left,
  headingSize,
  headingWidth,
  headingMB,
  headingColor,
  textWidth,
  secondText,
  gap,
}) => {
  return (
    <Center
      alignItems={left ? "start" : "center"}
      gridColumn="1/-1"
      gap={gap ? gap : "2"}
      textAlign={left ? "left" : "center"}
      flexDirection="column"
    >
      <Heading
        maxW={headingWidth}
        mb={headingMB}
        color={headingColor && headingColor}
        fontSize={headingSize}
      >
        {heading}
      </Heading>
      {text && (
        <Text lineHeight="1.7" color="#444854" maxW={textWidth}>
          {text}.
        </Text>
      )}
      {secondText && (
        <Text lineHeight="1.7" color="#444854" maxW={textWidth}>
          {secondText}.
        </Text>
      )}
    </Center>
  );
};

export default CustomHeading;
