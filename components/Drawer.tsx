
import { House, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

type DrawerProps = {
    children: React.ReactNode;
}

const Drawer = ({children}: DrawerProps) => {
  return (
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            {/* Navbar */}
            <nav className="navbar w-full border-b-2 border-blue-200 shadow-lg bg-white flex items-center justify-between">
            <div className='flex items-center'>
                
                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                {/* Sidebar toggle icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                </label>
                <div className='flex items-center ml-3'>
                    <Image src={'/conanai-logo.svg'} alt='ConanAI Logo' width={25} height={25} className=''></Image>
                    <p className="px-4 font-semibold text-lg">ConanAI</p>
                </div>
            </div>

            {/* PROFILE */}
            <button className='btn btn-primary'>Login</button>
            </nav>
            {/* Page content here */}
            <div className="p-4">{children}</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="flex min-h-full flex-col items-start border-r-2 border-blue-200 is-drawer-close:w-14 is-drawer-open:w-64 bg-white">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">

                {/* List item */}
                <li>
                <Link href={"/"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                    {/* Home icon */}
                    <House width={16}/>
                    <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
                </li>

                {/* List item */}
                <li>
                <Link href={"/settings"} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                    {/* Settings icon */}
                    <SlidersHorizontal width={16}/>
                    <span className="is-drawer-close:hidden">Settings</span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Drawer