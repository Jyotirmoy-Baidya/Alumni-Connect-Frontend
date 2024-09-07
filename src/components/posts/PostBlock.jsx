
import React, { useState } from 'react'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';
import { PiShareFatThin } from 'react-icons/pi';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import SuccessToast from '../toaster/SuccessToast';


const PostBlock = ({ post }) => {
    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    const likeToggle = () => {
        if (like) {
            setLike(false);
            SuccessToast('Unliked');
        }
        else {
            setLike(true);
            SuccessToast('Liked');
        }
    }

    const bookmarkToggle = () => {
        if (bookmark) {
            setBookmark(false);
            SuccessToast('Removed from bookmarks');
        }
        else {
            setBookmark(true);
            SuccessToast('Added to bookmarks');
        }
    }
    return (
        <div className='flex shadow gap-2 h-fit bg-slate-800 rounded-md px-3 py-4'>
            <div className='flex h-8 w-8 min-h-8 min-w-8 rounded-full mt-[1px]'>
                <img src={post.creatorPic} alt="pic" className='rounded-full h-full w-full' />
            </div>
            <div className='flex flex-col flex-grow gap-2'>
                <div className='flex h-8 items-center gap-2'>
                    <div className='text-md font-medium text-gray-200 tracking-wider'>{post.creatorName}</div>
                    <div className='text-sm text-gray-400'>{post.time}</div>
                </div>
                <div className='text-sm tracking-wider  text-gray-300'>
                    {post.message}
                </div>
                <div className='flex ps-2 pe-8 text-gray-300 my-2 justify-between buttons'>
                    <div className='' onClick={likeToggle}>
                        {
                            like ? <IoMdHeart className='text-pink-700' /> : <IoIosHeartEmpty className='' />
                        }
                    </div>
                    <div>
                        <FaRegCommentDots />
                    </div>
                    <div>
                        <PiShareFatThin className='text-blue-300' />
                    </div>
                    <div onClick={bookmarkToggle}>
                        {
                            bookmark ? <IoBookmark className='text-green-500' /> : <IoBookmarkOutline className='' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostBlock