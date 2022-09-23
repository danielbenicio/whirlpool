import React from 'react';

import { Line as LineGraphic} from 'react-chartjs-2';

import output from '../../mock/output.json';

export const Line: React.FC = () => {
  return (
    <>
      <h1 className="font-semibold text-xl mb-7">
        Histórico de compras por Material
      </h1>
      <LineGraphic 
        data={{
          labels: output.TOTAL_CLIENT.keys,
          datasets: [
            {
              label: 'MATERIAL 1',
              data: output.TOTAL_MATNR1.values,
              fill: false,
              borderColor: '#eeb111',
              tension: 0.1,
              backgroundColor: [
                  '#eeb111', '#eeb111','#eeb111','#eeb111','#eeb111','#eeb111','#eeb111',
                  '#eeb111','#eeb111','#eeb111','#eeb111','#eeb111','#eeb111','#eeb111',
                  '#eeb111', '#eeb111','#eeb111', '#eeb111', '#eeb111', '#eeb111', '#eeb111',
                  '#eeb111', '#eeb111', '#eeb111', '#eeb111', '#eeb111', '#eeb111',
                  '#eeb111', '#eeb111', '#eeb111', '#ff1493', '#ff1493', '#ff1493', 
                  '#ff1493', '#ff1493', '#ff1493',
                ],
            },
            {
              label: 'MATERIAL 2',
              data: output.TOTAL_MATNR2.values,
              fill: false,
              borderColor: '#00a0dd',
              tension: 0.1,
              backgroundColor: [
                  '#00a0dd', '#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd',
                  '#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd','#00a0dd',
                  '#00a0dd', '#00a0dd','#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd',
                  '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd', '#00a0dd',
                  '#00a0dd', '#00a0dd', '#00a0dd', '#ff1493', '#ff1493', '#ff1493', 
                  '#ff1493', '#ff1493', '#ff1493',
                ],
            },
            {
            label: 'MATERIAL 3',
            data: output.TOTAL_MATNR3.values,
            fill: false,
            borderColor: '#DC2626',
            tension: 0.1,
            backgroundColor: [
             '#DC2626','#DC2626','#DC2626','#DC2626','#DC2626','#DC2626',
              '#DC2626','#DC2626','#DC2626','#DC2626','#DC2626','#DC2626','#DC2626',
              '#DC2626', '#DC2626','#DC2626', '#DC2626', '#DC2626', '#DC2626', '#DC2626',
              '#DC2626', '#DC2626', '#DC2626', '#DC2626', '#DC2626', '#DC2626',
              '#DC2626', '#DC2626', '#DC2626', '#DC2626', '#ff1493', '#ff1493', '#ff1493', 
              '#ff1493', '#ff1493', '#ff1493',
            ],
          },
          {
            label: 'MATERIAL 4',
            data: output.TOTAL_MATNR4.values,
            fill: false,
            borderColor: '#2d572c',
            tension: 0.1,
            backgroundColor: [
              '#2d572c','#2d572c','#2d572c','#2d572c','#2d572c','#2d572c',
               '#2d572c','#2d572c','#2d572c','#2d572c','#2d572c','#2d572c','#2d572c',
               '#2d572c', '#2d572c','#2d572c', '#2d572c', '#2d572c', '#2d572c', '#2d572c',
               '#2d572c', '#2d572c', '#2d572c', '#2d572c', '#2d572c', '#2d572c',
               '#2d572c', '#2d572c', '#2d572c', '#2d572c', '#ff1493', '#ff1493', '#ff1493', 
               '#ff1493', '#ff1493', '#ff1493',
             ],
          }
          ],
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