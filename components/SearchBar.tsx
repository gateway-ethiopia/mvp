import { useState } from 'react'
import Link from 'next/link'
import { SearchIcon, UsersIcon, FilterIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { DateRangePicker } from 'react-date-range'

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [numberGust, setNumberGust] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  }

  return (
    <header className="z-20 p-5 flex flex-col items-center w-screen">
      <div className="py-2 border-2 flex items-center rounded-full px-3 container md:w-[800px]">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-lg text-white placeholder-white"
        />
        <SearchIcon className="w-8 bg-primary text-white rounded-full p-2 hidden sm:inline-flex mx-2 cursor-pointer" />
      </div>
      {searchInput && (
        <div className="z-10 flex col-span-3 mx-auto mt-3 bg-white p-4 space-x-10">
          <div className="flex flex-col col-span-3 mx-auto mt-3 bg-white p-4 space-x-10">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['rgb(100, 26, 230)']}
              onChange={(ranges) => {
                setStartDate(ranges.Selection.startDate)
                setEndDate(ranges.Selection.endDate)
              }}
              className="z-10"
            />
            <div className="flex text-sm font-semibold cursor-pointer">
              <button
                onClick={() => setSearchInput('')}
                className="flex-grow cursor-pointer"
              >
                Cancel
              </button>
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate?.toISOString(),
                    endDate: endDate?.toISOString(),
                  },
                }}
              >
                <button className="flex-grow text-primary cursor-pointer">
                  Search
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <FilterIcon className="w-7" />
              <h1 className="text-2xl font-semibold text-gray-700">Filter</h1>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-semibold ">Price</p>
              <div>
                <input
                  type="number"
                  placeholder="min"
                  className="w-32 outlin-enone pl-2 text-lg text-primary"
                />
                <input
                  type="number"
                  placeholder="max"
                  className="w-32 outlin-enone pl-2 text-lg text-primary"
                />
              </div>
            </div>
            <div className="form-control space-y-3">
              <p className="text-lg font-semibold ">Difficulty</p>
              <label className="cursor-pointer space-x-5 items-center flex ">
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-green-500"
                  checked
                />
                <span className="label-text">Easy</span>
              </label>
              <label className="cursor-pointer space-x-5 items-center flex ">
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-yellow-500"
                  checked
                />
                <span className="label-text">Medium</span>
              </label>
              <label className="cursor-pointer space-x-5 items-center flex ">
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-red-500"
                  checked
                />
                <span className="label-text">Hard</span>
              </label>
            </div>
            <div className="flex items-center border-b mb-4">
              <h2 className="p-2 flex-grow text-lg font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5 " />
              <input
                type="number"
                className="w-12 outlin-enone pl-2 text-lg text-primary"
                min="1"
                value={numberGust}
                onChange={(e) => setNumberGust(e.target.valueAsNumber)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default SearchBar
