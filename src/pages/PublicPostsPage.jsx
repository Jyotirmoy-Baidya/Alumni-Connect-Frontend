import React from 'react'
import Header from '../components/header/Header'
import { posts } from '../constants'


//for now use bg-primary as background

const post = posts[0];

const PublicPostsPage = () => {
    return (
        <div className='flex flex-col max-h-screen w-screen'>
            <Header />
            <div className='flex-grow overflow-scroll p-3 bg-slate-900'>
                <div className='flex flex-col gap-20 max-h-full'>
                    <div className='flex gap-2 h-fit bg-slate-800 rounded-md p-2'>
                        <div className='h-8 w-8 rounded-full'>
                            <img src={post.creatorPic} alt="pic" className='rounded-full' />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <div className='flex h-8 items-center gap-2'>
                                <div className='text-md font-medium text-gray-200 tracking-wider'>{post.creatorName}</div>
                                <div className='text-sm text-gray-500'>{post.time}</div>
                            </div>
                        </div>
                    </div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                    <div>Jyoti</div>
                </div>
            </div>
        </div>
    )
}

export default PublicPostsPage