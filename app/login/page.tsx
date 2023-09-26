'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (event:any) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8000/users/token/obtain/', data);

      if (response.status === 200 && email !== 'admin@g.com') {
        Cookies.set('access_token', response.data.access, { expires: 7 }); // Simpan token dalam cookies
        setSuccessMessage('Login successful');
        setErrorMessage('');
        router.push('/');
      } else {
        setErrorMessage('Invalid email or password.');
        setSuccessMessage('');
        console.error('Login failed:', response);
      }
    } catch (error) {
      setErrorMessage('Invalid email or password.');
      setSuccessMessage('');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <p className="text-gray-400 text-md">Belum punya akun ? <span></span>
            <Link href="/register">
              <span className="text-cyan-400 cursor-pointer hover:underline">Signup</span>
            </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-white py-2 rounded-lg hover:bg-cyan-500 focus:outline-none"
          >
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;


export function getEmailData(email:string) {
  return email
}



