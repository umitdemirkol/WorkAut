/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import data from '../../../data/data';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
import Meta from '@/components/Meta';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike } from '@/stores/likeCounterSlice';
import {
  decrementDisLike,
  incrementDisLike,
} from '@/stores/disLikeCounterSlice';
import { Table } from '@nextui-org/react';

export default function Location() {
  const { query } = useRouter();
  const { slug } = query;
  const item = data.locations.find((item) => item.slug == slug);

  console.log(item);

  const likeCount = useSelector((state) => state.likeCounter.value);
  const dispatchLike = useDispatch();
  const dispatchDisLike = useDispatch();
  const dislikeCount = useSelector((state) => state.disLikeCounter.value);

  return (
    <>
      <Meta
        title={`${item?.brandName} / ${item?.county}`}
        keyword='work at out , dışarıda çalışma , nerede çalışırım ? '
      />
      <div className=' cursor-pointer w-10 h-6 rounded-md hover:bg-gray-400 text-white bg-black flex justify-center'>
        <Link href={`/`}>Geri</Link>
      </div>
      <div className='grid md:grid-cols-6 md:gap-3 mt-10'>
        <div className='md:col-span-3 mt-3 p-5 justify-center items-center rounded-lg'>
          <Carousel className=' bg-gray-200 rounded-lg flex justify-center items-center flex-col'>
            {item?.images?.map((movie, i) => {
              return (
                <Paper
                  className='flex justify-center items-center w-full h-[400px]'
                  key={i}
                >
                  <img
                    className='  p-10 flex items-center justify-center '
                    src={movie}
                  />
                </Paper>
              );
            })}
          </Carousel>
          <div className='mt-3 flex flex-row'>
            <div className='like cursor-pointer '>
              <img src='/images/heart.svg' />
            </div>
            <div className='text-sm'>{item?.likes}</div>
          </div>
        </div>
        <div className=' flex  flex-col ml-10 mt-10 mb-10 md:col-span-3 md:w-full justify-between item-center m-auto'>
          <div className=' mb-10 '>
            <ul className=' gap-2'>
              <li className=' border-b-2 justify-center items-center flex'>
                {item?.brandName}
              </li>
              <li className=''>
                Konum: {item?.country} / {item?.county}
              </li>
              <li>Açıklama: {item?.description}</li>
              <li>Açıklama: {item?.description}</li>
              <li>Açıklama: {item?.description}</li>
              <li>Açıklama: {item?.description}</li>
              <li>Açıklama: {item?.description}</li>
              <li>Açıklama: {item?.description}</li>
            </ul>
          </div>
          <div className=' flex justify-center items-center rounded-md border-2'>
            <iframe
              className='relative w-full h-full'
              src={item?.mapLoc}
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className=' w-full rounded-md  mt-10'>
        <Table
          aria-label='Example table with static content'
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
        >
          <Table.Header>
            <Table.Column></Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key='1'>
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>Çok iyi kafe aq</Table.Cell>
            </Table.Row>
            <Table.Row key='2'>
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>İnanılmaz çalıştım burada harikaydı</Table.Cell>
            </Table.Row>
            <Table.Row key='3'>
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Çok sakin </Table.Cell>
            </Table.Row>
            <Table.Row key='4'>
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>tatlıları mükemmel</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
