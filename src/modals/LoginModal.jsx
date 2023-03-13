import { Formik, Form } from 'formik';
import React from 'react';
import MyTextInput from '../form-items/MyTextInput';
import ModalWrapper from './ModalWrapper';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../store/authStore/authActions';
import * as Yup from 'yup';

export function LoginModal(){

  const {currentUser} = useSelector(state=>state.auth); 
  const dispatch = useDispatch(); 

  const initialValues = {
    email:'',
    password:''
  }

  const validationSchema = Yup.object({
    email:Yup.string().email().required(),
    password:Yup.number().required()
  })

    return(
        <ModalWrapper>
        <Formik initialValues={initialValues}  

                validationSchema={validationSchema}
        
                onSubmit={(values)=>{
                if(values.email === currentUser.email && values.password === currentUser.password){
                    dispatch(signin(values));
                }else{
                    console.log("Invalid credentials");
                }
        }}>
            <Form>
            <MyTextInput name="email" type="email" placeholder="Email"/>
            <MyTextInput name="password" type="password" placeholder="password"/>

            <Button type="submit" content="Login"/>

            </Form>


        </Formik>
            
        </ModalWrapper>
    )
}