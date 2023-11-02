'use client';
import { drawerNavLinks } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../Mode-Toggle';
import { usePathname } from 'next/navigation';
import { createElement, useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

const DrawerNav = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    // Function to check the screen width and set the drawer state
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDrawerOpen(false);
      } else {
        setDrawerOpen(true);
      }
    };
    console.log('useEffect triggered');
    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    // <nav className={`border-r sticky left-0 top-0 z-10 py-10 h-screen w-fit px-2 flex flex-col gap-lg justify-around items-center ${isDrawerOpen ? 'w-fit' : 'w-fit'}`}>
    //   <Link href={'/'}>
    //     <div className="max-md:hidden">LongLogo</div>
    //     <div className="hidden max-md:block">L</div>
    //   </Link>
    //   <ul className="w-full h-2/3 flex flex-col gap-sm ">
    //     {drawerNavLinks.map(link => {
    //       const isActive = (
    //         pathname.includes(link.route) && link.route.length > 1
    //       ) || pathname === link.route;
    //       return (
    //         <li key={link.label} className={`
    //         ${(isActive && 'bg-primary') || 'hover:bg-accent'} rounded-lg p-2`}>
    //           <Link
    //             href={link.route}
    //             className="flex gap-sm justify-center items-center "
    //           >

    //             {createElement(link.img)}

    //             <p className="w-full max-md:hidden">{link.label}</p>
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <div className="flex max-md:flex-col gap-sm justify-center items-center md:gap-md md:flex-row">
    //     <ModeToggle />

    //     <Menu onClick={toggleDrawer} />

    //   </div>
    // </nav>

    <>
      <NavigationMenu
        orientation="vertical"
        className="fixed top-0 left-0 h-full border-r flex flex-col "
      >
        <Link href={'/'} className="bg-slate-500 border w-full h-fit flex-none">
          <div className="max-md:hidden">LongLogo</div>
          <div className="hidden max-md:block">L</div>
        </Link>
        <NavigationMenuList className=" flex-1 border h-full">
          {drawerNavLinks.map(link => {
            return (
              // eslint-disable-next-line react/jsx-key
              <NavigationMenuItem className="w-full" key={link.label}>
                <Link href={link.route} legacyBehavior passHref className="">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    key={link.route}
                  >
                    {createElement(link.img)}
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
        <div className="flex-none bg-green-500 w-full flex max-md:flex-col gap-sm justify-center items-center md:gap-md md:flex-row h-fit">
          <ModeToggle />

          <Menu onClick={toggleDrawer} />
        </div>
      </NavigationMenu>
      {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

      {/* 
      <NavigationDenu.Root orientation="vertical">
        <NavigationDenu.List>
          <NavigationDenu.Item>
            <NavigationDenu.Trigger>Item one</NavigationDenu.Trigger>
            <NavigationDenu.Content>Item one content</NavigationDenu.Content>
          </NavigationDenu.Item>
          <NavigationDenu.Item>
            <NavigationDenu.Trigger>Item two</NavigationDenu.Trigger>
            <NavigationDenu.Content>Item Two content</NavigationDenu.Content>
          </NavigationDenu.Item>
        </NavigationDenu.List>
      </NavigationDenu.Root> */}
    </>
  );
};

export default DrawerNav;
