'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeListing, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "./ListingCard";


interface ListofMusicProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const ListofMusic: React.FC<ListofMusicProps> = ({
  listings,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/listings/${id}`)
    .then(() => {
      toast.success('Listing deleted');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  return ( 
    <div>
    <Container>
      <Heading
        title="Music"
        subtitle="List of your Songs"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8 text-white
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deletingId === listing.id}
            actionLabel="Delete This Song"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
    </div>
   );
   
/*
   return(
    <>
       <Heading
        title="Music"
        subtitle="List of your Songs"
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                  <h3 className="text-gray-500 mb-3">Designer</h3>
                  {listings.map((listing: any) => (
                      <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onDelete}
                        disabled={deletingId === listing.id}
                        actionLabel="Delete property"
                        currentUser={currentUser}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
   )
   */
}
 
export default ListofMusic;