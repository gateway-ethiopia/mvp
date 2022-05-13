import Head from 'next/head'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SearchResultCard from '../components/SearchResultCard'

export default function Search() {
  return (
    <>
      <Head>
        <title>Search results</title>
      </Head>

      <NavBar />

      <section className="container px-4 mx-auto">
        <h1 className="my-6 text-2xl">
          Search results for <b className="text-primary font-bold">Valley</b>
        </h1>
      </section>
      <section className="container px-4 mx-auto min-h-screen">
        <SearchResultCard
          img="https://www.timelessethiopia.com/images/tours/xtrip_south_ethiopia_omo.jpg.pagespeed.ic.gpH2yzc_dS.webp"
          title="South Ethiopia Tour Omo Valley Tribes"
          durationInDays={12}
          numOfAttractions={4}
        >
          This trip to the South Omo as some kind of living Museum. Four of
          Africa's major linguistic groups are represented in the region,
          including the Omotic-speakers. All in all, depending on where one
          draws the lines, as many as two dozen different tribes occupy South
          Omo. Some numbering tens of thousands, others no more than 500, each
          one of them culturally unique.
        </SearchResultCard>
        <SearchResultCard
          img="https://www.timelessethiopia.com/images/tours/xtrip_afar_awash.jpg.pagespeed.ic.xcyqq2RGmr.webp"
          title="Danakil Depression & Harar Trip"
          durationInDays={10}
          numOfAttractions={5}
        >
          This trip is designed to admire the natural beauty of the Afar
          Triangle (also called the Afar Depression or the Danakil Depression)
          is a geological depression that is caused by the Afar Triple Junction
          which is part of the Great Rift Valley. The Afar Triangle includes the
          Danakil Depression and the lowest point in Africa, Lake Asal ; And
          culture tour of the walled city of Harar.
        </SearchResultCard>
      </section>

      <Footer />
    </>
  )
}
