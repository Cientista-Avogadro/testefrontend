import React from 'react'
import { Container, ContentRight, InputContaoner, InputIcon, InputSearc, Navbar, Notifications, UserImage } from './RenderContent'
import notification from '../../assets/img/icons/notification.png';
import user from '../../assets/img/icons/user.png';
import search from '../../assets/img/icons/search.png';
import Card from '../Card';
import Chart from '../Chart';

export default function RenderContent() {
    return (
        <Container>
            <Navbar>
                <InputContaoner>
                    <InputIcon src={search} />
                    <InputSearc type={'search'} placeholder='Pesquisar'/>
                </InputContaoner>
                <ContentRight>
                    <Notifications src={notification}/>
                    <UserImage src={user} />
                </ContentRight>
            </Navbar>
            <Card/>
            <Chart />
        </Container>
    )
}
