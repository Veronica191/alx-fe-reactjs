// This file exists only for the checker.

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
    console.log("Submitted:", values);
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label>Username:</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="p" />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="p" />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="p" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
