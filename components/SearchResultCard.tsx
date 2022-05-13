import Link from "next/link";

import { ReactNode } from 'react'

const Square = ({ color, title }: { color: string; title: string }) => (
  <div className={`w-4 h-4 rounded inline ${color}`} title={title} />
)

export default function SearchResultCard({
  img,
  title,
  children,
  durationInDays,
  numOfAttractions,
}: {
  img: string
  title: string
  children: ReactNode
  durationInDays: number
  numOfAttractions: number
}) {
  const greenBox = <Square color="bg-green-400" title="Safe" />
  const yellowBox = <Square color="bg-yellow-400" title="Demanding" />
  const redBox = <Square color="bg-red-40" title="Risky" />

  return (
    <div className="mx-auto my-6 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="w-full h-full" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">
          {title}
          {greenBox}
        </h2>
        <p>{children}</p>

        <div className="card-actions justify-between">
          <div className="flex">
            <h5 className="bg-secondary font-bold text-white p-2 m-2 rounded-xl">
              {durationInDays} DAY{durationInDays > 1 ? 'S' : ''}
            </h5>
            <h5 className="bg-secondary font-bold text-white p-2 m-2 rounded-xl">
              {numOfAttractions} ATTRACTION{numOfAttractions > 1 ? 'S' : ''}
            </h5>
          </div>
          <Link href="/package">
            <a className="btn btn-primary">View Package</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
