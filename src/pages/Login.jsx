import React, { useContext } from 'react';
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const {login, user, signed} = useContext(AuthContext);

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
        try {
            const res = await login(values.email, values.senha);   
            navigate("/home/usurio");
        } catch (error) {
            console.log(error);
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

export default Login;