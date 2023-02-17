import {
  FormControl,
  Select as ChakraSelect,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
const Select = ({ formik, label, name, type, placeHolder, list }) => {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraSelect
          name={name}
          type={type}
          value={formik.values[name]}
          onChange={formik.handleChange}
          placeholder={placeHolder}
        >
          {list.map((item) => (
            <option key={item.id} style={{ color: "black" }}>
              {item.title}
            </option>
          ))}
        </ChakraSelect>
        {formik.errors[name] && (
          <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default Select;
