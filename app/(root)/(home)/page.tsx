import BigCalender from '@/components/BigCalender'
import ItemCards from '@/components/ItemCards'
import NoticeBoard from '@/components/NoticeBoard'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='w-full'>
      {/* item cards */}
      <ItemCards/>
      </div>
      <div className='flex flex-row gap-5 min-h-screen'>
         {/* calender */}
         <div className='flex-1'>
         <BigCalender/>
         </div>
      {/* noticeboard */}
      <div>
      <NoticeBoard/>
      </div>
      </div>
     
    </div>
  )
}

export default Home