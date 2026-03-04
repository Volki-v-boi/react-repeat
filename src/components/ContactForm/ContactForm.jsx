import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactShema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "max 50").required("required"),
  number: Yup.string().min(3).max(50).required("required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactShema}
    >
      <Form>
        <div>
          <label>Contact Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Contact Number:</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
