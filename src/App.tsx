import React from 'react';

import './styles/main.css';

import Header from './components/header';

import { Bar } from './components/bar';
import { List } from './components/list';
import { Doughnut } from './components/doughnut';
import { Line } from './components/line';

const src: React.FC = () => {
  return (
    <>
      <Header />

      <main className="pl-8 pr-8">
        <div className="mb-9 bg-white rounded-md">
          <Bar />
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-1/2 shadow-lg rounded-md p-8 h-[29rem]">
            <h1 className="font-semibold text-xl mb-7">
              Produtos mais comprados na Cidade
            </h1>
            <List />
            <div className="w-full flex justify-end">  
              <button className="mt-8 bg-whirlpool transition-color duration-200 hover:opacity-80 text-white pt-2 pb-2 pl-4 pr-4 rounded-md">
                Adicionar
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[29rem] shadow-lg">
            <div className="h-full [&>iframe]:!h-full" id="CHART" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1/4 mt-10 bg-white shadow-lg rounded-md p-8 h-[29rem]">
            <Doughnut />
          </div>
          <div className="w-full mt-10 bg-white shadow-lg rounded-md p-8">
            <Line />
          </div>
        </div>
      </main>
    </>
  )
}

export default src;