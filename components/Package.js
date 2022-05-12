import React from 'react'

export default function Package() {
  return (
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Hawassa</h2>
    <p>Awasa, also called Hawassa, is a city in the Great Rift Valley of central Ethiopia. It lies at the eastern edge of large Lake Awasa, with its resident hippos.</p>
    <div class="card-actions justify-end space-x-20">
        <div>
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
        </div> 
      <button class="btn btn-primary hover:shadow-md">Buy Now</button>
    </div>
  </div>
</div>
  )
}
