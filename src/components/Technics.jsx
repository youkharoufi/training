import React from 'react';
import { Segment, Header, Icon, Button, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteTechnic } from '../store/fightStore/fightActions';

export default function Technics({technic, setShowForm, loading}){

    const dispatch = useDispatch();

    return (
        <>
            <Segment placeholder>
            <Header icon>
            <Icon name={technic.category} />
                {technic.title}
            </Header>
            <Image src={technic.photoURL} size='medium' centered bordered />
            <Button as={Link} to={`/update-technic/${technic.id}`} style={{marginTop:'5px'}} primary>Change Technic</Button>
            <Button onClick={()=>{
;
                
                    dispatch(deleteTechnic(technic.id));

                
               
            }}      
                style={{marginTop:'5px'}} floated='right' color='orange'>Delete Technic</Button>
            </Segment>

        
        </>
    )
}