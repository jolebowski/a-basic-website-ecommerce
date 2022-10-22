import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...ohterProps }) => {
  return (
    <Group>
      <Input {...ohterProps} />
      {label && (
        <FormInputLabel shrink={ohterProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
