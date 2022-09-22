import React from 'react';
import { Check } from 'phosphor-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

interface CheckboxProps {
  name?: string
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  return (
    <>
      <div className="flex items-center">
        <CheckboxPrimitive.Root name={name} className="w-5 h-5 flex items-center justify-center rounded-sm text-white border-2">
          <CheckboxPrimitive.Indicator className="bg-white w-full">
            <Check color="#232323" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </div>
    </>
  )
}

