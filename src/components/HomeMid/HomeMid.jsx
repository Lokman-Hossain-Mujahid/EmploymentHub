import React, { useEffect, useState } from 'react';
import AvailableJobs from '../../AvailableJobs/AvailableJobs';

const HomeMid = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("Availablejobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        
        <div className='mt-14 md:mt-32'>
            <h1 className='text-6xl font-bold'>Job Category List</h1>
            <h3 className='text-slate-400 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</h3>
            <div className='md:flex justify-between'>
            {
                jobs.map(job=> <AvailableJobs key={job.id}
                job={job}
                ></AvailableJobs>)
            }
            </div>
        </div>
    );
};

export default HomeMid;