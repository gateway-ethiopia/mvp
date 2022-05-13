import type { NextPage } from 'next'
import Head from 'next/head'

import NavBar from '../components/NavBar'
import Package from '../components/Package'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gateway Ethiopia</title>
      </Head>
      <header>
        <NavBar />

        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(/baner.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="absolute top-20">
            <SearchBar />
          </div>
          <div className="hero-content text-center">
            <div className="max-w-md text-white">
              <h1 className="text-5xl font-bold ">Choose your next destination</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-32">
        <h1 className="text-5xl mb-10">Popular Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Package img="/coffee.avif" title="COFFEE & TEA TOUR in ETHIOPIA">
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
          <Package img="/lalibela.avif" title="Historic Route & Lalibela Tour">
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
          <Package
            img="/hawassa.webp"
            title="South Ethiopia Tour Omo Valley Tribes"
          >
            Drinking coffee (which in the Amharic language is called <b>buna</b>
            ) is an essential element of culture in Ethiopia. Join us on a
            coffee and tea trip to Ethiopia."
          </Package>
        </div>
      </main>

      <main className="container mx-auto px-4 py-32">
        <h1 className="text-5xl mb-10">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </main>
      <Footer />
    </>
  )
}

export default Home
