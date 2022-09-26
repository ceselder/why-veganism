import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


export default function QnaPill({ question, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(b => !b)}
            className='bg-[#060b37] hover:cursor-pointer my-3  pb-1 flex flex-col justify-center rounded-2xl w-[32rem] pr-8 self-center'>
            <div className='flex flex-row items-center min-h-[5rem]'>
                <FontAwesomeIcon className='mr-4 ml-6 h-12 -translate-y-0.5' icon={isOpen ? faCaretUp : faCaretDown} />
                <p className='font-bold text-2xl'>{question}</p>
            </div>

            {(isOpen) && <div>
                <p className='text-left mb-4 ml-8'>{children}</p>
            </div>}

        </div>
    )
}
