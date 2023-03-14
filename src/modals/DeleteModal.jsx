import React, { useEffect } from 'react';
import ModalWrapper from './ModalWrapper';
import {Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from './modalReducer';
import { deleteTechnic, getTechnic } from '../store/fightStore/fightActions';

export function DeleteModal({technic}){

    const dispatch = useDispatch();

    return(
        <ModalWrapper>
            <h2>Are you sure you want to delete this item ?</h2>
            <br></br>
            <Button style={{display:'inline'}} onClick={()=>{dispatch(deleteTechnic(technic.id)); dispatch(closeModal())}} color='red' content="Yes"></Button>
            <Button content="Cancel" onClick={()=>dispatch(closeModal())}></Button>
        </ModalWrapper>
    )
}