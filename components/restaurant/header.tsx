import React from 'react'

const RestaurantHeader = ({ name }: { name: string }) => {
  const formatName = () => {
    const vals = name.split('-')
    vals[vals.length - 1] = `(${vals[vals.length - 1]})`
    return vals.join(' ')
  }

  return (
    <div className='h-96 overflow-hidden'>
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
        <h1 className='text-7xl text-white capitalize text-shadow text-center'>
          {formatName()}
        </h1>
      </div>
    </div>
  )
}

export default RestaurantHeader
