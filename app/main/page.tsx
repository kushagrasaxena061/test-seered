import React from 'react'
import ClientOnly from '@/app/components/ClientOnly'
import Container from '@/app/components/Container'
import EmptyState from '@/app/components/EmptyState'
import getListings, { IListingsParams } from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard"
import getCurrentUser from '@/app/actions/getCurrentUser';
import Header from '@/app/main/components/Header'
import ListItem from '@/app/main/components/ListItem'
import Link from 'next/link';



interface HomeProps {
  searchParams: IListingsParams
};



const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()


  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }


  return (
    <div>
      <ClientOnly>
        <div
          className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto">
          <Header>
            <div className="mb-2">
              <h1
                className="
            text-white 
              text-3xl 
              font-semibold">
                Welcome back
              </h1>
              <div
                className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4">
                <Link href="/favorites" >
                <ListItem
                  name="Liked Songs"
                  image="/images/liked.png"
                  href="liked"
                />
                                </Link>

              </div>
            </div>
            
          </Header>
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

export default Home
