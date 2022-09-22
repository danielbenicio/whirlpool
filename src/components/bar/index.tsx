import React from 'react';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 

import { Bar as BarGraphic } from 'react-chartjs-2';

import output from '../../mock/output.json';

Chart.register(CategoryScale);

export const Bar: React.FC = () => {
  return (
    <div className="shadow-lg rounded-md p-8">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-12">
          Histórico de compras do Cliente
        </h1>
        <span className="text-sm">
          Tendência de compra nos próximos 6 meses
        </span>
      </div>
      <div>  
        <BarGraphic 
          data={{
            labels: output.TOTAL_CLIENT.keys,
            datasets: [
              {
                label: 'vendas',
                data: output.TOTAL_CLIENT.values,
                backgroundColor: [
                  '#00a0dd', '#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd',
                  '#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd',
                  '#00a0dd', '#00a0dd','#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd',
                  '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd',
                  '#00a0dd', '#00a0dd', '#00a0dd', '#eeb111', '#eeb111', '#eeb111', 
                  '#eeb111', '#eeb111', '#eeb111',
                ],
                borderRadius: 5,
              }
            ]
          }}
          height={200}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false
                }
              }
            },
            plugins: {
              legend: {
                display: false,
              }
            }
          }}
        />
      </div>
    </div>
  );
}