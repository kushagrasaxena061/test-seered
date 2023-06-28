
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";
import React from 'react'
import Container from '@/app/components/Container'
import ListingCard from "@/app/components/listings/ListingCard"



const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <div>
      <ClientOnly>
        <div>
          <div className="bg-gradient-to-b from-zinc-800 to-neutral-900 py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">


              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
                <div className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg  shadow-lg bg-neutral-900 md:h-80"><div><p className="text-lg text-gray-300">Playlist</p><br /><p className="text-3xl font-bold text-red-600">Liked Music</p><br /><p className="text-xl font-semibold text-white">Made For - {currentUser?.name}</p></div>




                </div>

                <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                  <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Liked image not avaliable" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />



                </div>


              </div>
            </div>
          </div>
        </div>
        <div
          className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto">

          <div className="mt-2 mb-7 px-6">
            <div className=" justify-between items-center">
              <h1 className="text-white text-2xl font-semibold">
                Newest songs
              </h1>
              <Container>
                <div
                  className=" pt-24 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                  {listings.map((listing: any) => {
                    return (
                      <div>
                        <ListingCard
                          currentUser={currentUser}
                          key={listing.id}
                          data={listing}
                        />
                      </div>
                    )
                  })}
                </div>
              </Container>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  )
}

export default ListingPage;
