import React from 'react';
import { card } from '../../services/card';
import {
  Container,
  ContainerAll,
  Content,
  Icon,
  Quantity,
  Title,
} from './Card';

export default function Card() {
  return (
    <Container>
      {card.map(item => (
        <ContainerAll key={item.id}>
          <Icon src={item.icon} />
          <Content>
            <Title>{item.title}</Title>
            <Quantity>{item.quantity}</Quantity>
          </Content>
        </ContainerAll>
      ))}
    </Container>
  );
}
