import React from 'react'
import Attraction from '../components/Attraction'
import NavBar from '../components/NavBar'
export default function attractionList() {
  return (
    <div>
      <NavBar />
      <h1 className = 'text-4xl text-center my-5'>Tourist Attractions</h1>
      <div className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 p-10'>
        <Attraction img = 'https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg' title = 'Harar' children ='Found in the Eastern part of Ethiopia, along the road towards Djibouti, Harar is by far the most significant'/>
        <Attraction img = 'https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg' title = 'Harar' children ='Found in the Eastern part of Ethiopia, along the road towards Djibouti, Harar is by far the most significant'/>
        <Attraction img = 'https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg' title = 'Harar' children ='Found in the Eastern part of Ethiopia, along the road towards Djibouti, Harar is by far the most significant'/>
      </div>
    </div>
  )
}
