import React, { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {

    const details = useLoaderData();

    const { job_description, job_responsibility, educational_requirements, experience, title, company, jobtype, jobplace, img, location, salary, phone, email, address } = details[0]



    const [appliedJobs, setAppliedjobs] = useState([])

    const handleAppliedjobs = (jobinfo) => {

        if (!localStorage.getItem('appliedjobs')) {
            let newAppliedJobs = [jobinfo];
            setAppliedjobs(newAppliedJobs);
            localStorage.setItem('appliedjobs', JSON.stringify(newAppliedJobs));
            toast.success('Applied!');
        } else {
            let previousApplied = JSON.parse(localStorage.getItem('appliedjobs'));
            let alreadyApplied = false;
            previousApplied.forEach(applied => {
                if (applied.id === jobinfo.id) {
                    alreadyApplied = true;
                    toast.error('Already applied');
                }
            });
            if (!alreadyApplied) {
                let newAppliedJobs = [...previousApplied, jobinfo];
                setAppliedjobs(newAppliedJobs);
                localStorage.setItem('appliedjobs', JSON.stringify(newAppliedJobs));
                toast.success('Applied!');
            }
        }
    }


    return (
        <div className='md:mt-4 mt-4'>
            <ToastContainer />
            <h1 className=' text-6xl font-semibold font-sans h-60 bg-purple-100 rounded-lg flex justify-center items-center mb-4'>
                Job Details
            </h1>
            <div className='md:flex justify-between gap-10'>
                <div className='text-left mb-10 md:mb-0'>
                    <h3 className='pb-6'><span className='font-bold'>Job Description:</span> {job_description}</h3>
                    <h3 className='pb-6'><span className='font-bold'>Job Responsibility:</span>{job_responsibility}</h3>
                    <h3 className='pb-4'><span className='font-bold'>Educational Requirements:</span></h3>
                    <p className='pb-6'>{educational_requirements}</p>
                    <h3 className='pb-4'><span className='font-bold'>Experiences:</span></h3>
                    <p>{experience}</p>
                </div>
                <div className='bg-purple-100 text-left pl-7 rounded-lg p-7 w-full h-auto'>
                    <h3 className='font-semibold pb-4'>Job Details</h3>
                    <hr className='pt-4 border-purple-200' />
                    <h3 className='pb-3'><FontAwesomeIcon icon={faDollarSign} /> <span className='bold'>Salary:</span> {salary} (Per Month)</h3>
                    <h3 className='pb-6'><FontAwesomeIcon icon={faCalendar} /> <span className='bold'>Job Title:</span> {title}</h3>

                    <h3 className='font-semibold pb-4'>Contact Information</h3>
                    <hr className='pt-4 border-purple-200' />
                    <h3 className='pb-3'><FontAwesomeIcon icon={faPhone} /> <span className='bold'>Phone:</span> {phone}</h3>
                    <h3 className='pb-3'><FontAwesomeIcon icon={faEnvelope} /> <span className='bold'>Email:</span> {email}</h3>
                    <h3 className='pb-3'><FontAwesomeIcon icon={faLocationDot} /> <span className='bold'>Address:</span> {address}</h3>
                    <button onClick={() => handleAppliedjobs(details[0])} className='w-full py-5 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mt-4 md:mt-0'>Apply Now</button>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;