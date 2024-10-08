import React, { useContext } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Cadastro = () => {
  const navigate = useNavigate();
  const { signUp, user, signed } = useContext(AuthContext);

  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          senha: Yup.string()
            .min(5, "A senha deve ter mais de 8 digitos")
            .required("A senha é obrigatória!"),
        })}
        onSubmit={async (values) => {
          const res = await signUp(values.email, values.senha);
          if (res.user) {
            alert("Conta cadastrada com sucesso");
          } else {
            alert("Ocorreu um erro, tente com um email diferente");
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="logo-form">Cadastro</div>

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" className="field" />
            <ErrorMessage name="email" />

            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" className="field" />
            <ErrorMessage name="senha" />

            <button type="submit" className="button-form">
              Submit
            </button>

            <p class="signup-link">
            Has registration?
              <a class="signup-link link" onClick={() => navigate("/")}> Return Login</a>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Cadastro;
