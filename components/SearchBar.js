import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import { DateRangePicker } from 'react-date-range'

function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  }
  const handelSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate)
    setEndDate(ranges.Selection.endDate)
  }

  return (
    <header className="z-10 p-5 shadow-md top-0 flex flex-col  items-center">
      <div className="py-2 md:shadow-sm md:border-2 flex items-center rounded-full px-3 w-[800px]">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-lg sm: w-12 text-white"
        />
        <SearchIcon className="w-8 bg-primary-400 text-white rounded-full p-2 hidden md:inline-flex mx-2 cursor-pointer" />
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-3 bg-white p-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['rgb(100, 26, 230)']}
            onChange={handelSelect}
          />
        </div>
      )}
    </header>
  )
}

export default SearchBar
