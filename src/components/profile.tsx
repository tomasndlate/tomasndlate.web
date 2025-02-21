import React from 'react'
import { profile } from '@/lib/content'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Profile() {
  return (
    <div className='w-full h-fit flex flex-col gap-4'>
        <h1 className='text-5xl font-semibold'>{profile.name}</h1>
        <div className='w-full h-fit p-4 gap-1 flex flex-col bg-white/5 backdrop-blur-[40px] rounded-md'>
            <h3 className='text-xl font-semibold'>{profile.role}</h3>
            <p>{profile.description}</p>
        </div>
        <div className='flex gap-3 items-center text-lg'>
            <Link href={profile.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </Link>
            <Link href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </Link>
        </div>
    </div>
  )
}

export default Profile