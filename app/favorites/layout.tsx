import Sidebar from "@/app/main/components/Sidebar";


export default async function FavoritesLayout({
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
