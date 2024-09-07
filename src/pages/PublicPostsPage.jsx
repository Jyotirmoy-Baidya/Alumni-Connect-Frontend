import React, { useState } from 'react'
import Header from '../components/header/Header'
import { posts } from '../constants'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';
import { PiShareFatThin } from 'react-icons/pi';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import SuccessToast from '../components/toaster/SuccessToast';
import PostBlock from '../components/posts/PostBlock';



const PublicPostsPage = () => {


    return (
        <div className='flex flex-col max-h-screen w-screen'>
            <Header />
            <div className='flex-grow overflow-scroll p-3 bg-slate-900'>
                <div className='flex flex-col gap-4 max-h-full'>
                    {
                        posts.map((post, i) => (
                            <PostBlock key={i} post={post} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default PublicPostsPage