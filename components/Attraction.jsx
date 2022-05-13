import Link from 'next/link'
import React from 'react'
function Attraction({img, title, children}) {
  return (
    
    <div className="card max-h-fit card-compact bg-base-100 shadow-xl">
      <div
        className="w-full h-96 bg-blue-400 bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="my-4 card-actions justify-between">
        <Link href="/attraction">
          <button className="btn btn-primary">See More</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Attraction