"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function RequestPasswordReset() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMessage('Check your email for a password reset link.');
      router.push('/reset-otp')
    } catch (error) {
      setMessage('Error requesting password reset.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-center">Request Password Reset</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <button
          type="submit"
          className='bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          Send Reset OTP
        </button>
        {message && <p className='mt-4 text-center text-gray-600'>{message}</p>}
      </form>
    </div>
  );
}
