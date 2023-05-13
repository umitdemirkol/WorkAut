import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Header = () => {
  return (
    <>
      <nav className='flex h-12 items-center px-4 justify-between shadow-md font-mono'>
        <div className='flex justify-between'>
          <div>
            <p className=' text-xl'>
              <Link href={`/`}>WorkAut</Link>
            </p>
          </div>
        </div>
        <div className='border-[1px] cursor-pointer rounded-full bg-black text-white p-2 font-serif'>
          SingIn
        </div>
      </nav>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
