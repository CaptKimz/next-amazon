import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <Link href='/' className='btn btn-ghost text-lg'>
            Next Amazon Clone
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header