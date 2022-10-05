import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="App">
      <div className="img">
        <img alt="women" src="/images/pexels-alvaro-arano-13445893.jpg" />
      </div>
      <div className="form">
        <Formik
          initialValues={{
            email: "",
            password: "",
            agree: true,
            username: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username cannot be left blank"),
            email: Yup.string().email().required("Email cannot be left blank"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum."),
            agree: Yup.boolean()
              .oneOf([true])
              .required("Please accept the term"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleReset,
            handleChange,
            dirty,
            isSubmitting,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="title">
                <h1>Welcome back</h1>
                <p>Please enter your details.</p>
              </div>
              <div className="username">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  id="username"
                  type="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                {
                  errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )
                }
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </div>
              <div className="MarginTop">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="agree"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree">Remember for 30 days</label>
                {errors.agree && touched.agree && (
                  <div className="input-feedback">{errors.agree}</div>
                )}
              </div>
              <div className="btn">
                <button type="submit" disabled={!dirty || isSubmitting}>
                  Sign in
                </button>
              </div>
              <p>Don't have an account? Sign Up</p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
