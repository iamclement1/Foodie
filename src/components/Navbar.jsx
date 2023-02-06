import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed z-50 w-screen bg-slate-600 p-6 px-16 ' >
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full bg-red-600 p-3 border-none' ></div>


            {/* mobile phone  */}
            <div className="flex md:hidden w-full h-full bg-blue-500 p-5" ></div>
        </div>
    )
}

export default Navbar