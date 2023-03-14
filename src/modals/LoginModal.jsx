import { Formik, Form } from 'formik';
import React from 'react';
import MyTextInput from '../form-items/MyTextInput';
import ModalWrapper from './ModalWrapper';
import { Button, Segment, Label } from 'semantic-ui-react';
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
          <Segment raised>
          <h2>Login</h2>
          <Formik initialValues={initialValues}  

            validationSchema={validationSchema}

            onSubmit={(values)=>{
            if(values.email === currentUser.email && values.password === currentUser.password){
                dispatch(signin(values));
            }else{
                console.log("Invalid credentials");
            }
            }}>

            <div style={{marginLeft:'auto', marginRight:'auto', width:'40%'}}>
            <Form clearing>

            <Label>Email</Label>
            <MyTextInput style={{marginBottom:'10px'}} name="email" type="email" placeholder="Email"/>

            <Label>Password</Label>
            <MyTextInput name="password" type="password" placeholder="password"/>

            <Button style={{margin:'10px'}} type="submit" color='green' content="Login"/>

            </Form>


            </div>
            


            </Formik>


          </Segment>
        
            
        </ModalWrapper>
    )
}