import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Technics from './components/Technics';
import {Grid, Container} from 'semantic-ui-react'
import TechnicForm from './components/TechnicForm';
import DashBoard from './components/Dashboard';
import {Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UpdateForm from './components/UpdateForm';
import { useEffect, useState } from 'react';
import ModalManager from './modals/ModalManager';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTechnics } from './store/fightStore/fightActions';

function App() {
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{

    setTimeout(()=>{
      dispatch(getTechnics());
      setLoading(false);
    }, 2000)
    
  }, []);


  return (
    <>
       <ModalManager/>
        <NavBar setShowForm={setShowForm}/>

        <Container style={{marginTop:'7em'}}>
        <Routes>
       <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashBoard loading={loading} showForm={showForm} setShowForm={setShowForm}/>}/>
          <Route path={'/update-technic/:id'} element={<UpdateForm setShowForm={setShowForm}/>}/>
       </Routes>
          
        </Container>


    
    </>
  );
}

export default App;
