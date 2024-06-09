import React from 'react'

const Card = ({ title }) => {
    return (
        <div className='w-[300px] h-[300px] mx-auto bg-red-500/70 rounded-xl p-10 flex items-center justify-center'>
            <h1 className='text-white text-2xl'>{title}</h1>
        </div>
    )
}

export default Card