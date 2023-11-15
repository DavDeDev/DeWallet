'use client';
import { drawerNavLinks } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../Mode-Toggle';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

const DrawerNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen p-5">
      <aside className="h-full w-fit top-0 left-0 border rounded-lg flex flex-col overflow-hidden">
        <Link href={'/'} className="bg-slate-500 w-full h-fit flex-none">
          <div className="max-md:hidden">LongLogo</div>
          <div className="hidden max-md:block">L</div>
        </Link>
        <NavigationMenu orientation="vertical">
          <NavigationMenuList className="w-full">
            {drawerNavLinks.map(link => {
              const isActive: boolean =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;
              return (
                <NavigationMenuItem className="w-full" key={link.label}>
                  <Link
                    className={`w-full`}
                    href={link.route}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={` ${
                        isActive && 'bg-secondary text-primary'
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      {React.createElement(link.img)}
                      <p className="hidden md:block">{link.label}</p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex-none bg-green-500 w-full flex flex-col gap-sm justify-center items-center md:gap-md md:flex-row h-fit">
          <ModeToggle />

          <Menu className="cursor-pointer" />
        </div>
      </aside>
    </div>
  );
};

export default DrawerNav;
