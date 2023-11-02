import { LayoutDashboard, LucideIcon, Wallet } from 'lucide-react';

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
    route: '/',
    label: 'Dashboard'
  },
  {
    img: Wallet,
    route: '/accounts',
    label: 'Accounts'
  },
  {
    img: LayoutDashboard,
    route: '/',
    label: 'Dashboard'
  },
  {
    img: LayoutDashboard,
    route: '/',
    label: 'Dashboard'
  },
  {
    img: Wallet,
    route: '/accounts',
    label: 'Accounts'
  }
];
