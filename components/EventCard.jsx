import React from 'react'

export default function EventCard() {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://onestep4ward.com/wp-content/uploads/2015/08/DSC01129-2.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Hyena Feeding</h2>
    <p>It turns out the tradition of feeding wild hyenas in Harar dates back decades. They used to leave food offerings in the hills so the hyenas wouldn't eat the livestock in times of drought. Someone had the bright idea of luring the hyenas to the old city of Harar and then feeding them meat as a tourist display.</p>
    <div class="card-actions justify-between flex">
        <div>
            <p className = 'text-sm text-gray-400'>starting date</p>
            <p className= 'text-sm text-gray-400'>May 14 2022</p>
        </div>
      <button class="btn btn-primary">Join</button>
    </div>
  </div>
</div>
    )
}
