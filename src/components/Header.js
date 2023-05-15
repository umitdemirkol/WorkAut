import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <nav className='flex h-12 items-center px-4 justify-between shadow-md font-mono rounded-full m-6'>
        <div className='flex justify-between'>
          <div>
            <p className=' text-xl'>
              <Link href={`/`}>WorkAut</Link>
            </p>
          </div>
        </div>
        <div className='border-[1px] cursor-pointer rounded-full bg-black hover:bg-white hover:text-black text-white p-2 font-serif'>
          <button onClick={() => signIn('google')} className=''>
            SingIn
          </button>
        </div>
      </nav>
    );
  }
  return (
    <nav className='flex h-12 items-center px-4 justify-between shadow-md font-mono rounded-full m-6 '>
      <div className='flex justify-between'>
        <div>
          <p className=' text-xl'>
            <Link href={`/`}>WorkAut</Link>
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-3'>
        <div>{session?.user?.name}</div>
        <div className='border-[1px] cursor-pointer rounded-full bg-black text-white p-2 font-serif'>
          <button onClick={() => signOut()}> Çıkış</button>
        </div>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
