import DrawerNav from '@/components/shared/Drawer-nav';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <DrawerNav />
      <Button className="float-right">Add Category</Button>
    </>
  );
}
