import { Button } from "@chakra-ui/react";

const CustomOutlineButton = ({
  children,
  leftIcon,
  rightIcon,
  size,
  colorScheme,
  primaryColor,
  dangerColor,
  secondaryColor,
  whiteColor,
  blackColor,
  transparentColor,
  type,
  onClick,
}) => {
  const getColor = () => {
    if (primaryColor) return "primary.100";
    if (secondaryColor) return "secondary.100";
    if (dangerColor) return "red.500";
    if (whiteColor) return "white";
    if (blackColor) return "black";
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      size={size}
      variant="outline"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      fontWeight="semibold"
      borderColor={getColor()}
      bg="transparent"
      color={getColor()}
      _hover={{ opacity: 0.96 }}
    >
      {children}
    </Button>
  );
};

export default CustomOutlineButton;
