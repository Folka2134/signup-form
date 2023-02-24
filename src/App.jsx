import { useFormik } from "formik";
import * as Yup from "yup";

import "./App.css";

function App() {
  // Formik Logic

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    // Validate Form

    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name cannot be empty"),
      lastName: Yup.string().required("Last Name cannot be empty"),
      email: Yup.string()
        .email("Looks like this is not an email")
        .required("email cannot be empty"),
      password: Yup.string().required("Password cannot be empty"),
    }),

    // Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center text-center xl:text-left h-screen bg-[#ff686b] bg-[url('./assets/bg-intro-desktop.png')] w-screen p-12">
      <div className=" text-white mb-20 xl:mr-32 xl:max-w-xl">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Learn to code by watching others
        </h1>
        <p className="md:text-xl">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div>
          <button className="text-white font-semibold p-4 px-24 rounded-lg shadow-xl bg-purple-600 active:bg-purple-500 mb-6">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </button>
        </div>
        <div>
          <form
            className="flex flex-col justify-evenly h-[500px] p-6 bg-white rounded-lg shadow-2xl"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col">
              <input
                className={`p-3 border-2 ${
                  formik.errors.firstName && formik.touched.firstName
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <label className="text-xs text-red-400 p-2 text-right italic">
                  {formik.errors.firstName}
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className={`p-3 border-2 ${
                  formik.errors.lastName && formik.touched.lastName
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <label className="text-xs text-red-400 p-2 text-right italic">
                  {formik.errors.lastName}
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className={`p-3 border-2 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <label className="text-xs text-red-400 p-2 text-right italic">
                  {formik.errors.email}
                </label>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className={`p-3 border-2 ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-400"
                    : "border-gray-200"
                }`}
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <label className="text-xs text-red-400 p-2 text-right italic">
                  {formik.errors.password}
                </label>
              )}
            </div>
            <button
              className="text-white font-semibold bg-green-400 active:bg-green-300 p-4 rounded-lg shadow-xl"
              type="submit"
              value=""
            >
              CLAIM YOUR FREE TRAIL
            </button>
            <p className="text-xs text-gray-400 text-center px-8">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-red-400 font-semibold cursor-pointer">
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
