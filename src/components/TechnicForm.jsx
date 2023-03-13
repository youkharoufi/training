import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createTechnic, createTechnics, updateTechnics } from '../store/fightStore/fightActions';
import { Link } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import {v4 as uuid } from 'uuid'


export default function TechnicForm({technics, setShowForm}){

    const dispatch = useDispatch();
    

    const initialValues =

    {
        id: '',
        title: '',
        category: '',
        description: '',
        presentedBy: "",
        hostPhotoURL: '',
        students: [
            
        ]
    }

    const [values, setValues] = useState(initialValues)

    


    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

    return (
        <>
            <h1>Create / Edit Technic</h1>

            <Formik 
            initialValues={initialValues}
       
            onSubmit= {()=>{
                values.id = uuid();
                console.log(values)
                dispatch(createTechnic(values));
                setShowForm(false)
            }
                
            }           
            >

            <Form>
            <Input type="text" name="title" placeholder='Title of the technic' onChange={handleInputChange}/>

            <Input type="text" name="category" placeholder="Category of the technic" onChange={handleInputChange}/>

            <Input type="text" name="description" placeholder="Description of the technic" onChange={handleInputChange} />

            <Input type="text" name="hostPhotoURL" placeholder="Photo of the technic" onChange={handleInputChange}/>

            <Button type='submit' content="Submit" color='teal'/>
            <Button as={Link} to="/dashboard" onClick={()=>setShowForm(false)} type='button' content='Cancel'/>

            </Form>

            </Formik>
        </>
    )
}