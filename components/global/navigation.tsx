'use client';

import Link from 'next/link';
import AuthModal from './authModal';
import { useEffect } from 'react';

const Navigation = () => {
  const toggleModal = (type: string) => {
    const dialog = document.querySelector(
      `dialog.${type}`
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  // Close Modal on Outside Click
  useEffect(() => {
    const dialog = document.querySelectorAll('dialog');
    dialog.forEach((d) =>
      d.addEventListener('click', (e) => {
        const dialogDimensions = d.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          d.close();
        }
      })
    );
    return () =>
      dialog.forEach((d) =>
        d.removeEventListener('click', (e) => {
          const dialogDimensions = d.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            d.close();
          }
        })
      );
  }, []);

  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        OpenTable
      </Link>

      <div>
        <div className='flex'>
          <button
            className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'
            onClick={() => toggleModal('signIn')}
          >
            Sign in
          </button>
          <AuthModal type='signIn' />
          <button
            className='border p-1 px-4 rounded'
            onClick={() => toggleModal('signUp')}
          >
            Sign up
          </button>
          <AuthModal type='signUp' />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
