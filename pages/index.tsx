import type { NextPage } from 'next'
import Head from 'next/head'

import Package from '../components/Package'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gateway Ethiopia</title>
      </Head>
      <header>
        <div className="fixed navbar bg-base-200">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Gateway Ethiopia
            </a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(/sample.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="absolute top-20">
            <SearchBar />
          </div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Lorem, ipsum dolor.</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-32">
        <h1 className="text-5xl mb-10">Popular Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Package
            img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
            title="COFFEE & TEA TOUR in ETHIOPIA"
          >
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
          <Package
            img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
            title="Historic Route & Lalibela Tour"
          >
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
          <Package
            img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
            title="South Ethiopia Tour Omo Valley Tribes"
          >
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
        </div>
      </main>
    </>
  )
}

export default Home
