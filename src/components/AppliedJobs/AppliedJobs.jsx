import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);



    useEffect(() => {
        const appliedJobsData = localStorage.getItem('appliedjobs');
        if (appliedJobsData) {
            setAppliedJobs(JSON.parse(appliedJobsData));
        }
    }, []);

    return (
        <div className='md:mt-7 mt-4'>
            <h1 className='text-6xl font-semibold font-sans h-60 bg-purple-100 rounded-lg flex justify-center items-center'>
                Applied Jobs
            </h1>
            <div className='flex justify-center md:justify-end mt-8 mb-5 md:mb-0 md:mt-8'>
                <button onClick={() => setSelectedPlace(null)} className='px-5 py-3  font-normal text-lg border-2 border-purple-300 mb-3 mr-3 rounded-lg'>All</button>
                <button onClick={() => setSelectedPlace('Onsite')} className='px-5 py-3  font-normal text-lg border-2 border-purple-300 mb-3 mr-3 rounded-lg'>Onsite</button>
                <button onClick={() => setSelectedPlace('Remote')} className='px-5 py-3  font-normal text-lg border-2 border-purple-300 mb-3  rounded-lg'>Remote</button>
            </div>
            <div>
                {appliedJobs
                    .filter(job => !selectedPlace || job.jobplace === selectedPlace)
                    .map(job => (
                        <div key={job.id}>
                            <div className='md:flex gap-6 border-2 p-4 mb-4 rounded-lg'>
                                <div className='bg-slate-200 flex justify-center md:justify-center items-center px-10 rounded-lg md:h-auto h-20'>
                                    <img className='w-32 h-auto' src={job.img} alt="" />
                                </div>
                                <div className='md:text-left pt-4'>
                                    <h3 className='font-semibold text-2xl'>{job.title}</h3>
                                    <p className='pt-2 pb-4 text-xl'>{job.company}</p>
                                    <div>
                                        <div className='flex justify-center md:justify-normal'>
                                            <button className='py-2 px-5 border-2 rounded-md border-purple-400 mr-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>{job.jobplace}</button>
                                            <button className='py-2 px-5 border-2 rounded-md border-purple-400 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>{job.jobtype}</button>
                                        </div>
                                    </div>
                                    <div className='md:flex justify-center md:justify-normal mt-4 mb-6 gap-5'>
                                        <h3><FontAwesomeIcon icon={faLocationDot} /> {job.location}</h3>
                                        <h3><FontAwesomeIcon icon={faDollarSign} /> Salary: {job.salary}</h3>
                                    </div>
                                </div>
                                <div className='md:ml-auto flex justify-center md:justify-normal items-center'>
                                    <Link to={`/jobs/${job.id}`}><button className=' px-5 py-3 text-white font-normal text-lg  bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>View Details</button></Link>
                                </div>
                            </div>
                            {/* Render other job details here */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
