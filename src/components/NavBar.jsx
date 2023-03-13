import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Menu, Item, Input, Segment, Container} from 'semantic-ui-react';
import { openModal } from '../modals/modalReducer';


export default function NavBar({setShowForm}){

    const {authenticated} = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    return(
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item
                        name='home' />
                    <Menu.Item
                        name='Create Technic' onClick={()=>setShowForm(true)} />
                    <Menu.Item
                    name='Open Modal'
                        onClick={()=>dispatch(openModal({modalType:'TestModal'}))}
                         />
                    {!authenticated &&
                                        <Menu.Item
                                        name='Login'onClick={()=>dispatch(openModal({modalType:'LoginModal'}))} />
                    }

                
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                    </Container>
                </Menu>
        </div>
    )
}