/* eslint-disable @next/next/no-img-element */
import LocationItem from '@/components/LocationItem';
import { useState } from 'react';
import axios from 'axios';

const itemsPerPage = 8;

export default function Home({ locations }) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    setIsSearching(true);
    setCurrentPage(1);
  };

  const filteredLocations = isSearching
    ? locations?.filter(
        (location) =>
          location.country.toLowerCase().includes(search) ||
          location.county.toLowerCase().includes(search)
      )
    : locations;

  const pageCount = Math.ceil(filteredLocations.length / itemsPerPage);
  const paginatedLocations = filteredLocations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

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
          placeholder='istanbul , kadıköy , izmir ..'
          onChange={(e) => handleSearchChange()}
          className='w-full pl-10 h-14 tablet:text-xs tablet:px-2 tablet:w-full py-1 px-3
           font-normal text-md bg-zinc-100 
             border-2 border-zinc-100  transition ease-in-out duration-300
             placeholder-zinc-400  text-black  rounded-full focus:border-none
                focus:ring-0  flex justify-center text-center text-2xl placeholder:text-2xl'
          type='input'
        />
      </div>
      <div className='flex flex-col gap-2 font-serif mt-20'>
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
                onClick={() => handlePreviousPage()}
              >
                Önceki
              </button>
            )}
            {currentPage < pageCount && (
              <button
                className='pagination-button hover:text-blue-700'
                onClick={() => handleNextPage()}
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

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/get_location');
    const locations = response.data;
    return {
      props: {
        locations,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        locations: [],
      },
    };
  }
}

// const DynamicHeader = dynamic(() => import('../../data/data'), {
//   ssr: false,
// });
