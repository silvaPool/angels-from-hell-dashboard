import React, { useContext, useEffect, useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { setPhoto } from "../services/profile";

const Perfil = () => {
  const { state } = useLocation();

  const { login, user, signed, updateProfileUser, profile } =
    useContext(AuthContext);

  const [avatar, setAvatar] = useState("");
  const [fileData, setFileData] = useState();
  const [profileData, setProfileData] = useState();
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    if (state) {
      setProfileData(state);
      setIsAdm(true);
    }
    if (profile) {
      setProfileData(profile);
    }
  }, [state, profile]);

  useEffect(() => {
    if (profile && profile.urlImage) {
      setAvatar(profile.urlImage);
    }
  }, [profile]);

  function handleAvatar(e) {
    const fileUser = e.target.files[0];
    setFileData(fileUser);
    setAvatar(URL.createObjectURL(fileUser));
  }

  async function uploadFileImage() {
    try {
      const url = await setPhoto(fileData, user.uid);
      setAvatar(url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          nome: "",
          sobrenome: "",
          email: "",
          telefone: "",
          cidade: "",
          bairro: "",
          numero: "",
        }}
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

            <label htmlFor="nome" className="nome">
              Nome
            </label>
            <Field name="nome" type="text" className="nome" />
            <ErrorMessage name="nome" />

            <label htmlFor="sobrenome" className="sobrenome">
              Sobrenome
            </label>
            <Field name="sobrenome" type="text" className="sobrenome" />
            <ErrorMessage name="sobrenome" />

            <label htmlFor="email" className="email">
              Email Address
            </label>
            <Field name="email" type="text" className="field" />
            <ErrorMessage name="email" />

            <label htmlFor="telefone" className="telefone">
              Telefone
            </label>
            <Field name="telefone" type="number" className="telefone" />
            <ErrorMessage name="telefone" />

            <label htmlFor="cidade" className="cidade">
              Cidade
            </label>
            <Field name="cidade" type="text" className="cidade" />
            <ErrorMessage name="cidade" />

            <label htmlFor="bairro" className="bairro">
              Bairro
            </label>
            <Field name="bairro" type="text" className="bairro" />
            <ErrorMessage name="bairro" />

            <label htmlFor="numero" className="numero">
              Numero
            </label>
            <Field name="numero" type="number" className="numero" />
            <ErrorMessage name="numero" />

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

export default Perfil;
