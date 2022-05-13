import React from 'react'
import Attraction from '../components/Attraction'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
export default function attractionList() {
  return (
    <div>
      <NavBar />
      <h1 className = 'text-4xl text-center my-5'>Tourist Attractions</h1>
      <div className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 p-10'>
        <Attraction img = 'https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg' title = 'Harar' children ='Found in the Eastern part of Ethiopia, along the road towards Djibouti, Harar is by far the most significant'/>
        <Attraction img = 'https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Ethiopia-Lalibela-StGeorge-559224598-1440x823.jpg' title = 'Lalibela' children ='Lalibela (Amharic: ላሊበላ) is a town in the Amhara Region of Ethiopia. Located in the Lasta district and North Wollo Zone, it is a tourist site for its famous rock-cut monolithic churches. The whole of Lalibela is a large and important site for the antiquity, medieval, and post-medieval civilization of Ethiopia.[1] To Christians, Lalibela is one of Ethiopia'/>
        <Attraction img = 'https://onestep4ward.com/wp-content/uploads/2013/03/Blue-Nile-Falls-Bahir-Dar.jpg' title = 'Tis Abay' children ='The Blue Nile Falls is a waterfall on the Blue Nile river in Ethiopia. It is known as Tis Abay in Amharic, meaning "great smoke". It is situated on the upper course of the river, about 30 kilometres downstream from the town of Bahir Dar and Lake Tana. The falls are one of Ethiopia...'/>
      </div>
      <Footer />
    </div>
  )
}
