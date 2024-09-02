import React, { useContext } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, user, signed } = useContext(AuthContext);

  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          senha: Yup.string()
            .min(8, "A senha deve ter mais de 8 digitos")
            .required("A senha é obrigatória!"),
        })}
        onSubmit={async (values) => {
          try {
            const res = await login(values.email, values.senha);

            if (res.user) {
              if (res.user.email === "admin@admin.com") {
                navigate("/admin");
              } else {
                navigate("/home/usuario");
              }
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="logo-form">Login</div>

            <label htmlFor="email" className="email">
              Email Address
            </label>
            <Field name="email" type="text" className="field" />
            <ErrorMessage name="email" />

            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" className="field" />
            <ErrorMessage name="senha" />

            <button type="submit" className="button-form">
              Submit
            </button>

            <p class="signup-link">
              Don't have an account?
              <a class="signup-link link" onClick={() => navigate("/cadastro")}>
                {" "}
                Sign up now
              </a>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
