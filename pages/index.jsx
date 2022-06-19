import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'


const Home = () => {
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) {
      return
    }
    Router.push('/search?term=' + term)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Gebeya Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-small text-gray-600'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className=' link'>About</p>
          <p className='link'>Register</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Login</p>
          <p className='link'>Sign Up</p>


          {/* TODO:Implememnt Bookmarks */}
          {/* icon*/}
          <svg className='h-8 w-8 p-1 rounded-full hover:bg-gray-200 cursor-pointer' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
      </header>

      {/* Body */}

      <form action="" className='flex mt-32 mx-3 flex-col items-center flex-grow'>
        <Image src={logo}
          height={200}
          width={600} className="" />

        <div className='flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-3 w-6 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="search" placeholder="Search for products" className="flex-grow focus:outline-none" ref={searchInputRef} />
        </div>
        <div className=''>
          <button className='btn cursor-pointer mt-5 px-10 font-sans' onClick={search}>Gebeya Search</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
