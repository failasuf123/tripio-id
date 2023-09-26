import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  return isVisible ? (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-800 overflow-hidden">
      <div className="relative bg-white rounded-lg shadow-md p-2 mx-5 flex flex-col justify-evenly items-center h-96">
        <div className="relative rounded-full">
          <Image src="/loginAsk.svg" alt="SVG Image" height={250} width={250} />
        </div>

        <div className="text-gray-500 px-3">
          <p>
            <span className="text-gray-700">Login</span> untuk mendapatkan experience yang baru
          </p>
        </div>

        <div className="text-gray-500 flex flex-row justify-between items-center">
          <div className="mr-5">
            <Link href={'/place'}>
              <button className="px-2 py-2 text-cyan-500 border rounded-lg border-cyan-500 hover:scale-105 transition duration-150">
                Nanti dulu
              </button>
            </Link>
          </div>
          <div className="ml-5 bg-cyan-500 text-white rounded-lg hover:scale-105 transition duration-150">
            <Link href={'/login'}>
              <button className="px-3 py-2">Login</button>
            </Link>
          </div>
        </div>

        <div onClick={onClose} className="absolute bg-red-500 rounded-full top-3 right-4 py-1 px-2 cursor-pointer font-bold hover:scale-90 transition duration-150">
          X
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
