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
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 700));

      console.log("Formik form submitted:", values);
      alert("Registration successful!");

      resetForm();
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Registration failed." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            {errors.submit && (
              <p style={{ color: "red" }}>{errors.submit}</p>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
