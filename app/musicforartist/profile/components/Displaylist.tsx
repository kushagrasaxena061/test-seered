
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import ListofMusic from "./ListofMusic";



const Displaylist = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Songs found"
          subtitle="Looks like you haven't uploaded any music."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListofMusic
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default Displaylist;
