import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  background: #f6f7fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  margin-top: -10px;
  position: relative;
  align-items: center;
  background: green;
  width: 100%;
`;

export const InputContaoner = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: relative;
  width: 250px;
`;
export const InputSearc = styled.input`
  border: none;
  position: absolute;
  top: 15px;
  left: 25px;
  border-radius: 50px;
  width: 350px;
  padding: 10px 30px;

  ::placeholder {
    color: gainsboro;
  }
`;

export const InputIcon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 25px;
  left: 36px;
  z-index: 1;
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  position: absolute;
  right: 30px;
  top: 15px;
`;
export const Notifications = styled.img`
  width: 30px;
  height: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
