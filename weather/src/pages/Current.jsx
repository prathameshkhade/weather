import React from 'react'

export default function Current() {
  return (
    <div className="bg-gray-200 rounded-xl w-[200px] h-[170px] m-2 p-2 devide devide-y text-left">
      <div className="text-2xl font-semibold text-sky-500">Now</div>
      <div className="text-xl font-semibold">
        <span className='text-7xl font-bold'>
          25 
          <span>&deg;</span>
        </span>
      </div>
      <div className="text-lg my-2 font-semibold">
        Low: 20 <span className="-ml-1">&deg;</span> 
        <span className="font-bold mx-1">&middot;</span>
        High: 30 <span className="-ml-1">&deg;</span>
      </div>
    </div>
  )
}
