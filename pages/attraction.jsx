import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl'
import NavBar from '../components/NavBar'
import EventCard from '../components/EventCard'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import TourCompany from '../components/TourCompany'
mapboxgl.accessToken =
  'pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA'

export default function Attraction() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(42.11926483234461)
  const [lat, setLat] = useState(9.317591348365555)
  const [zoom, setZoom] = useState(13)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  return (
    <>
      <Head>
        <title>Gateway Ethiopia || Attractions</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div>
        <NavBar />
        {/* silde banner */}
        <div className="relative top-0 h-[600px]  flex flex-col items-center">
          <img
            src="https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover "
          />
          <div className="absolute top-0 bg-black h-[100%] w-[100%] bg-opacity-40" />
          <div className="absolute top-[20%] px-5 py-2text-center w-[1000px] space-y-10">
      
          </div>
        </div>
        {/* About Section */}
        <div className=" mt-20 flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold ">
            About{' '}
          </h1>
          <p className="w-[1200px] text-lg ">
          Found in the Eastern part of Ethiopia, along the road towards
              Djibouti, Harar is by far the most significant Islamic community
              in Ethiopia and offers a fascinating contrast to the
              Christian-dominated historical sites in the North of the country.
              Dating back to 1520, Harar is now a UNESCO World Heritage Site and
              for those who have the time and inclination it’s well worth a
              visit to see a totally different side of Ethiopia. Harum aliquam delectus repudiandae
            error incidunt eaque, dolore nulla ad nesciunt perspiciatis
            laudantium magnam sunt illo fugiat, accusantium inventore veniam est
            cumque.100Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Harum aliquam delectus repudiandae error incidunt eaque, dolore
            nulla ad nesciunt perspiciatis laudantium magnam sunt illo fugiat,
            accusantium inventore veniam est cumque.100
          </p>
        </div>
        {/* Event */}
        <div className="mt-20 flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold ">
            {' '}
            Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-9 md:gap-y-9 space-y-9 md:space-y-0">
            <EventCard
              img="https://onestep4ward.com/wp-content/uploads/2015/08/DSC01129-2.jpg"
              title="Hyena Feeding"
              desc="It turns out the tradition of feeding wild hyenas in Harar dates back decades. They used to leave food offerings in the hills so the hyenas wouldn't eat the livestock in times of drought. Someone had the bright idea of luring the hyenas to the old city of Harar and then feeding them meat as a tourist display."
              date="May 14 2022"
            />
            <EventCard img='https://www.aspireethiopiatours.com/wp-content/uploads/2020/05/Kulbi.jpg' title = 'kulubi gebreal' desc = 'Kulubi is known for its large church, dedicated to St. Gabriel, which is the site of massive twice-yearly pilgrimages (on 26 July and 28 December) attended by tens of thousands of Orthodox pilgrims.' date = 'July 26 2022'/>
          </div>
        </div>
        {/* shoping */}
        <div className="mt-20 flex flex-col items-center px-8">
          <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold">
            Related Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-9 md:gap-y-9 space-y-9 md:space-y-0">
            <ProductCard
              price={10}
              img="https://c8.alamy.com/comp/2A9JB9E/ethiopia-east-hararghe-harar-interior-of-rewda-guest-house-traditional-decor-of-woven-baskets-2A9JB9E.jpg"
              title="Home WallArt"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eum.
            </ProductCard>
            <ProductCard
              price={20}
              img="https://d2j6dbq0eux0bg.cloudfront.net/images/16648100/1598115045.jpg"
              title="Harar Cultural Cloth"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eum.
            </ProductCard>
            <ProductCard
              price={100}
              img="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harar-market-yoseph-abate.jpg"
              title="Harar Market Painting"
            >
              Harar Market Painting
            </ProductCard>
          </div>
        </div>
        {/* map */}
        <div className="mt-5">
          <div ref={mapContainer} className="h-[400px]" />
        </div>
        {/* TourCompany */}
        <div className="mt-20 flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold ">
            {' '}
            Tour Companies
          </h1>
        <div className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-9 md:gap-y-9 space-y-9 md:space-y-0'>
          <TourCompany img = 'https://www.timelessethiopia.com/images/xlogo.png.pagespeed.ic.YR6CgfekbN.webp' title = 'Timeless Ethiopia' />
          <TourCompany img = 'https://www.imagineethiopiatours.com/images/logo.svg' title = 'Imagine Ethiopia Tours'/>
        </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  )
}
