'use client'
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Ulasan( { params }: { params: { id: string }} ) {
    const [reviewText, setReviewText] = useState('');
    const [userId, setUserId] = useState([]);
    const router = useRouter();


    useEffect(() => {
        const token = Cookies.get('access_token'); // Mengambil token dari cookies
        if (token) {
          console.log("ACCESS TOKEN", token);
          const decodedToken = jwtDecode.decode(token);
    
          const decodedTokenForID = JSON.parse(atob(token.split('.')[1])); // Mendekode payload token
          const userId = decodedTokenForID.user_id;
    
          console.log('this is USER EMAIL : ');
          console.log('user email is:', userId);
          setUserId(userId);
        }
      }, [userId]);
      
    const handleSubmitReview = async () => {
        // Data yang akan Anda kirimkan
        const dataToSend = {
          content: reviewText,
          liked: 0,
          tempat_wisata: params.id, // Ambil ID tempat wisata dari params
          author: userId, // Ambil ID pengguna dari cookies
        };
    
        console.log('ini adalah komen yang dipost',dataToSend)
      
        try {
          const response = await fetch('http://localhost:8000/api/add_comment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend), // Kirim data dalam format JSON
          });
      
          if (response.ok) {
            // Ulasan berhasil ditambahkan, lakukan tindakan sesuai kebutuhan
            console.log('Ulasan berhasil ditambahkan');
            const placeId = params.id;

            // Arahkan dan muat ulang halaman ke http://localhost:3000/place/[id]
            router.push(`/place/${placeId}`);
          } else {
            // Handle kesalahan jika diperlukan
            console.error('Gagal menambahkan ulasan');
          }
        } catch (error) {
          console.error('Terjadi kesalahan saat menambahkan ulasan:', error);
        }
      
        // Tutup modal ulasan setelah selesai
      };



      
  return (
    <div>

        <h2>Ini adalah ulasan</h2>
        <div className="">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <div className="mb-4">
              <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-md"
                placeholder="Tulis ulasan Anda..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600"
                onClick={handleSubmitReview}
              >
                Kirim
              </button>

            </div>
          </div>
        </div>
      
    </div>
  )
}
