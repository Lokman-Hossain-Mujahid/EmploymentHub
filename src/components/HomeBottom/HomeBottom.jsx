import React, { useEffect, useState } from 'react';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const HomeBottom = () => {

    const [features, setFeature] = useState([])
    const [showAll, setShowall] = useState(true)

    const handleShowall = () => {

        setShowall(!showAll)


    }

    useEffect(() => {
        fetch('Featuredjobs.json')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])

    return (


        <div className='mt-14 md:mt-32'>

            <h1 className='text-6xl font-bold'>featured Jobs</h1>
            <h3 className='text-slate-400 mt-4 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</h3>

            <div className='grid md:grid-cols-2 gap-6'>
                {
                    (showAll) ? features.slice(0, 4).map(feature => <FeaturedJobs
                        key={feature.id}
                        feature={feature}

                    ></FeaturedJobs>) : features.map(feature => <FeaturedJobs
                        key={feature.id}
                        feature={feature}

                    ></FeaturedJobs>)


                }
            </div>

            <div className='mt-6'>
                {showAll && <button onClick={handleShowall} className='px-5 py-3 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>See All Jobs</button>}
                {!showAll && <button onClick={handleShowall} className='px-5 py-3 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'>See Less Jobs</button>}
            </div>
        </div>
    );
};

export default HomeBottom;