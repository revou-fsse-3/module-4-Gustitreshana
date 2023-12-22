import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register: React.FC = () => {
  const [step, setStep] = useState(1);

  const form1ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    birthdate: Yup.date().required("Birthdate is required"),
  });

  const form2ValidationSchema = Yup.object({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string()
      .matches(/^\d{5}(-\d{4})?$/, "Invalid Zip Code format")
      .required("Zip Code is required"),
  });

  const form3ValidationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain an uppercase letter, a number, a special symbol, and be at least 8 characters long."
      ),
  });

  const form1 = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
    },
    validationSchema: form1ValidationSchema,
    onSubmit: () => {
      setStep(2);
    },
  });

  const form2 = useFormik({
    initialValues: {
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
    validationSchema: form2ValidationSchema,
    onSubmit: () => {
      setStep(3);
      // Handle form 2 submission
      // console.log("Form 2 submitted with values:", form2.values);
    },
  });

  const form3 = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: form3ValidationSchema,
    onSubmit: () => {
      alert("Form submitted successfully!");
      window.location.reload(); // Handle form 3 submission
      // console.log("Form 3 submitted with values:", form3.values);
    },
  });

  const previous = () => {
    // Handle form submission here
    setStep(step - 1);
    // console.log(step);
  };

  return (
    <div className="flex items-center h-screen bg-gradient-to-b from-purple-700 via-blue-700 to-black min-h-screen">
      {step === 1 ? (
        <form
          className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md w-1/2"
          onSubmit={form1.handleSubmit}
        >
          <div>
            <label htmlFor="name" className="text-2xl font-semibold mb-6">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              {...form1.getFieldProps("name")}
            />
            {form1.touched.name && form1.errors.name ? (
              <div className="text-xs text-red-500">{form1.errors.name}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-2xl font-semibold mb-6">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              {...form1.getFieldProps("email")}
            />
            {form1.touched.email && form1.errors.email ? (
              <div className="text-xs text-red-500">{form1.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label htmlFor="birthdate" className="text-2xl font-semibold mb-6">
              Date of Birth
            </label>
            <input
              type="date"
              id="birthdate"
              className="w-full p-2 border rounded"
              {...form1.getFieldProps("birthdate")}
            />
            {form1.touched.birthdate && form1.errors.birthdate ? (
              <div className="text-xs text-red-500">
                {form1.errors.birthdate}
              </div>
            ) : null}
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              Next
            </button>
          </div>
        </form>
      ) : null}

      {step === 2 ? (
        <form
          className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md w-1/2"
          onSubmit={form2.handleSubmit}
        >
          <div>
            <label className="text-2xl font-semibold mb-6">
              Street address
            </label>
            <input
              type="text"
              id="street"
              className="w-full p-2 border rounded"
              {...form2.getFieldProps("street")}
            />
            {form2.touched.street && form2.errors.street ? (
              <div className="text-xs text-red-500">{form2.errors.street}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label className="text-2xl font-semibold mb-6">City</label>
            <input
              type="text"
              id="city"
              className="w-full p-2 border rounded"
              {...form2.getFieldProps("city")}
            />
            {form2.touched.city && form2.errors.city ? (
              <div className="text-xs text-red-500">{form2.errors.city}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label className="text-2xl font-semibold mb-6">State</label>
            <input
              type="text"
              id="state"
              className="w-full p-2 border rounded"
              {...form2.getFieldProps("state")}
            />
            {form2.touched.state && form2.errors.state ? (
              <div className="text-xs text-red-500">{form2.errors.state}</div>
            ) : null}
          </div>
          <div className="mt-3">
            <label className="text-2xl font-semibold mb-6">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              className="w-full p-2 border rounded"
              {...form2.getFieldProps("zipcode")}
            />
            {form2.touched.zipcode && form2.errors.zipcode ? (
              <div className="text-xs text-red-500">{form2.errors.zipcode}</div>
            ) : null}
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-1/2"
              onClick={previous}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-1/2"
            >
              Next
            </button>
          </div>
        </form>
      ) : null}

      {step === 3 ? (
        <form
          className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md w-1/2"
          onSubmit={form3.handleSubmit}
        >
          <div>
            <label className="text-2xl font-semibold mb-6">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded"
              {...form3.getFieldProps("username")}
            />
            {form3.touched.username && form3.errors.username ? (
              <div className="text-xs text-red-500">
                {form3.errors.username}
              </div>
            ) : null}
          </div>
          <div className="mt-3">
            <label className="text-2xl font-semibold mb-6">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              {...form3.getFieldProps("password")}
            />
            {form3.touched.password && form3.errors.password ? (
              <div className="text-xs text-red-500">
                {form3.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-1/2"
              onClick={previous}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-1/2"
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Register;
