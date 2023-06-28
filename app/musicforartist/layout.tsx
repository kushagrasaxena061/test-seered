import Header from "./components/Header"
import getCurrentUser from '@/app/actions/getCurrentUser'


export default async function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
        <>
          <Header currentUser={currentUser}/>
          {children}
        </>
  );
}
