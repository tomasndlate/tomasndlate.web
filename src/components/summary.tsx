import React from 'react'
import { ReactNode } from 'react';

type SummaryProps = {
    content: ReactNode;
};

function Summary({ content }: SummaryProps) {
    return (
        <p className='leading-relaxed text-zinc-300'>
            {content}
        </p>
    )
}

export default Summary