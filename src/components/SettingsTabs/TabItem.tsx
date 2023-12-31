'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export const TabItem = ({ title, value, isSelected = false }: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-mediu text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none group"
    >
      <span className="whitespace-nowrap group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 rounded">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  );
};
