import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='md:flex font-mono justify-around md:gap-52 items-center rounded-lg p-2'>
            <h1 className=' text-3xl font-bold'><Link to="/">EmploymentHub</Link></h1>
            <div className='mt-5 md:mt-0 flex justify-center md:justify-normal gap-5 md:gap-10 font-bold text-base text-slate-600'>
                <Link className='hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500' to="/">Home</Link>
                <Link className='hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500' to="stats">Statistics</Link>
                <Link className='hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500' to="applied">Applied Job</Link>
                <Link className='hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500' to="blog">Blog</Link>
            </div>
            <button className='px-5 py-5 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mt-6 md:mt-0'>Start Applying</button>
            
        </div>
        
        </div>
    );
};

export default Header;