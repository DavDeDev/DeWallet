import { Layers3, LayoutDashboard, LucideIcon, Wallet } from 'lucide-react';

interface IDrawerNavLink {
  img: LucideIcon;
  route: string;
  label: string;
}

export const drawerNavLinks: IDrawerNavLink[] = [
  {
    img: LayoutDashboard,
    route: '/',
    label: 'Dashboard'
  },
  {
    img: LayoutDashboard,
    route: '/investments',
    label: 'Investments'
  },
  {
    img: Wallet,
    route: '/accounts',
    label: 'Accounts'
  },
  {
    img: Layers3,
    route: '/categories',
    label: 'Categories'
  },
  {
    img: Layers3,
    route: '/transactions',
    label: 'Transactions'
  }
];
