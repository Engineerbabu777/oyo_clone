// IMPORT STATEMENTS
'use client' // Assuming this is a custom directive for Next.js client-side rendering
import Image from 'next/image'

// FUNCTIONAL COMPONENT NAMED 'Header4'
const Header4 = () => {
  // RENDERING COMPONENT
  return (
    // CONTAINER DIV WITH STYLING CLASSES
    <div className='flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5'>
      {/* LEFT SECTION CONTAINER */}
      <div className='flex items-center'>
        {/* NEXT.JS IMAGE COMPONENT */}
        <Image
          src={'/fire.jpg'} // IMAGE SOURCE PATH
          alt='fire' // ALT TEXT FOR ACCESSIBILITY
          width={200} // IMAGE WIDTH
          height={200} // IMAGE HEIGHT
          className='w-32 h-32 rounded-full mr-5' // ADDITIONAL STYLING FOR THE IMAGE COMPONENT
        />
        {/* TEXT CONTENT CONTAINER */}
        <div className='text-xl'>
          {/* BOLD HEADING */}
          <p className='font-bold'>Get access to exclusive deals</p>
          {/* SUBHEADING */}
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      {/* RIGHT SECTION CONTAINER */}
      <div className='flex'>
        {/* EMAIL INPUT FIELD */}
        <input
          type='email'
          className='px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300'
          placeholder='e.g. john@gmail.com'
        />
        {/* NOTIFY BUTTON */}
        <button
          type='submit'
          className='w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer'
        >
          Notify
        </button>
      </div>
    </div>
  )
}

// EXPORTING THE HEADER4 COMPONENT AS THE DEFAULT EXPORT
export default Header4
