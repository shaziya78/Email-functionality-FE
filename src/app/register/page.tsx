"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/create', formData);
      console.log('Registration successful', response.data);
      router.push('/verify');
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='mb-6 relative'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded pr-10'
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className='absolute right-3 top-9 transform -translate-y-1/6 text-gray-500'
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon based on state */}
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            type="submit"
            className='bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
          >
            Register
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className='text-gray-600 text-sm'>
            Already have an account? <Link href="/login" className='text-purple-500 hover:underline'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
