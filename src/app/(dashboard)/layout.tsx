import SideBar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className={"h-full"}>
      <SideBar />
      <div className={"pl-[60px] h-full"}>{children}</div>
    </main>
  );
};

export default DashBoardLayout;
