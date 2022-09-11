import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className="bg-gray-100">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center text-gray-600 body-font">
                        <nav className=" md:border-gray-400	 md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center text-gray-600 body-font">
                            <Link href={"/Todo"}><a className="flex md:mr-auto md:py-3 md:pr-4 md:border-r md:border-gray-400 title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-0 md:mb-0">
                                <div className="w-20 h-16 rounded-full inline-flex items-center justify-center my-1">
                                    <Image priority="true" width={"120px"} height={"80px"} layout='fixed' src="/LN2.png" alt='Logo' className="rounded-full inline-flex items-center justify-center" />
                                </div></a>
                            </Link>
                            <Link href={'/NoteGoogle'}><a className="mx-5 hover:text-gray-900">Google Note</a></Link>
                            <Link href={'/Todo'}><a className="mr-5 hover:text-gray-900">Todo List</a></Link>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar