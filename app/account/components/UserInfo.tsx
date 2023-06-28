'use client'

import React from 'react'
import { SafeUser } from '@/app/types'
import Avatar from "./Avatar"
import { useRouter } from "next/navigation"



interface UserInfoprops {
  currentUser?: SafeUser | null
}


const UserInfo: React.FC<UserInfoprops> = ({
  currentUser
}) => {
  const router = useRouter()

  return (
    <div>
      <section className="body-font text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">Account Overview</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-red-600">{currentUser?.name}</h1>
          </div>
        </div>
      </section>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left  ">
        <tbody>
            <tr className="bg-neutral-900 border-b border-neutral-800">
                <th scope="row" className="px-6 py-8 font-bold text-2xl text-white whitespace-nowrap ">
                    Name
                </th>
               
                <td className="px-6 py-4">
                    <div className="uppercase text-red-600 font-bold text-2xl hover:underline">{currentUser?.name}</div>
                </td>
            </tr>
            <tr className="bg-neutral-900 border-b border-neutral-800">
                <th scope="row" className="px-6 py-8 font-bold text-2xl text-white whitespace-nowrap ">
                    Username
                </th>
               
                <td className="px-6 py-4">
                    <div className="uppercase text-red-600 font-extrabold text-2xl hover:underline">{currentUser?.id}</div>
                </td>
            </tr>
            <tr className="bg-neutral-900 border-b border-neutral-800">
                <th scope="row" className="px-6 py-8 font-bold text-2xl text-white whitespace-nowrap ">
                    Email
                </th>
               
                <td className="px-6 py-4">
                    <div className="uppercase text-red-600 font-bold text-2xl hover:underline">{currentUser?.email}</div>
                </td>
            </tr>
            <tr className="bg-neutral-900 border-b border-neutral-800">
                <th scope="row" className="px-6 py-8 font-bold text-2xl text-white whitespace-nowrap ">
                    Country
                </th>
               
                <td className="px-6 py-4">
                    <div className="uppercase text-red-600 font-bold text-2xl hover:underline">India</div>
                </td>
            </tr>
            <tr className="bg-neutral-900 border-b border-neutral-800">
                <th scope="row" className="px-6 py-8 font-bold text-2xl text-white whitespace-nowrap ">
                    Registered on
                </th>
               
                <td className="px-6 py-4">
                    <div className="uppercase text-red-600 font-bold text-2xl hover:underline">{currentUser?.createdAt}</div>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>






<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="  mx-auto text-center">
      <p className="bg-gradient-to-r from-red-600 mb-32 p-6 rounded-lg text-3xl md:w-fit sm:w-full  text-white font-bold"> Edit Profile</p>
      <div className="bg-zinc-800 rounded-lg w-full">
      <p className="leading-relaxed  text-bold text-2xl text-white mt-8 ">Your Plan</p>
      <p className="leading-relaxed  text-bold text-xl text-gray-300 mt-3">Play any song, any time, with ads.
</p>
      <p className="leading-relaxed mt-12 text-4xl text-red-600 font-extrabold">Free</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-400 mt-8 mb-6"></span>
      </div>
      <button onClick={() => router.push('/premium')} className="text-white mt-20 text-bold text-2xl p-5 bg-gradient-to-t from-indigo-400 uppercase">Join Premium</button>
    </div>
  </div>
</section>




      
    </div>
  )
}

export default UserInfo
