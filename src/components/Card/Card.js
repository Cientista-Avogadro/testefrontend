import styled from 'styled-components';

export const Container = styled.div`
  display: flex;  
  justify-content: space-around;
  width: 100%;
  margin: 80px 0 50px 0;
`;

export const ContainerAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
 
`;

export const Title = styled.span`
    min-width: 100px;
    font-size: 12px;
`;

export const Quantity = styled.span`
 margin-top: 5px;
 color: #EEE0A9;
 font-weight: 700;
 `;
