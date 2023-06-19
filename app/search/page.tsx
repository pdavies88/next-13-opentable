import SearchCard from '@/components/search/card'
import SearchHeader from '@/components/search/header'
import SearchSidebar from '@/components/search/sidebar'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Page'
}

export default function Search () {
  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          <SearchCard />
        </div>
      </div>
    </>
  )
}
