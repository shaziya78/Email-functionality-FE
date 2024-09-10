"use client"
import Image from 'next/image'; // Import the Image component from 'next/image'
import Logo from '../../public/logo.png'; // Adjust path as necessary
import Landing from '../landing/page'
const Page = () => {
  return (
    <>
     <div className='flex place-content-around bg-gray-100 p-5'>
      <div>
       <h1>logo</h1>
      </div>
      <div className='flex justify-center'>
     <ul className='flex space-x-11 font-bold'>
        <li>About Us</li>
        <li>Edge</li>
        <li>Commerce</li>
        <li>Subscription/Pricing</li>
     </ul>
      </div>
      <div className='h-50 w-50 text-white bg-purple-800 font-bold rounded-lg'>
        <button className='p-2'>Login</button>
      </div>

    </div>
     <Landing />
    </>
   
  );
};

export default Page;
