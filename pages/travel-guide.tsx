import Head from 'next/head'

import {
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'

import NavBar from '../components/NavBar'
import Review from '../components/Review'
import Package from '../components/Package'

export default function TravelGuide() {
  return (
    <>
      <Head>
        <title>Timeless Ethiopia</title>
      </Head>
      <NavBar />
      <div
        className="w-full h-[600px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/afar-salt.jpg)' }}
      />
      <div>
        <div className="container px-4 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="col-span-2 prose lg:prose-xl">
            <h3>Timeless Ethiopia</h3>
            <p>
              Timeless Ethiopia Travel Agency is a privately-owned business
              organization of the tourist industry. We offer a wide assortment
              of organized tours to our extraordinarily interesting country.
              Upon request, we can organize any trip to Ethiopia, for any
              desired group, a company, or individual tourists. We always
              customize our proposals bearing in mind the needs of our
              customers. The company was established in the year 2005, but,
              despite that that, it is already in the possession of the enormous
              store of experience in the Ethiopian market. There are few
              Ethiopian travel agency with such a sustained experience.
            </p>
          </article>
          <section className="col-span-1">
            <div className="shadow-xl bg-base-200 p-4">
              <h1>Contact information</h1>

              <div className="my-4 flex gap-2 align-bottom">
                <PhoneIcon className="w-5 stroke-primary" />
                <span className="text-lg">+251 118 889 695</span>
              </div>
              <div className="my-4 flex gap-2 align-bottom">
                <LocationMarkerIcon className="w-5 stroke-primary" />
                <span className="text-lg">Addis Ababa, Ethiopia</span>
              </div>
              <div className="my-4 flex gap-2 align-bottom">
                <MailIcon className="w-5 stroke-primary" />
                <span className="text-lg">tours@timelessethiopia.com</span>
              </div>
              <div className="my-4 flex gap-2 align-bottom">
                <GlobeIcon className="w-5 stroke-primary" />
                <span className="text-lg">www.timelessethiopia.com</span>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-base-200">
          <div className="container px-4 mx-auto py-10">
            <h1 className="my-10 text-2xl">Packages we provide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Package img="/coffee.avif" title="COFFEE & TEA TOUR in ETHIOPIA">
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
              <Package
                img="/lalibela.avif"
                title="Historic Route & Lalibela Tour"
              >
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
              <Package
                img="/hawassa.webp"
                title="South Ethiopia Tour Omo Valley Tribes"
              >
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
            </div>
          </div>
        </section>
        <section>
          <div className="container px-4 mx-auto py-10">
            <h1 className="my-10 text-2xl">Reviews and Ratings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Review
                name="Leasly Doe"
                title="Unforgettable experience"
                avatar="https://api.lorem.space/image/face?random=1"
              >
                I had pleasure to join two tours North and South Ethiopia . Both
                was really great!!! The same country but so different .....Omo
                valley is really interesting however people there are getting
                paid for white people. North Ethiopia is orthodox catholic
                story. Andrzej our guide has a lots of knowledge about Africa.
                Thanks a lot Tomeless Ethiopia
              </Review>

              <Review
                name="Dakota Jones"
                title="Fantastic"
                avatar="https://api.lorem.space/image/face?random=2"
              >
                "The tour was very nice is the best travel we have they have a
                lot of experience and they know exactly what to do the guides
                were very knowledgeable the driver abdou was a nice guy very
                friendly. It was a experience of a lifetime it was amazing."
              </Review>
              <Review
                name="Charlie Kelly"
                title="Excellent Service!!!"
                avatar="https://api.lorem.space/image/face?random=3"
              >
                My wife and I came back recently from our trip to Ethiopia,
                where we had the opportunity to go from Timeless Ethiopia to the
                Omo Valley, Siemen and Harar. If you plan to book a guided tour
                to Ethiopia, I highly recommend Timeless Ethiopia! Habtamu Mamo,
                the owner of TE is also the owner of the Heyday hotel in Addis
                Ababa. Therefore, it is not a company whose only potential is a
                website and a mobile phone. And there are unfortunately many
                such in Ethiopia
              </Review>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
