import React from 'react'
import SearchBar from '../components/SearchBar'
import Package from '../components/Package'
function search() {
  return (
    <div className = 'h-screen w-screen bg-gray-300'>
        <h1>Search</h1>
        <div>
            <Package />
        </div>
    </div>
  )
}

export default search