'use client';
import * as RSelect from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

export function Select() {
  return (
    <RSelect.Root>
      <RSelect.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400">
        <RSelect.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <RSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RSelect.Icon>
      </RSelect.Trigger>

      <RSelect.Portal>
        <RSelect.Content
          side="bottom"
          position="popper"
          className="z-10 border border-zinc-200 bg-white w-[--radix-select-trigger-width]"
          sideOffset={8}
        >
          <RSelect.Viewport>
            <RSelect.Item
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg outline-none data-[highlighted]:bg-zinc-50 justify-between overflow-hidden"
              value="brasil"
            >
              <RSelect.ItemText className="text-black">Brasil</RSelect.ItemText>
              <RSelect.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </RSelect.ItemIndicator>
            </RSelect.Item>
          </RSelect.Viewport>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
}
