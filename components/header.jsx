import Logo from '../public/images/logo.png'
import Image from 'next/image'
import Router from 'next/router'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import HeaderOptions from './HeaderOptions'

export default function Header() {
    const router = useRouter()

    const searchInputRef = useRef(null)
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) {
            return
        }
        router.push('/search?term=' + term)
    }
    return (
        <div className=''>
            <header className='sticky top-0  flex w-full flex-col p-4 items-center'>
                <Image src={Logo} height={60} width={180} className=" w-10 p-6 cursor-pointer" onClick={() => Router.push("/")} />
                <form className='flex pr-4 pl-4 py-1.5 border border-gray-300 rounded-full shadow-sm focus-within:shadow-lg max-w-3xl items-center flex-grow' onSubmit={search}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-3 w-6 opacity-60  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="search" placeholder="Search" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
                </form>

                {/* options */}
            </header >
            <HeaderOptions />
        </div>

    )
}