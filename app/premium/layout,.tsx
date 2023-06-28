import Sidebar from "@/app/main/components/Sidebar";


export default async function ProfileLayout({
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
