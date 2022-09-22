import React from 'react';
import { ArrowUp, ArrowDown } from 'phosphor-react';

import { Checkbox } from '../checkbox';

export const List: React.FC = () => {
  return (
    <>
      <table className="w-full">
        <thead className="block">
          <th className="w-16 pb-10"></th>
          <th className="w-56 text-left opacity-50 pb-4">SKU</th>
          <th className="w-56 text-left opacity-50 pb-4">NOME</th>
          <th className="w-64 text-center opacity-50 pb-4">QUANTIDADE</th>
          <th></th>
        </thead>

        <tbody className="h-60 block overflow-y-auto">
          <tr>
            <td className="pb-3 w-16"><Checkbox /></td>
            <td className="w-56 text-left pb-3">BR080AK29DE</td>
            <td className="w-56 text-left pb-3">Geladeira Brastemp</td>
            <td className="w-64 text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowDown color="red" size={20}/>
            </td>
          </tr>
          
          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowDown color="red" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>

          <tr>
            <td className="pb-3"><Checkbox /></td>
            <td className="text-left pb-3">BR080AK29DE</td>
            <td className="text-left pb-3">Geladeira Brastemp</td>
            <td className="text-center pb-3">232</td>
            <td className="pb-3">
              <ArrowUp color="green" size={20}/>
            </td>
          </tr>
          
        </tbody>
      </table>
    </>
  );
}