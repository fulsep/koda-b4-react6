import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar(){
  return(
    <form className='flex'>
      <div className='bg-gray-100 overflow-hidden rounded-full'>
        <input placeholder='Search...' className='outline-none px-5 h-12' type="text" name="q" id="search" />
        <button className='hidden' type='submit'>Search</button>
      </div>
    </form>
  )
}

function Navbar() {
  return (
    <nav className='bg-white px-10 flex justify-between h-24 items-center shadow sticky top-0 left-0'>
      <div className='flex items-center gap-3'>
        <Link to="/" className='font-bold text-3xl'>Medium</Link>
        <SearchBar />
      </div>
      <ul className='flex gap-3'>
        <li>Write</li>
        <li>
          <Link className='bg-green-800 rounded-full px-5 py-2 text-white' to="/">Sign up</Link>
        </li>
        <li>Sign In</li>
      </ul>
    </nav>
  )
}

export default Navbar