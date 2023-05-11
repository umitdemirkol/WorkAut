import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta
        keyword='Ana Sayfa'
        title='WorkAut'
        description='work at out'
      ></Meta>
      <div className='flex min-h-screen flex-col justify-between'>
        <Header />
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
