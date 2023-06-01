import React from 'react';

const HomeTop = () => {
    return (
        <div className='bg-purple-100 rounded-lg mt-6 md:mt-0 p-3 md:p-0'>
            <div className='md:flex items-center justify-between gap-16 md:mt-7'>
                <div className='md:pl-5 md:text-left'>
                    <div className='text-6xl font-bold '>
                    <h1 className='pt-5'>One Step</h1>
                    <h1 className='pt-5'>Closer To Your</h1>
                    <h1 className='pt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>Dream Job</h1>
                    </div>
                    <p className='mt-6'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. <br /> Manage all your job application from start to finish.</p>
                    <button className='mt-6 px-5 py-3 text-white font-normal text-lg  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>Get Started</button>
                </div>
                <div className=''>
                    <img className='h-full w-auto' src="/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeTop;