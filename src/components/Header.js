import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Header = () => {
  return (
    <>
      <nav className='flex h-12 items-center px-4 justify-between shadow-md font-mono'>
        <div className='flex'>
          <p className=''>WorkAut</p>
        </div>
        <div className='flex'></div>
      </nav>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
