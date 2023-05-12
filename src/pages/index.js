/* eslint-disable @next/next/no-img-element */
import LocationItem from '@/components/LocationItem';
import data from '../../data/data';
import { useEffect, useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredLocations = data.locations.filter((location) => {
    if (!search) {
      return true; // Tüm verileri göster
    } else {
      const lowerSearch = search.toLowerCase();
      return (
        location.country.toLocaleLowerCase().includes(lowerSearch) ||
        location.county.toLocaleLowerCase().includes(lowerSearch)
      );
    }
  });

  const pageCount = Math.ceil(filteredLocations.length / itemsPerPage);
  const paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          onChange={(e) => setSearch(e.target.value)}
          className='w-full pl-10 h-14 tablet:text-xs tablet:px-2 tablet:w-full py-1 px-3
           focus:dark:placeholder-white/50 font-normal text-md bg-zinc-100 dark:bg-zinc-800 outline-0
            focus:dark:bg-zinc-700 border-2 border-zinc-100 dark:!border-zinc-800 transition ease-in-out duration-300
             placeholder-zinc-400 dark:placeholder-zinc-600 text-black dark:text-white rounded-full focus:border-none
              focus:bg-zinc-100 focus:dark:shadow-black/20 focus:ring-0  flex justify-center text-center text-2xl placeholder:text-2xl'
          type='input'
        />
      </div>
      <div className='flex flex-col gap-2 font-serif mt-20'>
        {/* ... */}
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-items-center md:text-center lg:grid-cols-4'>
          {paginatedLocations.map((location) => (
            <LocationItem location={location} key={location.slug} />
          ))}
        </div>
        {filteredLocations.length > itemsPerPage && (
          <div className='flex justify-center mt-4'>
            {currentPage > 1 && (
              <button
                className='pagination-button hover:text-blue-700 mr-2'
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Önceki
              </button>
            )}
            {currentPage < pageCount && (
              <button
                className='pagination-button hover:text-blue-700'
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Sonraki
              </button>
            )}
          </div>
        )}
      </div>
      <style jsx>{`
        .pagination-button {
          background-color: whitesmoke;
          border: 1px solid;
          border-radius: 20px;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .pagination-button:hover {
          color: #ff5a5f;
        }
      `}</style>
    </div>
  );
}
