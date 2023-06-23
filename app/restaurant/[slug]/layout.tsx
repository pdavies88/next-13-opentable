import RestaurantHeader from '@/components/restaurant/header'

const RestaurantLayout = ({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: string }
}) => {
  return (
    <>
      <RestaurantHeader name={params.slug} />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </>
  )
}

export default RestaurantLayout
