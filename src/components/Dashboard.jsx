import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import { openModal } from '../modals/modalReducer';
import { getTechnics } from '../store/fightStore/fightActions';
import TechnicForm from './TechnicForm';
import Technics from './Technics';
import axios from 'axios';
import LoadingComponent from './LoadingComponent';

export default function DashBoard({showForm, setShowForm, loading}){

  const dispatch = useDispatch();

  const {technics} = useSelector(state => state.fight);




    return(
        <Grid columns={3} divided>
      <Grid.Column>
        {loading && <LoadingComponent/>}
        {!loading && technics.map(technic=>(
            <Technics technic={technic} key={technic.id} setShowForm={setShowForm} loading={loading}/>

        ))}
        
      </Grid.Column>

      <Grid.Column>
        {showForm && 
                     <TechnicForm setShowForm={setShowForm} technics={technics}/>
        }
        <Button onClick={()=> dispatch(openModal({modalType:'TestModal'}))} content="Open Modal"/>
        
      </Grid.Column>

        </Grid> 


    )
}






