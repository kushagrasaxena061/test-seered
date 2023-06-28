'use client'

import React , {useCallback} from 'react'
import getCurrentUser from '@/app/actions/getCurrentUser'
import Avatar from '@/app/components/Avatar'
import Link from 'next/link'
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from '@/app/types';
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import {useRouter} from "next/navigation"

interface HeaderProps {
    currentUser?: SafeUser | null;
}


const Header: React.FC<HeaderProps> = ({
    currentUser,
  }) => {
    const router = useRouter()

    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const onRent = useCallback(() => {
        if (!currentUser) {
          return loginModal.onOpen();
        }
    
        rentModal.onOpen();
      }, [loginModal, rentModal, currentUser]);

     
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/main" className="flex title-font font-medium items-center mb-4 md:mb-0">
                        <Avatar  src={currentUser?.image}/>
                        <span className="ml-3 text-xl text-white font-bold hidden md:inline">{currentUser?.name}</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex text-red-600 flex-wrap items-center text-base justify-center">
                        <Link href="/musicforartist/home" className="mr-5 hover:text-white">Home</Link>
                        <Link href="/musicforartist/music" className="mr-5 hover:text-white">Music</Link>
                        <Link href="/musicforartist/audience" className="mr-5 hover:text-white">Audience</Link>
                        <Link href="/musicforartist/profile" className="mr-5 hover:text-white">Profile</Link>
                    </nav>
                    <button className=" md:inline-flex hidden items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 bg-gradient-to-r from-indigo-400 to-red-500 hover:from-orange-500 hover:to-indigo-500 rounded text-base mt-4 font-bold text-white md:mt-0" onClick={onRent}>Upload Your Music
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
