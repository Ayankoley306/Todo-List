import React from 'react'

function Footer() {
    return (
        <div
            className='w-screen lg:h-20 h-36 flex justify-evenly flex-col items-center dark:bg-gray-800 bg-cyan-800 text-white py-2'
        >
            <div
                className='flex justify-center items-center gap-x-16 my-3 flex-wrap'
            >
                <a
                    href='https://www.instagram.com/ayan_koley_07/?hl=en'
                    target="_blank"
                    className='flex gap-2 justify-center items-center'
                >
                    <i
                        className="fa-brands fa-instagram"
                    ></i>
                    Instragram
                </a>
                <a
                    href='https://www.facebook.com/ayan.koley.927980/'
                    target="_blank"
                    className='flex gap-2 justify-center items-center'
                >
                    <i
                        className="fa-brands fa-facebook"
                    ></i>
                    Facebook
                </a>
                <a
                    href='https://github.com/Ayankoley306'
                    target="_blank"
                    className='flex gap-2 justify-center items-center'
                >
                    <i
                        className="fa-brands fa-github"
                    ></i>
                    Github
                </a>
                <a
                    href='https://www.linkedin.com/in/ayan-koley-6aa846378/'
                    target="_blank"
                    className='flex gap-2 justify-center items-center'
                >
                    <i
                        className="fa-brands fa-linkedin"
                    ></i>
                    Linkdin
                </a>
            </div>
            <hr
                className='w-4/5 text-gray-400' />
            <div
                className='h-2/5'
            >
                Made With <i className="fa-regular fa-heart text-rose-600 "></i> By Ayan koley
            </div>
        </div>
    )
}

export default Footer