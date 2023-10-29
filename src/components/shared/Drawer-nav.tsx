import { drawerNavLinks } from '@/constants';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from '../Mode-Toggle';

const DrawerNav = () => {
  return (
    <nav className="sticky left-0 top-0 z-10 py-10 h-screen w-fit bg-secondary px-4 flex flex-col gap-lg justify-around items-center">
      <div className="max-md:hidden">LongLogo</div>
      <div className="hidden max-md:block">L</div>
      <ul className="h-2/3 flex flex-col gap-md">
        {drawerNavLinks.map(link => {
          const Icon = link.img;
          return (
            <li key={link.label}>
              <Link
                href={link.route}
                className="flex gap-sm justify-center items-center"
              >
                {' '}
                <Icon />
                <p className="w-full max-md:hidden">{link.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-col gap-sm justify-center items-center">
        <ModeToggle />
        <div className=" flex flex-row gap-sm">
          <Menu />
          <p className="max-md:hidden">Others</p>
        </div>
      </div>
    </nav>
  );
};

export default DrawerNav;
