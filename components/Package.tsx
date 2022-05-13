import { ReactNode } from 'react'

export default function Package({
  img,
  title,
  children,
}: {
  img: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div
        className="w-full h-96 bg-blue-400 bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="card-actions justify-between items-center">
          <div className="rating">
            <input
              disabled={true}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              disabled={true}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              disabled={true}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              disabled={true}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              disabled={true}
              type="radio"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <button className="btn btn-primary hover:shadow-md">Read More</button>
        </div>
      </div>
    </div>
  )
}
