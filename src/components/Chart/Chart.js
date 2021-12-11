import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.1);
  width: 95%;
`;

export const Caption = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
`;

export const Title = styled.span`
  margin: 10px 0 10px 30px;
`;
export const Paleta = styled.div`
  width: 300px;
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ColorA = styled.div`
  background: #f1e7917f;
  width: 20px;
  height: 2px;
`;

export const TextA = styled.span`
  display: flex;
  font-size: 12px;
  width: 130px;
  justify-content: space-between;
  align-items: center;
`;
export const TextB = styled.span`
  display: flex;
  font-size: 12px;
  width: 130px;
  justify-content: space-between;
  align-items: center;
`;

export const ColorB = styled.div`
  background: #c0293675;
  width: 20px;
  height: 2px;
`;
