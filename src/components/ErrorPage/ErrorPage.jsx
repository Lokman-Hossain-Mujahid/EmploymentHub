import React from 'react';
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className='mt-60 text-5xl ' id="ErrorPage">
        <h1 className='mb-6'>Oops!</h1>
        <p className='mb-6'>Sorry, an unexpected error has occurred.</p>
        <p className='mb-6'>
          Error 404 Page Not Found.
        </p>
        <Link to="/"><button className='px-5 py-5 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mt-4 md:mt-0'>Go Back To Home</button></Link>
      </div>
    );
  }

