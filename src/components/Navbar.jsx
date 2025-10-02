import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar(){
  return(
    <form className='flex md:w-fit w-full'>
      <div className='bg-gray-100 overflow-hidden rounded-full w-full flex'>
        <input placeholder='Search...' className='outline-none px-5 h-12' type="text" name="q" id="search" />
        <button className='hidden' type='submit'>Search</button>
      </div>
    </form>
  )
}

function Navbar() {
  return (
    <nav className='bg-white p-5 md:py-0 md:px-10 flex gap-5 md:flex-row flex-col justify-between md:h-24 md:items-center shadow md:sticky top-0 left-0'>
      <div className='flex items-center gap-3 md:flex-row flex-col'>
        <Link to="/" className='font-bold text-3xl'>Medium</Link>
        <SearchBar />
      </div>
      <ul className='flex gap-3 md:flex-row md:items-center flex-col'>
        <li>Write</li>
        <li>
          <Link className='bg-green-800 w-full md:w-fit inline-block rounded-full px-5 py-2 text-white' to="/">Sign up</Link>
        </li>
        <li>Sign In</li>
      </ul>
    </nav>
  )
}

export default Navbar