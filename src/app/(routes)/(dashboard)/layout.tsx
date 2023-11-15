import DrawerNav from '@/components/shared/Drawer-nav';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <DrawerNav />
      <div className="h-screen max-h-screen">{children}</div>
    </div>
  );
}
