import type { NextPage } from 'next'

import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <header>
      <div className="fixed navbar bg-base-200 shadow-xl">
        <a className="btn btn-ghost normal-case text-xl">Gateway Ethiopia</a>
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
