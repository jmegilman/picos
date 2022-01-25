import { useState } from "react";
import { Formik } from "formik";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import FormError from "../../components/FormError";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";
import { NETWORKS } from "../../utils";
import { validate } from "./utils";

const ProposalForm = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const submitForm = (values, setSubmitting) => {
    console.log(values);
    setIsSubmitSuccess(true);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ network: "", price: "", summary: "", title: "" }}
      onSubmit={(values, { setSubmitting }) => {
        submitForm(values, setSubmitting);
      }}
      validate={validate}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Proposal title"
            name="title"
            onChange={handleChange}
            placeholder=""
            value={values.title}
          />
          {errors.title ? (
            <FormError errorText={errors.title}>{errors.title}</FormError>
          ) : null}
          <TextArea
            label="Proposal summary"
            name="summary"
            onChange={handleChange}
            placeholder=""
            value={values.summary}
          />
          {errors.summary ? (
            <FormError errorText={errors.summary}>{errors.summary}</FormError>
          ) : null}
          <Dropdown
            isClearable="true"
            label="Intended network"
            name="network"
            onChange={handleChange}
            options={NETWORKS}
            value={values.network}
          />
          {errors.network ? (
            <FormError errorText={errors.network}>{errors.network}</FormError>
          ) : null}
          <TextField
            label="Price per episode"
            name="price"
            onChange={handleChange}
            value={values.price}
            type="number"
          />
          {errors.price ? (
            <FormError errorText={errors.price}>{errors.price}</FormError>
          ) : null}
          {isSubmitting ? (
            <Button type="submit" disabled>
              Submitting
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
          {isSubmitSuccess ? <p>Thank you for your submission!</p> : ""}
          <p></p>
        </form>
      )}
    </Formik>
  );
};

export default ProposalForm;
