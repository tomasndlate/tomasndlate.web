import Link from 'next/link';
import React, { ReactNode } from 'react'
import { FaLinkedin } from 'react-icons/fa';

type SectionResumeProps = {
    name: string,
    institution: string,
    summary: ReactNode | undefined,
    startDate: string,
    endDate: string | undefined,
    skills: string[] | undefined,
    linkedIn: string
};

function SectionResume({name, institution, summary, startDate, endDate, skills, linkedIn}: SectionResumeProps) {
  return (
    <div className="w-full h-fit grid gap-4 
    grid-cols-1
    lg:grid-cols-[170px_1fr]
    ">
        <div>
            <p className='text-zinc-400 text-sm'>{startDate} {endDate && `- ${endDate}`}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-1
            flex-col
            lg:flex-row lg:items-center lg:gap-2
            '>
                <h4 className='text-lg font-semibold'>{name}</h4>
                <span className='hidden lg:inline-block'>-</span>
                <h4 className='flex gap-1 items-center text-base lg:text-lg lg:font-semibold'>
                    {institution}
                    <Link href={linkedIn} target="_blank" rel="noopener noreferrer" className='text-zinc-500'>
                        <FaLinkedin />
                    </Link>
                </h4>
            </div>
            {summary && (
                <div>
                    <p className='leading-relaxed text-zinc-300'>{summary}</p>
                </div>
            )}
            {skills && (
                <div className='relative'>
                    {skills.map(skill => ( 
                        <p className='
                        inline-block min-w-11 text-center px-3 py-1 rounded-full
                        bg-emerald-800 bg-opacity-20 text-emerald-400 text-sm
                        last:mr-0 mr-1 mb-1' 
                        key={skill}>{skill}</p> 
                    ))}
                </div>
            )}
            
        </div>
    </div>
  )
}

export default SectionResume