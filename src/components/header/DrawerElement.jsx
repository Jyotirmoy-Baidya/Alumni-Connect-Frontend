import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { profile } from '../../constants';



function DrawerElement() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Menu Button */}
            <button
                className="ms-auto p-2 text-white rounded focus:outline-none"
                onClick={toggleDrawer}
            >
                <IoMenu size="24px" />
            </button>

            {/* Drawer */}
            <div
                className={`fixed z-10 top-0 right-0 w-64 h-full bg-slate-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-0 right-2 p-2 text-gray-200 hover:text-gray-200 focus:outline-none"
                    onClick={toggleDrawer}
                >
                    &times;
                </button>

                {/* Drawer Content */}
                <div className="px-2 py-4 space-y-4">
                    <div className='flex items-center gap-2'>
                        <img src={profile.profilePic} alt="" className='h-12 w-12 rounded-full' />
                        <div className='flex flex-col'>

                            <div className="text-md font-medium text-gray-300 tracking-wider">{profile.name}</div>

                            <div className="text-xs text-gray-400 tracking-wider">{profile.designation}</div>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <a href="#" className="block border-b-[1px] border-slate-500 p-2 text-gray-300 hover:text-teal-500">
                            Profile
                        </a>
                        <a href="#" className="block border-b-[1px] border-slate-500 p-2 text-gray-300 hover:text-teal-500">
                            Communities
                        </a>
                        <a href="#" className="block border-b-[1px] border-slate-500 p-2 text-gray-300 hover:text-teal-500">
                            Webinars
                        </a>
                        <a href="#" className="block border-b-[1px] border-slate-500 p-2 text-gray-300 hover:text-teal-500">
                            Alumni
                        </a>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    );
}

export default DrawerElement;
