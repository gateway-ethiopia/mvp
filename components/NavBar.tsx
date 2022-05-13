import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.dataset.theme = 'dark'
    } else {
      document.body.dataset.theme = 'light'
    }
  }, [darkMode])

  return (
    <div className="z-30 fixed navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-primary">Gateway</span> Ethiopia
        </a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <SunIcon className="w-5 fill-primary" />
          ) : (
            <MoonIcon className="w-5 fill-primary" />
          )}
        </button>
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
  )
}
