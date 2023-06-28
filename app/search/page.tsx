import SearchInput from "./components/SearchInput";
import Header from "../main/components/Header";
import Categories from "@/app/components/navbar/Categories";
import React from 'react'
import Container from '@/app/components/Container'
import EmptyState from '@/app/components/EmptyState'
import getListings, { IListingsParams } from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard"
import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from '@/app/components/ClientOnly'



export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string }
};

interface SearchProps2 {
  searchParams: IListingsParams
};

const Search = async ({ searchParams }: SearchProps2) => {
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
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-bold">
            Search
          </h1>
          <SearchInput />
          <h2 className="text-white text-2xl font-semibold">From the huge collection of Music...</h2>
        </div>
      </Header>
      <Categories />
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
    </div>
  );
}

export default Search;
