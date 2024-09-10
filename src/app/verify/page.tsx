"use client"

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function VerifyOtp() {
  const [formData, setFormData] = useState({
    email: '',
    otp: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
      const response = await axios.post('http://localhost:5000/api/verify-otp', formData);
      console.log('OTP verification successful', response.data);
      setSuccess('OTP verified successfully. Redirecting...');
      setTimeout(() => router.push('/login'), 3000);
    } catch (error) {
      console.error('Error verifying OTP', error);
      setError('Error verifying OTP. Please try again.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
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
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>OTP:</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type="submit"
            className='bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
          >
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  );
}
