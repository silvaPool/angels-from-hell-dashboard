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
        try {
            const res = await signUp(values.email, values.senha);   
            navigate("/home/login");
        } catch (error) {
            console.log(error);
        }
       }}
     >
        {formik => (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" />

             <button type="submit">Submit</button>
           </form>
          )}
        </Formik>
    );
};

export default Cadastro;