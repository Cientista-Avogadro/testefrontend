import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Caption,
  ColorA,
  ColorB,
  Container,
  Paleta,
  TextA,
  TextB,
  Title,
} from './Chart';

export default function Chart() {
  const data = [
    {
      nameX: '2020-08',
      uv: 10000,
      pv: 15400,
      amt: 2400,
    },
    {
      nameX: '2020-09',
      uv: 7000,
      pv: 10400,
      amt: 2400,
    },
    {
      nameX: '2020-10',
      uv: 9000,
      pv: 2400,
      amt: 2400,
    },
    {
      nameX: '2020-11',
      uv: 5000,
      pv: 24000,
      amt: 2400,
    },
    {
      nameX: '2020-12',
      uv: 7000,
      pv: 2400,
      amt: 2400,
    },
    {
      nameX: '2021-01',
      uv: 9000,
      pv: 2400,
      amt: 2400,
    },
    {
      nameX: '2021-02',
      uv: 12000,
      pv: 2400,
      amt: 2400,
    },
    {
      nameX: '2021-02',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      nameX: '2021-03',
      uv: 4000,
      pv: 1400,
      amt: 2400,
    },
    {
      nameX: '2021-04',
      uv: 7000,
      pv: 500,
      amt: 5400,
    },
  ];

  return (
    <Container>
      <Caption>
        <Title>Relatório de Vendas</Title>
        <Paleta>
          <TextA>
            <ColorA />
            Vendas de 2020
          </TextA>
          <TextB>
            <ColorB />
            Vendas de 2021
          </TextB>
        </Paleta>
      </Caption>
      <ResponsiveContainer width='98%' height={300}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='nameX'
            padding={{ left: 60, right: 50 }}
            style={{ fontSize: '10px', fill: 'gainsboro' }}
          />
          <YAxis
            style={{ fontSize: '10px', fill: 'gainsboro' }}
            tickCount={7}
            type='number'
            
        
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='uv'
            stroke='#f1e7917f'
            fill='#0d00ff22'
          />
          <Area
            type='monotone'
            dataKey='pv'
            stroke='#c0293675'
            fill='#0d00ff14'
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
