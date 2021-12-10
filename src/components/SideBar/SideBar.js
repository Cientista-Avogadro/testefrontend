import styled from 'styled-components';

export const Container = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
`;

export const Logo = styled.span`
  font-size: 44px;
  color: #edc201;
  margin: 50px 0 0 0;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0;
  padding: 0;
`;

export const ListContent = styled.span`
  font-size: 16px;
`;
export const List = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 15px 0;

  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
