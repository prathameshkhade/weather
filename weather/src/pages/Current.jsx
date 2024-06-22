import React from 'react'

export default function Current() {
  return (
    <div className='flex items-center justify-between px-4'>
      <div className="bg-gray-200 rounded-xl w-[200px] h-[170px] m-2 p-2 devide devide-y text-left backdrop-blur-sm bg-white/30 flex flex-col">
        <div className="text-2xl font-semibold text-sky-500">Now</div>
        <div className="text-xl font-semibold">
          <span className='text-7xl font-bold'>
            25 
            <span>&deg;</span>
          </span>
        </div>
        <div className="text-lg my-2 font-semibold">
          Low: 20 <span className="-ml-1">&deg;</span> 
          <span className="font-extrabold text-xl mx-1">&middot;</span>
          High: 30 <span className="-ml-1">&deg;</span>
        </div>

      </div>
        <div className="">
          <Summery />
        </div>
    </div>
  )
}

// Summery component
function Summery() {
  return(
    <div className="bg-gray-200 rounded-xl px-4 py-3 text-left font-semibold backdrop-blur-sm bg-white/30">
      <div className="text-2xl">
        Mostly cloudy
      </div>
      <div className="text-slate-700 leading-loose">
        Feels like 31&deg;
      </div>
    </div>
  )
}