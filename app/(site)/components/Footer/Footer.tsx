import React from 'react'
import {BsInstagram,BsTwitter,BsFacebook,BsYoutube} from "react-icons/bs"
import Link from "next/link"



const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-black via-zinc-900 to-teal-900">
            <footer className="text-gray-600 body-font border-t">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-200">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-200">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-200">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-200">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-200">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-indigo-600 text-xl font-bold text-center sm:text-left">© 2023 SEERED — All Rights Reserved
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href="/">
                            <div className="text-pink-600">
                                <BsInstagram/>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className="ml-3 text-sky-500">
                                <BsTwitter/>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className="ml-3 text-sky-300">
                                <BsFacebook/>
                            </div>
                            </Link>
                            <Link href="/">
                            <div className="ml-3 text-red-600">
                                <BsYoutube/>
                            </div>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
