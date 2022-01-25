import { TEXT_DEFAULT_DROPDOWN } from "../../utils";

// Yup could be used for validation here
export const validate = (values) => {
  const errors = {};
  if (!values.network || values.network === TEXT_DEFAULT_DROPDOWN) {
    errors.network = "This field is required";
  }
  if (!values.price) {
    errors.price = "This field is required";
  }
  if (isNaN(parseInt(values.price))) {
    errors.price = "The price should be a number please";
  }
  if (!values.summary) {
    errors.summary = "This field is required";
  }
  if (!values.title) {
    errors.title = "This field is required";
  }

  return errors;
};
