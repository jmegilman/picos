import "./FormError.css";

const FormError = ({ errorText }) => {
  return <div className="ErrorContainer">{errorText}</div>;
};

export default FormError;
