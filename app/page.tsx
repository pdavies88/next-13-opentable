'use client'
import Header from '@/components/global/header'
import Card from '@/components/global/restaurantCard'
import reportAccessibility from './utils/reportAccessibility'
import React from 'react'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  reportAccessibility(React)
}

export default function Home () {
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        <Card />
      </div>
    </main>
  )
}
