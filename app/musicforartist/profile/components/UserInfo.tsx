'use client'

import React, { useCallback } from 'react'
import useRentModal from '@/app/hooks/useRentModal'
import { SafeUser } from '@/app/types'
import Avatar from "./Avatar"


interface UserInfoprops {
  currentUser?: SafeUser | null
}


const UserInfo: React.FC<UserInfoprops> = ({
  currentUser
}) => {
  const rentModal  = useRentModal()

  const onRent = useCallback(() => {
    if (!currentUser) {
      return console.log('no user')
    }
    rentModal.onOpen();
  }, [ rentModal, currentUser]);
  return (
    <div>
      <section className="text-gray-600 body-font text-white">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-red-600">{currentUser?.name}
        <br/>
      </h1>
      <p className="leading-relaxed">Followers - 3</p>
      <p className="mb-12 leading-relaxed">Following - 3</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gradient-to-r from-cyan-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 border-0 py-2 px-6 focus:outline-none font-bold text-white hover:bg-indigo-600 rounded text-lg sm:w-full md:w-fit" onClick={onRent}>Upload Your Art</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Avatar src={currentUser?.image}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default UserInfo
