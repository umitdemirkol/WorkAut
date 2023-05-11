/* eslint-disable @next/next/no-img-element */
import LocationItem from '@/components/LocationItem';
import data from '../../data/data';
import { Inter } from 'next/font/google';
import Link from 'next/link';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('in');
  return (
    <div className='flex flex-col gap-2 font-serif mt-20'>
      <div className='flex flex-col justify-center items-center text-3xl'>
        <div>
          <p>Working at Out ..</p>
        </div>
        <div>
          <span>Sessiz , sakin çalışma ortamı mı arıyorsun ?</span>
        </div>
      </div>
      <div className='flex mt-10 justify-center items-center gap-1'>
        <input
          placeholder='Search'
          // className=' border-[1px] placeholder:text-slate-700  max-sm:w-2/3 md:mb-6 w-2/3
          // max-sm:h-5 md:gap-6 text-center font-serif border-solid border-blue-500 rounded-bl-full
          // rounded-tl-full outline-0 placeholder:[inter.className] h-16 md:text-4xl'
          className='w-full pl-10 h-14 tablet:text-xs tablet:px-2 tablet:w-full py-1 px-3
           focus:dark:placeholder-white/50 font-normal text-md bg-zinc-100 dark:bg-zinc-800 outline-0
            focus:dark:bg-zinc-700 border-2 border-zinc-100 dark:!border-zinc-800 transition ease-in-out duration-300
             placeholder-zinc-400 dark:placeholder-zinc-600 text-black dark:text-white rounded-full focus:border-none
              focus:bg-zinc-100 focus:dark:shadow-black/20 focus:ring-0  flex justify-center text-center text-2xl placeholder:text-2xl'
          type='input'
        />
        <div>
          {/* <Link href={`/Location/${location.slug}`}>
            <img src={location.image} alt={location.brandName} />
            İncele
          </Link> */}
        </div>

        {/* <button
          className='btn flex border-none max-sm:w-1/3 
        md:mb-6 w-1/3 items-center justify-center max-sm:h-5 md:gap-6 text-center 
        font-serif  border-blue-500 rounded-br-full rounded-tr-full outline-0 
        placeholder:font-mono bg-slate-200 hover:bg-slate-400 hover:text-white h-16'
        >
          Search
        </button> */}
      </div>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center  md:text-center lg:grid-cols-4 '>
        {data.locations.map((location) => (
          <LocationItem location={location} key={location.slug} />
        ))}
      </div>
    </div>
  );
}
