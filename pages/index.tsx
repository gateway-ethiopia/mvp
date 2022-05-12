import type { NextPage } from 'next'

import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <header>
      <div className="fixed navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Gateway Ethiopia</a>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
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
        <div className="hero-content text-center text-neutral-content h-60">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export default Home
