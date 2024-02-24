'use client'
import React, { useEffect, useState } from 'react';
import jwtDecode from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Ulasan({ params }: { params: { id: string } }) {
  const [reviewText, setReviewText] = useState('');
  const [userId, setUserId] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      const decodedTokenForID = JSON.parse(atob(token.split('.')[1]));
      const userId = decodedTokenForID.user_id;
     
      setUserId(userId);
    }
  }, [userId]);

  const handleChange = (value: any) => {
    setReviewText(value);
  };

  const handleSubmitReview = async () => {
    const dataToSend = {
      content: reviewText,
      liked: 0,
      tempat_wisata: params.id,
      author: userId,
    };

    try {
      const response = await fetch('http://localhost:8000/api/add_comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Ulasan berhasil ditambahkan');
        const placeId = params.id;
        router.push(`/place/${placeId}`);
      } else {
        console.error('Gagal menambahkan ulasan');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menambahkan ulasan:', error);
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">

          <div className="md:w-1/2 h-full overflow-auto p-6">
            <div className="flex justify-start mb-4">
              <Link href={`/place/${params.id}`}>
                <button className="text-red-500 hover:underline">Kembali</button>
              </Link>
            </div>
            <h2 className="text-xl font-semibold mt-4 mb-4">Hai! Bagi kami ulasan Anda sangat berarti</h2>
            <div className="">
              <ReactQuill
                theme="snow"
                value={reviewText}
                onChange={handleChange}
                placeholder="Tulis ulasan Anda..."
              />
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-600"
                  onClick={handleSubmitReview}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 relative">
            <div className="h-96">
              <Image src="/img-labuanbajo.jpg" alt="Image" layout="fill" objectFit="cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}