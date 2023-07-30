import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ErrorInputLayout } from "./ErrorInputLayout";
import { ErrorInputPlaceholder } from "./ErrorInputPlaceholder";

const ContactFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

export const FormikContact = ({
  setIsSubmitted,
}: {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Formik
        data-netlify="true"
        initialValues={{
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 0));
          // Set isSubmitted to true to show Thank you page
          setIsSubmitted(true);
          // alert(JSON.stringify(values, null, 2));
          // Back to Form after 3.5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3500);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col items-center gap-4 md:gap-8">
            <div className="w-full">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 md:gap-0">
                <label
                  className="text-3xl text-white w-full justify-start md:basis-1/4 mr-8 flex md:justify-end"
                  htmlFor="subject"
                >
                  SUBJECT:
                </label>
                <div className="w-full md:basis-3/4">
                  <Field
                    id="subject"
                    className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white focus:bg-white transition-colors focus:text-black"
                    name="subject"
                    type="subject"
                    placeholder="Your subject here..."
                  />
                  {errors.subject && touched.subject ? (
                    <ErrorInputLayout>{errors.subject}</ErrorInputLayout>
                  ) : (
                    <ErrorInputPlaceholder />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 md:gap-0">
                <label
                  className="text-3xl text-white w-full justify-start md:basis-1/4 mr-8 flex md:justify-end"
                  htmlFor="email"
                >
                  EMAIL:
                </label>
                <div className="w-full md:basis-3/4">
                  <Field
                    id="email"
                    className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white focus:bg-white transition-colors focus:text-black"
                    name="email"
                    type="email"
                    placeholder="yourmail@mail.com"
                  />
                  {errors.email && touched.email ? (
                    <ErrorInputLayout>{errors.email}</ErrorInputLayout>
                  ) : (
                    <ErrorInputPlaceholder />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 md:gap-0">
                <label
                  className="text-3xl text-white w-full justify-start md:basis-1/4 mr-8 flex md:justify-end"
                  htmlFor="message"
                >
                  MESSAGE:
                </label>
                <div className="w-full md:basis-3/4">
                  <Field
                    id="message"
                    as="textarea"
                    rows={6}
                    placeholder="Your message here..."
                    className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white focus:bg-white transition-colors focus:text-black"
                    name="message"
                  />
                  {errors.message && touched.message ? (
                    <ErrorInputLayout>{errors.message}</ErrorInputLayout>
                  ) : (
                    <ErrorInputPlaceholder />
                  )}
                </div>
              </div>
            </div>
            <div className="md:mt-8 flex w-full justify-center md:justify-end">
              <button
                className="bg-shadow text-white transition-colors hover:bg-purple-800  text-2xl px-8 py-4"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
