import React from 'react';
import { useSelector } from 'react-redux';
import { TestModal } from './TestModal';
import { LoginModal } from './LoginModal';
import { DeleteModal} from './DeleteModal';

export default function ModalManager(){
    const modalLookup = {
        TestModal,
        LoginModal,
        DeleteModal
    };
    const currentModal = useSelector(state => state.modals);
    let renderedModal;
    if(currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />


    }

    return <span>{renderedModal}</span>

}