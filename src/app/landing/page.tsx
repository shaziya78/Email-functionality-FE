import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the magnifying glass icon from react-icons

const Page = () => {
  return (
    <>
      <div className='w-full h-96 bg-black text-white text-center flex flex-col justify-center items-center pt-12'>
        <h1 className='text-3xl font-bold'>
          <span className='text-blue-700'>First</span> ever <span className='text-blue-700'>Intelligence</span> powered <br /> Integrated Pharma <span className='text-blue-700'>B2B</span> Platform
        </h1>
      <div className='flex space-x-10 pt-5 '>
        <h1>Trending Searches:</h1>
        <h2 className='text-green-500'>Gabapentin</h2>
        <h2 className='text-green-500'>Metformin hydrochloride</h2>
        <h2 className='text-green-500'>Azithromycin Dihydrate</h2>
      
      </div>
      </div>
    </>
  );
};

export default Page;
