import React from 'react'
import DrawerElement from './DrawerElement'

const Header = () => {
    return (
        <div className='flex flex-row h-14 bg-slate-950 shadow-lg shadow-slate-300'>
            <div className='flex items-center text-gray-100 font-bold tracking-widest px-2'>Alumni Connect</div>
            <DrawerElement />
        </div>
    )
}

export default Header