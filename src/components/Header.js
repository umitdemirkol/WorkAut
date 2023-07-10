import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Dropdown, User, Avatar, Text, Grid } from '@nextui-org/react';
import Location from './newLocation';

const Header = () => {
  const { data: session } = useSession();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

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
        <div className='  bg-gray-200 rounded-full w-56'>
          <Dropdown placement='bottom-left' className=' border-2 bg-black'>
            <Dropdown.Trigger>
              <User
                bordered
                as='button'
                size='md'
                color='primary'
                src={session?.user?.image}
                name={session?.user?.name}
                description={session?.user?.email}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color='primary' aria-label='User Actions'>
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  Hesap
                </Text>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  {session?.user?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                Ayarlar
              </Dropdown.Item>
              <Dropdown.Item key='configurations'>
                <Location visible={visible} />
                <button onClick={() => handler()}>Yer</button>
              </Dropdown.Item>
              <Dropdown.Item key='help_and_feedback' withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key='logout' color='error' withDivider>
                {/* <div className='border-[1px] cursor-pointer rounded-full bg-black text-white p-2 font-serif'> */}
                <button onClick={() => signOut()}> Çıkış</button>
                {/* </div> */}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <User
            src={session?.user?.image}
            name={session?.user?.name}
            bordered
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
