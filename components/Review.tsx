import { ReactNode } from 'react'

export default function Review({
  name,
  title,
  avatar,
  children,
}: {
  name: string
  title: string
  avatar: string
  children: ReactNode
}) {
  return (
    <div className="card bg-base-200 p-4">
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img src={avatar} />
        </div>
        <p className="m-2 text-xl font-bold">{name}</p>
      </div>

      <article className="my-4 prose prose-sm">
        <h3>{title}</h3>
        <p>{children}</p>
      </article>

      <div className="rating">
        <input
          type="radio"
          disabled={true}
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          disabled={true}
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          disabled={true}
          className="mask mask-star-2 bg-green-500"
        />
        <input
          type="radio"
          disabled={true}
          className="mask mask-star-2 bg-green-500"
          checked
        />
        <input
          type="radio"
          disabled={true}
          className="mask mask-star-2 bg-green-500"
        />
      </div>
    </div>
  )
}
