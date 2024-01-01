// IMPORTING NECESSARY COMPONENTS AND LIBRARIES
'use client'

import Image from 'next/image'
import Block from './Block'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// HEADER1 COMPONENT DEFINITION
const Header1 = () => {
  // STATE TO MANAGE USER AUTHENTICATION STATUS
  const [auth, setAuth] = useState(false)

  // USEEFFECT TO CHECK USER AUTHENTICATION STATUS ON COMPONENT MOUNT
  useEffect(() => {
    // CHECK IF 'USER' COOKIE EXISTS
    const key = Cookies.get('user')
    if (key) {
      // IF COOKIE EXISTS, SET AUTHENTICATION TO TRUE
      setAuth(true)
      return
    }
    // IF COOKIE DOESN'T EXIST, SET AUTHENTICATION TO FALSE
    setAuth(false)
  }, [auth])

  // INITIALIZE NEXT.JS ROUTER
  const router = useRouter()

  // FUNCTION TO HANDLE USER LOGOUT
  const handleLogout = () => {
    // REMOVE 'USER' COOKIE ON LOGOUT
    Cookies.remove('user')
    // SET AUTHENTICATION STATUS TO FALSE
    setAuth(false)
    // REDIRECT TO THE HOME PAGE
    router.push('/')
  }

  // RENDER THE HEADER COMPONENT
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
      {/* OYO LOGO */}
      <Image
        src={'/logo.png'}
        alt='logo'
        width={200}
        height={200}
        className='w-28 h-28'
      />
      {/* NAVIGATION BLOCK SECTION */}
      <div className='h-full flex'>
        <Block title={'Become a member'} para={'Additional 0% off on stays.'} />
        <Block
          title={'OYO for business'}
          para={'Trusted by 5000 corporates.'}
        />
        <Block title={'List your property'} para={'Start earning in 30 min.'} />
        <Block title={'987654321'} para={'Call us to book now.'} />
        {/* USER AUTHENTICATION SECTION */}
        <div className='flex items-center px-3 '>
          <Image
            src={'/demo.svg'}
            alt='demo'
            width={200}
            height={200}
            className='w-10 h-10 rounded-full mr-5'
          />
          {/* CONDITIONAL RENDERING BASED ON AUTHENTICATION STATUS */}
          {auth ? (
            // RENDER LOGOUT OPTION IF AUTHENTICATED
            <h3 className='font-bold cursor-pointer' onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            // RENDER LOGIN/SIGNUP LINK IF NOT AUTHENTICATED
            <Link href={'/login'} className='font-bold'>
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// EXPORT THE HEADER1 COMPONENT AS THE DEFAULT EXPORT
export default Header1
