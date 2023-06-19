import ReserveForm from '@/components/reserve/form'
import ReserveHeader from '@/components/reserve/header'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reserve Page'
}

export default function Reservation () {
  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  )
}
