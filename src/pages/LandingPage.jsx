import React from 'react'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='h-screen w-screen bg-primary flex justify-center items-center'>
            <div className='flex gap-2'>

                <button className='bg-green-500 text-black p-2 rounded-md shadow-md border-b-2 border-black active:border-none hover:bg-green-400'><NavLink to='/login'>Login</NavLink></button>
                <button className='bg-green-500 text-black p-2 rounded-md shadow-md border-b-2 border-black active:border-none  hover:bg-green-400'><NavLink to='/signup'>Signup</NavLink></button>
                <button className='bg-green-500 text-black p-2 rounded-md shadow-md border-b-2 border-black active:border-none  hover:bg-green-400'><NavLink to='/public-posts'>Public Posts</NavLink></button>
            </div>
        </div>
    )
}

export default LandingPage