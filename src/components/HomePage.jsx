import React from 'react';
import {Segment, Container, Header, Icon, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showNav } from '../store/navStore/navActions';

export default function HomePage(){

    const dispatch = useDispatch();

    return ( 

        <Segment inverted textAlign="center" vertical className="masthead" style={{marginTop:'7em'}}>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/Ryu.jpg' style={{marginBottom:12}} />
                    Fight-Fight !!!
                </Header>
                <Button as={Link} to="/dashboard" onClick={()=>dispatch(showNav())} size="huge" inverted>
                    Get Started
                    <Icon name='right arrow'/>
                </Button>
            </Container>
        </Segment>
    )
}