import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";

export default function RegularInput({
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
        <Input
          type={type}
          name={name}
          id={name}
          placeholder={placeHolder}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          onChange={formik.handleChange}
          variant="outline"
          bg="white"
          _focus={{ borderColor: "primary.100" }}
          size={type === "file" ? "" : "lg"}
          py="7"
          px="7"
          accept={type === "file" && ".doc,.docx,.pdf,.xml,application/msword"}
          borderRadius="md"
          {...formik.getFieldProps(name)}
        />
      </InputGroup>
      {!formik.errors[name] && type === "file" && (
        <FormHelperText>
          Note: We can support doc, docx, pdf, files. All file sizes must be 2MB
          or less.
        </FormHelperText>
      )}
      {formik.touched[name] && formik.errors[name] && (
        <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export function RegularInputWithoutFormik({
  name,
  type,
  placeHolder,
  icon,
  size,
  autoFocus,
  readOnly,
  disabled,
  onChange,
  onBlur,
  value,
  label,
  required,
}) {
  return (
    <FormControl>
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
            mt={size ? "" : ".3rem"}
            ml=".3rem"
            children={icon}
            fontSize={size ? "1rem" : "1.2rem"}
            pointerEvents="none"
          />
        )}
        <Input
          id={name}
          size={size || "lg"}
          type={type}
          name={name}
          value={value}
          variant="filled"
          fontSize="2xl"
          borderRadius="full"
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeHolder}
        />
      </InputGroup>
    </FormControl>
  );
}
