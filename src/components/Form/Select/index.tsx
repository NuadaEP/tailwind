'use client';
import * as RSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from 'react';

interface SelectProps extends RSelect.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <RSelect.Root {...props}>
      <RSelect.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100">
        <RSelect.Value placeholder={placeholder} className="text-black" />
        <RSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RSelect.Icon>
      </RSelect.Trigger>

      <RSelect.Portal>
        <RSelect.Content
          side="bottom"
          position="popper"
          className="z-10 border border-zinc-200 bg-white w-[--radix-select-trigger-width] animate-slideDownAndFade"
          sideOffset={8}
        >
          <RSelect.Viewport className="outline-none">
            {children}
          </RSelect.Viewport>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
}
