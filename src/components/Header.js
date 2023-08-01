import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Dropdown, User, Avatar, Text, Grid } from '@nextui-org/react';
import Location from './newLocation';

const Header = () => {
  const { data: session } = useSession();
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const openLocations = () => {
    setIsLocationsOpen(true);
  };

  const closeLocations = () => {
    setIsLocationsOpen(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  const mobileUser = (
    <User
      bordered
      size='lg'
      as='button'
      color='primary'
      src={session?.user?.image}
    />
  );

  // Normal ekranlar için User bileşeni
  const normalUser = (
    <User
      bordered
      as='button'
      size='md'
      color='primary'
      src={session?.user?.image}
      name={session?.user?.name}
      description={session?.user?.email}
    />
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Örnek bir ekran genişliği, istediğiniz değeri kullanabilirsiniz
    };

    handleResize(); // Sayfa yüklendiğinde ve boyut değişikliklerinde çalışması için başlangıçta çağırıyoruz.

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!session) {
    return (
      <nav className='flex h-12 items-center px-4 justify-between shadow-md font-mono rounded-full m-20'>
        <div className='flex justify-between'>
          <div>
            <p className=' text-xl'>
              <Link href={`/`}>WorkAut</Link>
              <image width='30px' src='/images/W.gif' alt='' />
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
    <nav className='flex h-fit items-center pl-5 justify-between shadow-md font-mono rounded-full m-16 '>
      <div className='flex justify-between'>
        <div>
          <p className=' text-xl'>
            <Link href={`/`}>WorkAut</Link>
            {/* <img width='30px' height='20px' src='/images/WorkAut.gif' alt='' /> */}
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-3'>
        <div className='  bg-gray-200 rounded-full md:w-56'>
          <Dropdown placement='bottom-left' className=' border-2 bg-black'>
            <Dropdown.Trigger>
              {isMobile ? mobileUser : normalUser}
            </Dropdown.Trigger>
            <Dropdown.Menu color='primary' aria-label='User Actions'>
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  Hesap
                </Text>
              </Dropdown.Item>

              {/* <Dropdown.Item key='settings' withDivider>
                Ayarlar
              </Dropdown.Item> */}

              <Dropdown.Item key='configurations'>
                <button
                  className='flex w-full h-full'
                  onClick={() => openLocations()}
                >
                  Lokasyon Ekle
                </button>
              </Dropdown.Item>

              <Dropdown.Item key='help_and_feedback' withDivider>
                Help & Feedback
              </Dropdown.Item>

              <Dropdown.Item key='logout' color='error' withDivider>
                <button className=' flex w-full' onClick={() => signOut()}>
                  Log Out
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      {isLocationsOpen && <Location visible={true} onClose={closeLocations} />}
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
