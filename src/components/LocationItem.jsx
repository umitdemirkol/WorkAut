/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike } from '@/stores/likeCounterSlice';
import {
  decrementDisLike,
  incrementDisLike,
} from '@/stores/disLikeCounterSlice';

export default function LocationItem({ location }) {
  const likeCount = useSelector((state) => state.likeCounter.value);
  const dispatchLike = useDispatch();
  const dispatchDisLike = useDispatch();
  const dislikeCount = useSelector((state) => state.disLikeCounter.value);

  return (
    // <div className='card flex justify-center items-center'>
    //   <div className='card-header flex justify-center items-center mt-5 mb-5'>
    //     <p>
    //       {location.country} / {location.county}
    //     </p>
    //   </div>
    //   <div className='card-body flex flex-col justify-center '>
    //     <div>
    //       <Link href={`/location/${location.brandName}`}>
    //         <div className='image-container rounded shadow-sm aspect-w-1 aspect-h-1'>
    //           <img
    //             src={location.image}
    //             alt={location.brandName}
    //             className='object-cover object-center w-full h-full'
    //           />
    //         </div>
    //       </Link>
    //     </div>

    //     <div className=' ml-3'>
    //       <p>like</p>
    //     </div>
    //   </div>
    //   <div className='card-footer flex flex-col items-center justify-center p-5 pb-2'>
    // <div className=' text-lg text-gray-700 font-mono'>
    //   {location.brandName}
    // </div>
    // <div className=' font-sans'>
    //   <p>{location.description}</p>
    // </div>
    //   </div>
    // </div>
    <div className='card'>
      <div className='card-header'>
        <p>
          {location.country} / {location.county}
        </p>
      </div>
      <div className='card-body'>
        <Link href={`/Location/${location.slug}`}>İncele</Link>
        <img
          src={location.image}
          alt={location.brandName}
          className='card-image'
        />
      </div>
      <div className='card-footer flex flex-col justify-between text-center'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-1 items-center justify-center'>
            {/* <button
              className='likeButton'
              aria-label='Increment value'
              // onClick={() => dispatchLike(incrementLike())}
            > */}
            <div className='like cursor-pointer '>
              <img src='/images/heart.svg' className='' />
            </div>

            <div className='text-sm'>{likeCount}</div>
            {/* </button> */}

            {/* <button
              className='dislike'
              aria-label='Decrement value'
              // onClick={() => dispatchDisLike(incrementDisLike())}
            >
              <img src='/images/dislike.png' className='w-4 mt-[0.25px]'></img>
              <div className='text-sm'>{dislikeCount}</div>
            </button> */}
          </div>

          <div className=' text-gray-700 font-mono'>{location.brandName}</div>
        </div>
        <div className='mt-5 font-sans'>
          <span>{location.description}</span>
        </div>
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          height: 400px;
          display: flex;
          flex-direction: column;
          @media (max-width: 640px) {
            height: 250px;
            width: 250px;
          }
        }

        .card-header {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f1f1f1;
          padding: 10px;
        }

        .card-body {
          flex: 6;
          padding: 10px;
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
        }

        .card-image {
          position: absolute;
          max-width: 100%;
          max-height: 100%;
        }

        .card-footer {
          flex: 3;
          background-color: #f1f1f1;
          padding-left: 5px;
          padding-right: 3px;
          padding-top: 3px;
        }
      `}</style>
    </div>
  );
}
