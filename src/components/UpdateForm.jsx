import { Formik, Form } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createTechnics, editTechnic, updateTechnics } from '../store/fightStore/fightActions';
import { Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MyTextInput from '../form-items/MyTextInput';
import axios from 'axios';


export default function UpdateForm({setShowForm}){

    const match = useParams();
    const technic = useSelector(state=>state.fight.technics.find(p=>p.id === match.id));
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const initialValues = technic ?? 

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

    const [values, setValues] = useState(initialValues);

    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

        

    return (
        <>
            <h1>Edit Technic</h1>

            <Formik 
            initialValues={initialValues}
       
            onSubmit= {(values)=>{
                console.log(values) 

                dispatch(editTechnic(technic.id, values))
                navigate('/dashboard')
            }
                
            }           
            >

            <Form>
            <Label>Title</Label>
            <MyTextInput size='large' style={{width:'500px', marginBottom:'10px'}} type="text" name="title" placeholder={technic ? technic.title : 'Title of the technic'}/>

            <Label>Category</Label>
            <MyTextInput size='large' style={{width:'500px', marginBottom:'10px'}} type="text" name="category" placeholder={technic ? technic.category : 'Title of the technic'} />

            <Label>Description</Label>
            <MyTextInput size='large' style={{width:'500px', marginBottom:'10px'}} type="text" name="description" placeholder={technic ? technic.description : 'Title of the technic'} />

            <Label>Photo url</Label>
            <MyTextInput size='large' style={{width:'500px', marginBottom:'10px'}} type="text" name="hostPhotoURL" placeholder={technic ? technic.photoURL : 'Title of the technic'} />

            <Button type='submit' content="Submit" color='teal'/>
            <Button as={Link} to="/dashboard" onClick={()=>setShowForm(false)} type='button' content='Cancel'/>

            </Form>

            </Formik>
        </>
    )
}