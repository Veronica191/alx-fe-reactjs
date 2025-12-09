import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("Formik form submitted!");
        console.log(values);
      }}
    >
      {(formik) => (
        <Form style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
          <h2>Registration Form (Formik + Yup)</h2>

          <Field
            name="username"
            type="text"
            placeholder="Enter username"
          />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <Field
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <Field
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
