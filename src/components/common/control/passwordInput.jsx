import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Flex,
} from "@chakra-ui/react";

import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

export default function PasswordInput({
  formik,
  name,
  showPassword,
  label,
  placeHolder,
  required,
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
        <Input
          type={showPassword.value ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeHolder}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          onChange={formik.handleChange}
          variant="filled"
          size="lg"
          // borderColor="secondary.100"
          _focus={{ borderColor: "primary.100" }}
          py="7"
          px="7"
          // fontSize="2xl"
          borderRadius="md"
          {...formik.getFieldProps(name)}
        />

        <InputRightElement fontSize="1.4rem" mt=".7rem" mr="2rem">
          {showPassword.value && (
            <Box cursor="pointer" onClick={showPassword.toggler}>
              <FiEye />
            </Box>
          )}
          {!showPassword.value && (
            <Box cursor="pointer" onClick={showPassword.toggler}>
              <FiEyeOff />
            </Box>
          )}
        </InputRightElement>
      </InputGroup>
      {formik.touched[name] && formik.errors[name] && (
        <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
      )}
    </FormControl>
  );
}
