import Header from '@/components/global/header'
import Card from '@/components/global/restaurantCard'

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
