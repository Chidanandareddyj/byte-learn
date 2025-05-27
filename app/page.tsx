import React from 'react'
import {Navbar} from '@/components/Navbar'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className=''>
      <main>
        <div className='bg-slate-500 min-h-screen flex flex-col'>
          <Navbar />
          <Hero />
        </div>
      </main>
    </div>
  )
}

export default page
