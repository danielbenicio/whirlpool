import React from 'react';

import { Doughnut as DoughnutGraphic } from 'react-chartjs-2';

export const Doughnut: React.FC = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-12">
          Compras dos Cliente
      </h1>
      <DoughnutGraphic 
        data={{
          labels: [
            '2020',
            '2021',
            '2022'
          ],
          datasets: [
            {
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                '#00a0dd',
                '#eeb111',
                '#DC2626'
              ],
              hoverOffset: 4
            }
          ]
        }}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
            }
          }
        }}
      />
    </div>
  );
}