'use client'

import Hero from "./components/Hero/Hero";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Categories from '@/app/components/navbar/Categories'


const Home = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === 'authenticated'){
    router.push('/main')
   
  }
  if (status==="loading"){
    return (
      <div className="text-3xl font-bold text-white">Loading...</div>
    )
  }
  if (status==="unauthenticated"){
    router.push('/')
    return(
      <Hero/>
    )
  }

}

export default Home;
