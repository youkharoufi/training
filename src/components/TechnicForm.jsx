import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createTechnic, createTechnics, updateTechnics } from '../store/fightStore/fightActions';
import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import {Form,Input} from 'semantic-ui-react-form-validator'
import * as Yup from 'yup';
import {v4 as uuid } from 'uuid'



export default function TechnicForm({setShowForm}){

    const dispatch = useDispatch();
    

    const initialValues =

    {
        id: '',
        title: '',
        category: '',
        description: '',
        photoURL: '',

    }

    const [values, setValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState('');
    


    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

    function validate(){
        const errors = {};

        const regExp = new RegExp(/^(?=.*[!@#&()\-/$=<>?+*%])[a-zA-Z0-9!@#&()\-/$=<>?+*%]+$/)
        
        if(!values.title){
            errors.title = "Title is required"
        }
        if(!values.description){
            errors.description = "Description is required"
        }
        if(!values.category){
            errors.category = "Category is required"
        }
        if(!values.photoURL){
            errors.photoURL = "Photo url is required"
        }

        if(!regExp.test(values.title)){
            errors.title = "Title must contain at least one special character";
        }

        return errors

    }

    const validationSchema = Yup.object({
        title:Yup.string().required(),
        category:Yup.string().required(),
        description:Yup.string().required(),
        photoURL:Yup.string().required(),

    })
        
    

    return (
        <>
        <Segment raised style={{width:'600px'}}>
            <h1>Create / Edit Technic</h1>

            <Formik 
            initialValues={initialValues}

            validationSchema={validationSchema}
       
            onSubmit= {()=>{
                
                console.log(values);
                setFormErrors(validate());
                while(formErrors.length > 0){
                    return;
                } 
                values.id = uuid();
                dispatch(createTechnic(values));
                setShowForm(false)
            }
                
            }           
            >

            
            <Form>
            <Input type="text" style={{margin:'10px'}} size='big' label="Title" labelPosition='left' name="title" placeholder='Title of the technic' onChange={handleInputChange} 
            validators={['required']} 
            errorMessages={['title is required']} />

            <Input type="text" style={{margin:'10px'}} size='big' label="Category" labelPosition='left' name="category" placeholder="Category of the technic" onChange={handleInputChange}
            validators={['required']} 
            errorMessages={['title is required']}/>

            <Input type="text" style={{margin:'10px'}} size='big' label="Description" labelPosition='left' name="description" placeholder="Description of the technic" onChange={handleInputChange} 
            validators={['required']} 
            errorMessages={['title is required']}/>

            <Input type="text" style={{margin:'10px'}} size='big' label="photoURL" labelPosition='left' name="photoURL" placeholder="Photo of the technic" onChange={handleInputChange}
            validators={['required']} 
            errorMessages={['title is required']}/>
            
            <br></br>
            <Button style={{display:'inline', margin:'10px'}} type='submit' content="Submit" color='teal'/>
                        
            <Button style={{display:'inline', margin:'10px'}} as={Link} to="/dashboard" onClick={()=>setShowForm(false)} type='button' content='Cancel'/>

            </Form>


            </Formik>
            </Segment>

        </>
    )
}