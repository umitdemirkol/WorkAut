import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description, keyword }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content={keyword} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Meta;
