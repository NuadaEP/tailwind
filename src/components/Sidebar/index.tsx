'use client';
import React from 'react';
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react';
import * as Collapsible from '@radix-ui/react-collapsible';

import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import * as Input from '../Input';
import { Button } from '../Button';

const Sidebar = () => (
  <Collapsible.Root className="data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 flex flex-col gap-6 border-b border-zinc-200 p-4 fixed left-0 top-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative">
    <Collapsible.Content
      forceMount
      className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0 5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
);

export default Sidebar;
