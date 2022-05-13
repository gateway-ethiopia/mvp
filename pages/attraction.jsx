import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl'


import EventCard from '../components/EventCard'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

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
        {/* silde banner */}
        <div className="relative top-0 h-[600px]  flex flex-col items-center">
          <img
            src="https://s3-eu-west-1.amazonaws.com/images.farandwild.travel/HARAR-GATES-ETB.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover "
          />
          <div className="absolute top-0 bg-black h-[100%] w-[100%] bg-opacity-40" />
          <div className="absolute top-[20%] px-5 py-2text-center w-[1000px] space-y-10">
            <p className="text-3xl z-20 text-white font-bold">Harar</p>
            <p className="text-left text-xl text-white">
              Found in the Eastern part of Ethiopia, along the road towards
              Djibouti, Harar is by far the most significant Islamic community
              in Ethiopia and offers a fascinating contrast to the
              Christian-dominated historical sites in the North of the country.
              Dating back to 1520, Harar is now a UNESCO World Heritage Site and
              for those who have the time and inclination it’s well worth a
              visit to see a totally different side of Ethiopia.
            </p>
          </div>
        </div>
        {/* About Section */}
        <div className=" mt-20 flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold ">
            About{' '}
          </h1>
          <p className="w-[1200px] text-lg ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            aliquam delectus repudiandae error incidunt eaque, dolore nulla ad
            nesciunt perspiciatis laudantium magnam sunt illo fugiat,
            accusantium inventore veniam est cumque.100Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Harum aliquam delectus
            repudiandae error incidunt eaque, dolore nulla ad nesciunt
            perspiciatis laudantium magnam sunt illo fugiat, accusantium
            inventore veniam est cumque.100Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Harum aliquam delectus repudiandae
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
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        {/* shoping */}
        <div className="mt-20 flex flex-col items-center px-8">
          <h1 className="font-bold text-4xl mb-8 first-letter:text-[#570df8] first-letter:font-extrabold">
            Featured Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-9 md:gap-y-9 space-y-9 md:space-y-0">
            <ProductCard
              price={10}
              img="https://haddisart.com/uploads/arts/1650401598286-art-IMG_20220304_230651_530.jpg"
              title="Lion of judah"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eum.
            </ProductCard>
            <ProductCard
              price={20}
              img="https://haddisart.com/uploads/arts/1626174297764-art-FB_IMG_16260666812065696.jpg"
              title="Wall clock string art"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eum.
            </ProductCard>
            <ProductCard
              price={30}
              img="https://haddisart.com/uploads/arts/1647367030924-art-IMG_6347.JPG"
              title="Mama Africa"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, eum.
            </ProductCard>
          </div>
        </div>
        {/* map */}
        <div className="mt-5">
          <div ref={mapContainer} className="h-[400px]" />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  )
}
