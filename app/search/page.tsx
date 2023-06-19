import Navigation from '@/components/navigation'
import SearchCard from '@/components/search/card'
import SearchHeader from '@/components/search/header'
import SearchSidebar from '@/components/search/sidebar'

export default function Search () {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navigation />
        <SearchHeader />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSidebar />
          <div className='w-5/6'>
            <SearchCard />
          </div>
        </div>
      </main>
    </main>
  )
}
