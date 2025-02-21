import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/lib/content';

function Footer() {
  return (
    <footer className='w-full h-fit bg-zinc-950'>
      <div className='w-full h-28 max-w-screen-xl px-5 flex flex-col justify-between py-8'>
        <div className='flex gap-2 items-center'>
          <Image src={'/images/portfolio-icon-white.png'} width={20} height={20} alt='Portfolio Icon' />
          <p>{'_tomasndlate.socials ⇒ ('}</p>
          <Link href={profile.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </Link>
            <Link href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </Link>
          <p>{')'}</p>
        </div>
        <p className='text-xs text-zinc-400'>© 2025, Tomas Ndlate</p>
      </div>
    </footer>
  )
}

export default Footer