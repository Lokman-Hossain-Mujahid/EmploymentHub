import React from 'react';

const AvailableJobs = ({ job }) => {

    const { title, available, logo } = job

    return (
        <div className='mt-8 '>

            <div className='md:text-left bg-slate-100 pl-10 pr-10 md:pr-20 pt-12 pb-10 rounded-lg'>
                <div className='flex justify-center md:justify-normal'>
                    <img className='bg-slate-200 p-3 rounded-lg' src={logo} alt="" />
                </div>
                <h1 className='mt-8 mb-2 font-bold'>{title}</h1>
                <h3 className='text-slate-400'>{available} Jobs Available</h3>
            </div>

        </div>
    );
};

export default AvailableJobs;