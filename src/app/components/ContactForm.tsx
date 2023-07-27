import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="w-full flex flex-col items-center gap-12">
        <div className="flex w-full">
          <label
            className="text-3xl text-white w-1/4 mr-8 flex justify-end"
            htmlFor="firstName"
          >
            EMAIL:
          </label>
          <Field
            id="firstName"
            className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white"
            name="firstName"
            placeholder="jayendraawasthi06@gmail.com"
          />
        </div>
        <div className="flex w-full">
          <label
            className="text-3xl text-white w-1/4 mr-8 flex justify-end"
            htmlFor="lastName"
          >
            SUBJECT:
          </label>
          <Field
            id="lastName"
            name="lastName"
            className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white"
            placeholder="Doe"
          />
        </div>
        <div className="flex w-full">
          <label
            className="text-3xl text-white w-1/4 mr-8 flex justify-end"
            htmlFor="email"
          >
            MESSAGE:
          </label>
          <textarea
            id="email"
            rows={6}
            className="w-full bg-primary text-xl bg-opacity-30 px-5 py-3 placeholder:text-gray-400 uppercase text-white"
            name="email"
          />
        </div>
        <div className="mt-8">
          <button
            className="bg-shadow text-white transition-colors hover:bg-purple-800  text-2xl px-8 py-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
