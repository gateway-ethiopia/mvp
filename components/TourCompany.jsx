import React from 'react'

export default function TourCompany({ img, title }) {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl px-8 pt-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <div class="card-actions justify-between flex">
          <button class="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  )
}
