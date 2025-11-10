import React from 'react'

function Timer() {
    const [timer, setTimer] = React.useState("12:00")
    return (
        <div className='pt-14 h-dvh text-white flex flex-col items-center justify-start gap-6'>
            <div className='text-9xl font-light select-none flex h-1/4'>
                <input type="text" className='bg-(--input-bg) text-white p-2 rounded-lg outline-none text-7xl w-fit ' onChange={(e) => setTimer(e.target.value)} value={timer} />
            </div>
            <div className='text-2xl font-medium select-none'>
                <button className='px-6 py-2 bg-(--element-color2) rounded-lg hover:bg-(--button-hover-bg) transition-colors duration-200'>Start Timer</button>
            </div>

        </div>
    )
}

export default Timer