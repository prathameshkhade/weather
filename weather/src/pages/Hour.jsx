import React from 'react'

export default function Hour() {
  return (
    <div className='w-[96vw] h-[150px] max-h-[170px] rounded-xl bg-gray-200 flex gap-3 mx-auto m-4 p-3 font-semibold text-md overflow-x-auto snap-x backdrop-blur-sm bg-white/30 drop-shadow-2xl'>
        <div className="border border-black border-1 rounded-xl bg-gray-200 min-w-24 max-w-28 text-center p-2 snap-center hover:scale-105 hover:drop-shadow-2xl duration-500">
          <p>25&deg;</p>
          <div className="border">img</div>
          <p className="uppercase">12 pm</p>
        </div>
    </div>
  )
}
