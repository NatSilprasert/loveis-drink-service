import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='border border-gray-400/50 rounded-xl'>
        <Image className="object-cover rounded-t-xl" src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/484048727_643735608415427_3716085843766740198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-iUfn5qT2hbJc0ILKMSJVjzvNmBxXlk6PO82YHFeWTrlQatRV-VOkc2QhCm4DAj3AXbqhcoKoBXhhrXfDd5GA&_nc_ohc=kj-671FcfAYQ7kNvwGYhQtZ&_nc_oc=AdkicRhz7Evp95f0knWHzSlmh2BqbVOW22ot_ZHrXyra4WFzdnBE6vmnNGo77tTUQw7RztNLZO3plnyJ5k__xazu&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=pN1qaGMIqKBPpyuEnvZxhg&oh=00_AfP3YsDRmrCwfzlvBIcLjnqxf11XPB_tFracV5RF13VPrw&oe=6858500C" alt="image" width={256} height={256}  />
        <div className='flex flex-col mx-2 my-3 gap-1'>
            <b>Cappuccino</b>
            <p className='text-xl'>฿100</p>
        </div>
    </div>
  )
}

export default ProductCard
