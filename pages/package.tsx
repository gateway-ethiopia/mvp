import Head from 'next/head'
import { ReactNode } from 'react'

import NavBar from '../components/NavBar'

export default function Package() {
  return (
    <>
      <Head>
        <title>View Package</title>
      </Head>
      <NavBar />
      <section className="grid grid-cols-2">
        <section className="py-10 px-10">
          <h1 className="text-4xl font-bold mb-5">
            South Ethiopia Tour Omo Valley Tribes
          </h1>

          <section className="grid grid-cols-1 gap-4">
            <Step num={1} title="National Museum of Ethiopia">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              libero id nesciunt, repudiandae praesentium dicta quibusdam
              expedita magnam beatae deleniti?
            </Step>
          </section>
        </section>
        <section className="h-screen">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?output=embed"
          />
        </section>
      </section>
    </>
  )
}

function Step({
  num,
  title,
  children,
}: {
  num: number
  title: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 card bg-base-200 p-4">
        <div className="flex">
          <div className="avatar placeholder mr-2 h-fit">
            <div className="bg-primary text-neutral-content rounded-full w-8">
              <span>{num}</span>
            </div>
          </div>
          <div>
            <h1 className="card-title">{title}</h1>
            <p className="card-text my-2">{children}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <a className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
      <div className="col-span-1 flex items-center">
        <img src="/gondar.jpg" className="w-fit rounded shadow-sm" />
      </div>
    </div>
  )
}
