'use client'
import React, { useState } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State untuk menampilkan popup sukses
  const router = useRouter()

  // const router = useRouter(); 

  const handleRegister = async () => {
    if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:8000/users/register/', {
        email,
        password,
      });
      console.log('Registration success:', response.data);
      setRegistrationSuccess(true); // Mengatur state popup sukses menjadi true
      setTimeout(() => {
        setRegistrationSuccess(false); // Mengembalikan state popup sukses menjadi false setelah beberapa waktu
        router.push('/login')
      }, 300); // Waktu (dalam milidetik) sebelum popup ditutup dan pengguna diarahkan
    } catch (error) {
      console.error('Registration failed');
      alert('email invalid atau sudah digunakan')
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
        <div className="hidden md:block w-1/2 bg-cyan-500 py-10 px-10 relative">
            <Image src="/img-labuanbajo.jpg" alt="Image" layout="fill" objectFit="cover" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500" 
                      placeholder="************" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3 justify-center items-center">
                <div className="w-full px-3 mb-5">
                  <button onClick={handleRegister} className="block w-full max-w-xs mx-auto bg-cyan-500 hover:scale-95 transition duration-150 active:scale-90  text-white rounded-lg px-3 py-3 font-semibold">DAFTAR SEKARANG</button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p>Sudah punya akun ?  <span></span>
                <Link href="/login">
                    <span className="text-cyan-500 cursor-pointer hover:underline">
                        Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

         {/* Popup sukses */}
         {registrationSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
              Registrasi berhasil! Anda akan diarahkan ke halaman login dalam beberapa detik.
            </div>
          </div>

      )}
    </div>
  );
};

export default RegisterPage;
