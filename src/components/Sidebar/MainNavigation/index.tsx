import React from 'react';
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react';
import { NavItem } from './NavItem';

const items = [
  {
    title: 'Home',
    icon: Home,
  },
  {
    title: 'Dashboard',
    icon: BarChart,
  },
  {
    title: 'Projects',
    icon: SquareStack,
  },
  {
    title: 'Tasks',
    icon: CheckSquare,
  },
  {
    title: 'Reporting',
    icon: Flag,
  },
  {
    title: 'Users',
    icon: Users,
  },
];

export const MainNavigation: React.FC = () => {
  return (
    <nav className="space-y-0 5">
      {items.map((item, index) => (
        <NavItem icon={item.icon} title={item.title} key={index} />
      ))}
    </nav>
  );
};
