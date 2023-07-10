/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react-hooks/rules-of-hooks

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import data from '../../../data/data';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
import Meta from '@/components/Meta';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from '@/stores/likeCounterSlice';
import { Table, Avatar } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function Location() {
  const { query } = useRouter();
  const { slug } = query;
  const item = data.locations.find((item) => item.slug == slug);
  const comments = item?.numRevies;

  // const [likes, setLikes] = useState();
  const { data: session } = useSession();
  const disable = !session;
  const likeCount = useSelector((state) => state.likeCounter.value);
  const dispatchLike = useDispatch();

  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    console.log(e);
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    // commenti db ye kaydetmek gerek objectıd userıd ve comment olarak
    e.preventDefault();
    console.log(e);
    const uniqComment = {
      userId: session.user?.name,
      comment: comment,
      timeSpan: new Date().toLocaleString(),
    };

    comments.push(uniqComment);
    console.log(comments);
    setComment('');
  };

  const likeClick = (e) => {
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    if (isChecked) {
      // Update +1 likes mongo
      dispatchLike(incrementLike());
      console.log(likeCount);
    } else {
      // Update -1 likes mongo
      dispatchLike(decrementLike());
      console.log(likeCount);
    }
  };

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
          <div className='mt-3 flex flex-row justify-start gap-2  items-center'>
            <div className=''>
              <input
                id='heart'
                type='checkbox'
                onClick={(e) => likeClick(e)}
                disabled={disable}
              />
              <label htmlFor='heart'>❤</label>
            </div>
            <div className='text-2xl'>{item?.likes}</div>
          </div>
        </div>
        <div className=' flex  flex-col ml-10 mt-10 mb-10 md:col-span-3 md:w-full justify-between item-center m-auto'>
          <div className=' mb-10 '>
            <ul className=' gap-2'>
              <li className=' border-b-2 justify-center items-center flex'>
                {item?.country} / {item?.county}
              </li>
              <li className=''>İsim: {item?.brandName}</li>
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
        <form className=' ' onSubmit={handleSubmit}>
          <textarea
            rows='4'
            cols='50'
            className='w-[250px] border-2 rounded-full'
            value={comment}
            onChange={handleCommentChange}
          />
          <button
            className=' border-2 p-4 border-s-orange-50 rounded-full'
            type='submit'
          >
            Gönder
          </button>
        </form>
        <Table
          aria-label='Example table with static content'
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
        >
          <Table.Header>
            <Table.Column>Kişi</Table.Column>
            <Table.Column>Yorum</Table.Column>
            <Table.Column>image</Table.Column>
            <Table.Column>tarih</Table.Column>
          </Table.Header>
          <Table.Body>
            {item?.numRevies.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Avatar
                    src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    size='sm'
                  />
                </Table.Cell>
                <Table.Cell>{item?.userId}</Table.Cell>
                <Table.Cell>{item?.comment}</Table.Cell>
                <Table.Cell>{item?.timeSpan}</Table.Cell>
              </Table.Row>
            ))}
            {/* <Table.Row key='1'>
              <Table.Cell>
                <Avatar
                  src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                  size='sm'
                />
              </Table.Cell>
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>Çok iyi kafe aq</Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
      <style jsx>{`
        [id='heart'] {
          position: absolute;
          left: -500vw;
        }

        [for='heart'] {
          color: #aab8c2;
          cursor: pointer;
          font-size: 3em;
          align-self: center;
          transition: color 0.2s ease-in-out;
        }

        [for='heart']:hover {
          color: grey;
        }

        [for='heart']::selection {
          color: none;
          background: transparent;
        }

        [for='heart']::moz-selection {
          color: none;
          background: transparent;
        }

        [id='heart']:checked + label {
          color: #e2264d;
          will-change: font-size;
        }

        @keyframes heart {
          0%,
          17.5% {
            font-size: 0;
          }
        }
      `}</style>
    </>
  );
}
