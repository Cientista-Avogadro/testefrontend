import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  background: #F6F7FB;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Navbar = styled.div`
  display: flex;
  position: relative;
`;

export const InputContaoner = styled.div`
  display: flex;
  position: relative;
  width: 250px;
`;
export const InputSearc = styled.input`
  border: none;
  position: absolute;
  top: 15px;
  left: 50px;
  border-radius: 50px;
  width: 350px;
  padding: 10px 30px;

  ::placeholder{
      color: gainsboro;
  }
`;

export const InputIcon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 25px;
  left: 58px;
  z-index: 1;
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  position: absolute;
  right: 50px;
  top: 15px;
`;
export const Notifications = styled.img`
  width: 30px;
  height: 30px;
  :hover{
      cursor: pointer;
  }
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  :hover{
      cursor: pointer;
  }
`;
