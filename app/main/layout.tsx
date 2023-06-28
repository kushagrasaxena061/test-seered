import Sidebar from "@/app/main/components/Sidebar";


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
