import {
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
  Textarea,
} from "@chakra-ui/react";

export default function TextArea({
  formik,
  name,
  type,
  label,
  placeHolder,
  required,
  icon,
  autoFocus,
  readOnly,
  disabled,
}) {
  return (
    <FormControl isInvalid={formik.touched[name] && formik.errors[name]}>
      <FormLabel htmlFor={name}>
        {label && (
          <Flex gap="2">
            {label}
            {required && <Text color="red.400">*</Text>}
          </Flex>
        )}
      </FormLabel>
      <InputGroup>
        {icon && (
          <InputLeftElement
            pointerEvents="none"
            fontSize="1.2rem"
            mt=".3rem"
            ml=".3rem"
            children={icon}
          />
        )}
        <Textarea
          type={type}
          name={name}
          id={name}
          placeholder={placeHolder}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          onChange={formik.handleChange}
          variant="outline"
          _focus={{ borderColor: "secondary.100" }}
          size="xl"
          py="7"
          px="7"
          borderRadius="1rem"
          {...formik.getFieldProps(name)}
        />
      </InputGroup>
      {formik.touched[name] && formik.errors[name] && (
        <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
      )}
    </FormControl>
  );
}
