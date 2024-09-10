"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log('Login successful', response.data);
      router.push('/'); // Redirect to homepage after login
    } catch (error) {
      console.error('Error logging in user', error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
            aria-required="true"
          />
        </div>
        <div className='mb-6 relative'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
            aria-required="true"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
            aria-label={showPassword ? "Hide password" : "Show password"}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">
            {errorMessage}
          </div>
        )}
        <div className='flex items-center justify-between'>
          <button
            type="submit"
            className='bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className='text-gray-600 text-sm'>
            Don't have an account? <Link href="/register" className='text-purple-500 hover:underline'>Register</Link>
          </p>
          <p className='mt-2 text-gray-600 text-sm'>
            <Link href="/forgot-password" className='text-purple-500 hover:underline'>Forgot Password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
