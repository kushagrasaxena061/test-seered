import Sidebar from "@/app/main/components/Sidebar";


export default async function AccountLayout({
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
