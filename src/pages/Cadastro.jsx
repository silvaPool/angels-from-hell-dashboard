import React, { useContext } from 'react';
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Cadastro = () => {

    const navigate = useNavigate();
    const {signUp, user, signed} = useContext(AuthContext);


    return (
    <Formik
       initialValues={{email: '', senha: '' }}
       validationSchema={Yup.object({
         email: Yup.string().email('Invalid email address').required('Required'),
         senha: Yup.string()
           .min(5, 'A senha deve ter mais de 8 digitos')
           .required('A senha é obrigatória!'),        
        })}
       onSubmit={async (values) => {
            const res = await signUp(values.email, values.senha);   
            if (res.user) {
              alert("Conta cadastrada com sucesso");
            } else {
              alert("Ocorreu um erro, tente com um email diferente")
            }
       
       }}
     >
        {formik => (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" />

            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" />
            <ErrorMessage name="senha" />

             <button type="submit">Submit</button>
           </form>
          )}
        </Formik>
    );
};

export default Cadastro;