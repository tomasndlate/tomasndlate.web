import React from 'react'
import Image from 'next/image';
// import Link from 'next/link';

function Navbar() {
  return (
    <nav className='max-w-screen-xl px-5 w-full h-20 m-auto flex justify-between items-center'>
        <Image src={'/images/portfolio-icon-white.png'} width={25} height={25} alt='Portfolio Icon' />
        {/* <div className='flex gap-6'> */}
            {/* <Link href='/' className='cursor-pointer'><p>Articles</p></Link> */}
            {/* <Link href='/' className='cursor-pointer'><p>Projects</p></Link> */}
        {/* </div> */}
    </nav>
  )
}

export default Navbar