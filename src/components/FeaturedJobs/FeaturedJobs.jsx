import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ feature }) => {

    const { id, title, company, jobtype, jobplace, img, location, salary } = feature

    return (
        <div className='md:text-left -ml-3 md:-ml-0 pl-0 md:pl-10 pr-0 md:pr-36 border-2 rounded-lg py-10'>
            <div className='flex justify-center md:justify-normal'>
                <img src={img} alt="" />
            </div>
            <h1 className='mt-8 mb-2 font-bold'>{title}</h1>
            <h3 className='text-slate-800 mt-2 mb-4'>{company}</h3>
            <div className='flex justify-center md:justify-normal'>
                <button className='py-2 px-5 border-2 rounded-md border-purple-400  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mr-4'>{jobplace}</button>
                <button className='py-2 px-5 border-2 rounded-md border-purple-400 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 '>{jobtype}</button>
            </div>
            <div className='flex justify-center md:justify-normal mt-4 mb-6 gap-5'>
                <h3><FontAwesomeIcon icon={faLocationDot} /> {location}</h3>
                <h3><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</h3>
            </div>
            <Link to={`/jobs/${id}`}><button className=' px-5 py-3 text-white font-normal text-lg  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJobs;