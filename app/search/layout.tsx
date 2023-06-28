import Sidebar from "../main/components/Sidebar";

export default async function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
        <Sidebar>
          {children}
        </Sidebar>
  );
}
