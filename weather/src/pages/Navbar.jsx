import React from "react";

export default function Navbar() {
  return (
    <div className="flex py-2 justify-between px-6 bg-gray-200 font-semibold drop-shadow-xl">
      <div className="text-2xl">Weather</div>
      <div className="">{/* search bar component */}</div>
      <div className="gap-4">
        <nav className="space-x-5">
          <a href="#">About</a>
        </nav>
      </div>
    </div>
  );
}
