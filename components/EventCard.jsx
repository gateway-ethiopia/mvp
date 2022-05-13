import React from 'react'

export default function EventCard({ img, desc, date, title }) {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{desc}</p>
        <div class="card-actions justify-between flex">
          <div>
            <p className="text-sm text-gray-400">starting date</p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
          <button class="btn btn-primary">Join</button>
          <button class="btn btn-primary">Tickets</button>
        </div>
      </div>
    </div>
  )
}
