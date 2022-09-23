import React from 'react';

import { Doughnut as DoughnutGraphic } from 'react-chartjs-2';

import output from '../../mock/output.json';

export const Doughnut: React.FC = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-12">
          Sumarização de venda nos próximos meses
      </h1>
      <DoughnutGraphic 
        data={{
          labels: [
            'MATERIAL 1',
            'MATERIAL 2',
            'MATERIAL 3',
            'MATERIAL 4'
          ],
          datasets: [
            {
              label: 'My First Dataset',
              data: [
                output.TOTAL_MATNR1.total_prediction,
                output.TOTAL_MATNR2.total_prediction,
                output.TOTAL_MATNR3.total_prediction,
                output.TOTAL_MATNR4.total_prediction,
              ],
              backgroundColor: [
                '#00a0dd',
                '#eeb111',
                '#DC2626',
                '#2d572c',
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