import React from 'react';
import { Container, Icon, List, ListContent, Logo, LogOutButton, Menu } from './SideBar';
import { ListMenu as list } from '../../services/menu';
import logout from '../../assets/img/icons/logout.png'

export default function Sidebar() {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Menu>
        {list.map(item => (
          <List key={item.id}>
            <Icon src={item.icon} />
            <ListContent>{item.name}</ListContent>
          </List>
        ))}
      </Menu>
      <LogOutButton>
          <Icon src={logout} alt='vazio'/>
          <ListContent >Sair</ListContent>
      </LogOutButton>
    </Container>
  );
}
