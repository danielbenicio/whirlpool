import React from 'react';

import { Line as LineGraphic} from 'react-chartjs-2';

import output from '../../mock/output.json';

export const Line: React.FC = () => {
  return (
    <>
      <h1 className="font-semibold text-xl mb-7">
        Histórico de compras do Cliente
      </h1>
      <LineGraphic 
        data={{
          labels: output.TOTAL_CLIENT.keys,
          datasets: [{
            label: 'Vendas',
            data: output.TOTAL_CLIENT.values,
            fill: false,
            borderColor: '#00a0dd',
            tension: 0.1,
            backgroundColor: '#00a0dd',
          }]
        }}
        height={100}
        width={400}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
            }
          }
        }}
      />
    </>
  );
}