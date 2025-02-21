import React, { ReactNode } from 'react'
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
// import { IoDocumentTextOutline } from 'react-icons/io5';
import Link from 'next/link';

type ProjectProps = {
    slug: string,
    name: string,
    category: string,
    image: string,
    description: ReactNode,
    technologies: string[]
    link: string,
    github: string
};

function Project({slug, name, category, image, description, technologies, link, github}: ProjectProps) {
  return (
    <div className='w-full grid grid-cols-1 gap-4 items-center
    lg:grid-cols-2
    '>
        <div className='flex flex-col gap-2'>
            <header>
                <p className='text-zinc-400 text-sm'>{category}</p>
                <h4 className='text-lg font-semibold'>{name}</h4>
            </header>
            <Link href={link} target="_blank" rel="noopener noreferrer" className='lg:hidden'>
                <Image src={image} alt={`Project thumbnail for ${name}`} layout="responsive" width={0} height={0} className='rounded-md' />
            </Link>
            <div className='flex flex-col gap-2 p-4 bg-zinc-500 bg-opacity-15 rounded-md'>
                <p>{description}</p>
                {technologies && (
                    <div className='relative'>
                        {technologies.map(tech => ( 
                            <p className='
                            inline-block min-w-11 text-center px-3 py-1 rounded-full
                            bg-emerald-800 bg-opacity-20 text-emerald-400 text-sm
                            last:mr-0 mr-1 mb-1' 
                            key={tech}>{tech}</p> 
                        ))}
                    </div>
                )}
            </div>
            <div className='flex justify-between'>
                {/* <Link href={`/projects/${slug}`} className='flex gap-2 items-center py-2 px-3 bg-emerald-500 bg-opacity-30 rounded-md text-sm'>
                    <IoDocumentTextOutline />
                    <p>Documentation</p>
                </Link> */}
                <div className='flex gap-3 items-center text-xl'>
                    <Link href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Link>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <RxExternalLink />
                    </Link>
                </div>
            </div>
        </div>
        <Link href={link} target="_blank" rel="noopener noreferrer" className='hidden lg:block'>
            <Image src={image} alt={`Project thumbnail for ${name}`} layout="responsive" width={0} height={0} className='rounded-md' />
        </Link>
    </div>
  )
}

export default Project