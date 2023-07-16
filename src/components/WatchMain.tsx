import React from 'react'
import { FullVideoCard } from './cards'
import Image from 'next/image'
import FullVideoCardFooter from './cards/FullVideoFooter'
import { PublicKey } from '@solana/web3.js'
import RelatedVideos from './cards/RelatedVideos'
export default function WatchMain({vidId, data, loading, error}) {
    console.log("data", data)
  return (
    <div className='flex gap-2'>
    <div className='xl:w-[73vw]'>
        <FullVideoCard  video={data}  />

         <div className='my-4'>
            <h1 className='text-xl font-thin capitalize'>{data?.metadata?.content?.content?.title}</h1>
     <div className='flex justify-between items-center'>
             <div className='flex gap-2'>
               <div className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-700' >
             <Image  src={`https://i.imgur.com/uGv5Zca.jpg`} width={300} height={300} alt='profile' className='w-9 h-9 rounded-full'  />
             </div>
             <div>
                 <p className='text-lg font-thin capitalize'>abdul kabugu</p>
                  <p className='text-sm text-gray-400'>10 Followers</p>
             </div>
             </div>
             <button className='py-1.5 xs:px-4 xl:px-6 rounded-lg bg-fuchsia-600 font-thin '>Follow</button>
             </div> 

            <div>
          <FullVideoCardFooter  video={data} />
        </div>  
         </div>

          
    </div>
    <RelatedVideos   />
    </div>
  )
}
