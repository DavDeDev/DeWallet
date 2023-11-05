import {
  ArrowLeftRight,
  LayoutDashboard,
  LucideIcon,
  Wallet
} from 'lucide-react';

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
    img: ArrowLeftRight,
    route: '/transactions',
    label: 'Transactions'
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
