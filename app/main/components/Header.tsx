"use client";


import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import {signOut ,useSession} from "next-auth/react"
import Button from "./Button"
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Link from 'next/link'



interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const {data:session,status} = useSession()

    const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
    }, []);

    const logout = () => {
      if (status === "authenticated") {
        signOut()
        router.push('/')
        router.refresh()
      }
      else{
        router.push('/')
        router.refresh()
      }
    }

   
  return (
    <div>
        <div
      className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-emerald-800 
        p-6
        `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button 
            onClick={() => router.back()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button 
            onClick={() => router.forward()} 
            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button 
            onClick={() => router.push('/main')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition">
            <HiHome className="text-black" size={20} />
          </button>
          <button 
            onClick={() => router.push('/search')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
            <div className="flex gap-x-4 items-center">
             <Link href="/">
              <Button 
                onClick={() => logout()} 
                className="bg-white px-6 py-2">
                Logout
              </Button>
              </Link>
              <Button 
                onClick={() => toggleOpen()}
              
                className="bg-white"
              >
                <FaUserAlt /> 
              </Button>
            </div>
            
            
              {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            
            w-fit
            md:w-1/6
            mt-8
            mr-3
            text-white
            bg-neutral-900 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
          
                <MenuItem 
                  label="Account" 
                  onClick={() => router.push(`/account`)}
                />
                <MenuItem 
                  label="Profile" 
                  onClick={() => router.push(`/profile/`)}
                />
                <MenuItem 
                  label="Premium" 
                  onClick={() => router.push('/premium')}
                />
                <MenuItem 
                  label="Settings" 
                  onClick={() => router.push('/settings')}
                />
                <MenuItem 
                  label="Music For Artist" 
                  onClick={() => router.push(`/musicforartist`)}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
          </div>
        </div>
      )}
              





        </div>
      </div>
      {children}
    </div>
    </div>
  );
}

export default Header;
