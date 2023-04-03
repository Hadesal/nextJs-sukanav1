import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/ContactUs.module.css";

function ContactUs() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      console.log(data.message);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Contact Us</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formControl}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <Field type="text" name="name" className={styles.input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <Field type="email" name="email" className={styles.input} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  className={styles.textarea}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={styles.error}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
