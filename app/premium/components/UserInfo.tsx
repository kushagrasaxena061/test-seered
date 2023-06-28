'use client'

import React  from 'react'
import { SafeUser } from '@/app/types'
import Avatar from "./Avatar"
import {useRouter} from "next/navigation"



interface UserInfoprops {
  currentUser?: SafeUser | null
}


const UserInfo: React.FC<UserInfoprops> = ({
  currentUser
}) => {
  const router = useRouter()
 
  return (
    <div>
      <div className="bg-indigo-500 pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   

    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">

      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Seered Premium</h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#" className="inline-block rounded-lg bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-neutral-800 focus-visible:ring active:bg-indigo-700 md:text-base">Get Started</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-red-600 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Know More</a>
        </div>
      </div>
    </section>
  </div>
</div>





<div className="bg-neutral-800 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">The Power Of Premium</h2>

     
    </div>

    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2">

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 text-white active:text-indigo-600">New Add-Free Music Listening</a>
          </h2>

          <div>
            <div className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Enjoy uninterrupted music.</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2">

          <h2 className="text-xl font-bold text-gray-800">
            <a href="#" className="transition duration-100 text-white">Offline Playback</a>
          </h2>

       

          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Save your data by listening Offline.</a>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2">

          <h2 className="text-xl font-bold ">
            <a href="#" className="transition duration-100 text-white">Play Everywhere</a>
          </h2>


          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Listen on your speakers, TV, and other favorite devices.</a>
          </div>
        </div>
      </div>
   
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div className="flex flex-col gap-2">

          <h2 className="text-xl font-bold">
            <a href="#" className="transition duration-100 text-white">Pay your way

</a>
          </h2>

      

          <div>
            <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Prepay with Paytm, UPI, and more.

</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

















<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Our plans for you</h2>

    <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
      <div className="flex flex-col rounded-lg border p-4 pt-6">
        <div className="mb-12">
          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Free</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">For individuals and organizations who want to try our system</p>

          <div className="space-y-2">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">1.000 MB file storage</span>
            </div>
       
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">2.000 MB bandwidth per month</span>
            </div>
         
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">200 tasks per month</span>
            </div>
          
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Comunity support</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600">$</span>
            <span className="text-4xl font-bold text-gray-800">0</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <a href="#" className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Join for free</a>
        </div>
      </div>
  
      <div className="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
        <div className="mb-12">
          <div className="absolute inset-x-0 -top-3 flex justify-center">
            <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
          </div>

          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for Individuals and organizations</p>

          <div className="space-y-2">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Unlimited file storage</span>
            </div>
           
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">10 GB bandwidth per month</span>
            </div>
      
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">10.000 tasks per month</span>
            </div>
         
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Email support</span>
            </div>
         
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">100 Webhooks</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600">$</span>
            <span className="text-4xl font-bold text-gray-800">19</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <a href="#" className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Continue with Team</a>
        </div>
      </div>
     
      <div className="flex flex-col rounded-lg border p-4 pt-6">
        <div className="mb-12">
          <div className="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>

          <p className="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for organisations</p>

          <div className="space-y-2">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Unlimited file storage</span>
            </div>
        
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Unlimited bandwidth per month</span>
            </div>
         
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">1.000.000 tasks per month</span>
            </div>
          
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Email and phone support</span>
            </div>
           
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>

              <span className="text-gray-600">Unlimited Webhooks</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-8">
          <div className="flex items-end justify-center gap-1">
            <span className="self-start text-gray-600">$</span>
            <span className="text-4xl font-bold text-gray-800">49</span>
            <span className="text-gray-500">per user/month</span>
          </div>

          <a href="#" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Contact Sales</a>
        </div>
      </div>
    </div>

    <div className="text-center text-sm text-gray-500 sm:text-base">Need help deciding? <a href="#" className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Get in touch</a>.</div>
  </div>
</div>





</div>




















    
  )
}

export default UserInfo
