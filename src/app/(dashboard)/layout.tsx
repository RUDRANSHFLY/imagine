import NavBar from "./_components/navbar";
import OrgSidebar from "./_components/org-sidebar";
import SideBar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className={"h-full"}>
      <SideBar />

      <div className={"pl-[60px] h-full"}>
        <div className={"flex gap-x-3 h-full"}>
          <OrgSidebar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardLayout;
