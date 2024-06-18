import React, { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <div className="flex align-items-center py-2 justify-between px-6 bg-gray-200 font-semibold drop-shadow-lg">
      <div className="text-2xl">Weather</div>
      <div className="">
        <Search />
      </div>
      <div className="gap-4">
        <nav className="space-x-5">
          <a href="#.">About</a>
        </nav>
      </div>
    </div>
  );
}

// Search bar component
function Search() {
  let [location, setLocation] = useState('')

  useEffect((e) => {
    // logic of search
  }, [location])

  return (
    <div className="">
      <input type="text" placeholder="Search" value={location} onChange={(event) => setLocation(event.target.value)} 
          className="rounded-2xl px-2 w-[250px] h-[30px] text-center text-black"
      />
    </div>
  )
}
