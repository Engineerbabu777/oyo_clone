// 'USE CLIENT' STATEMENT INDICATES THAT THIS CODE IS FOR CLIENT-SIDE EXECUTION

// IMPORTING NECESSARY COMPONENTS AND LIBRARIES
import Link from 'next/link' // IMPORTING THE LINK COMPONENT FROM NEXT.JS
import { useState } from 'react' // IMPORTING THE useState HOOK FROM REACT

// HEADER3 COMPONENT DEFINITION
const Header3 = () => {
  // STATE TO MANAGE THE CITY INPUT
  const [city, setCity] = useState(' ')

  // RENDER THE HEADER3 COMPONENT
  return (
    <div className='bg-gradient-to-r from-red-600 to-red-400 h-60'>
      <div className='p-5'>
        {/* HEADER TEXT */}
        <h2 className='text-4xl text-white text-center font-bold'>
          Over 157,000 hotels and homes across 35 countries
        </h2>
        {/* SEARCH INPUT AND BUTTON SECTION */}
        <div className='flex justify-center my-5 mx-20 '>
          <input
            type='text'
            placeholder='Search...'
            className='w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400'
            onChange={e => {
              setCity(e.target.value)
            }}
          />
          {/* SEARCH BUTTON */}
          <button
            type='submit'
            className='h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl'
          >
            {/* LINK TO SEARCH PAGE WITH DYNAMIC CITY PARAMETER */}
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        {/* ADDITIONAL BUTTON SECTION */}
        <div className='flex mx-20 my-5 font-bold'>
          {/* CONTINUE SEARCH BUTTON */}
          <button
            type='submit'
            className='h-16 px-3 py-2 hover:cursor-pointer text-white mr-5'
          >
            Continue your search
          </button>
          {/* HOMESTAY IN INDIA HOTELS BUTTON */}
          <button
            type='submit'
            className='h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl'
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  )
}

// EXPORT THE HEADER3 COMPONENT AS THE DEFAULT EXPORT
export default Header3
