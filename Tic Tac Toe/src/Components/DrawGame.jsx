import React from 'react'

function DrawGame({ ...props }) {
    return (
        <div className='absolute w-dvw h-dvh z-10 backdrop-blur-xs flex justify-center items-center'>
            <div className='h-1/3 w-2/3 lg:w-1/3 flex flex-col gap-8 juatify-center items-center'>
                <h1 className='text-gray-200 font-bold lg:dark:text-white lg:text-5xl md:text-4xl text-2xl flex justify-center items-center gap-8 '>MATCH DRAW</h1>
                <button className='h-8 md:h-10 flex justify-center items-center gap-2  relative bg-blue-600 after:bg-blue-800 text-white md:text-xl text-lg z-0 rounded-lg dark:bg-indigo-600 px-3 py-4 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded dark:after:bg-indigo-800 after:transition-[all_0.3s_ease]  hover:after:w-full active:bg-gray-300 active:text-black hover:scale-105 active:scale-95 border-2 border-white '
                    {...props}
                >
                    New Game
                </button>
            </div>
        </div>
    )
}

export default DrawGame