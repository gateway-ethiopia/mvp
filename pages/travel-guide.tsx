import NavBar from '../components/NavBar'

import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  GlobeIcon,
} from '@heroicons/react/outline'

import Package from '../components/Package'
import Head from 'next/head'

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
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="container mx-auto py-10">
            <h1 className="my-10 text-2xl">Packages we provide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Package
                img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
                title="COFFEE & TEA TOUR in ETHIOPIA"
              >
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
              <Package
                img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
                title="Historic Route & Lalibela Tour"
              >
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
              <Package
                img="https://i0.wp.com/www.ethiopiaobserver.com/wp-content/uploads/2019/06/DSC02363.jpg?fit=2160%2C1620&ssl=1"
                title="South Ethiopia Tour Omo Valley Tribes"
              >
                Drinking coffee (which in the Amharic language is called{' '}
                <b>buna</b>) is an essential element of culture in Ethiopia.
                Join us on a coffee and tea trip to Ethiopia."
              </Package>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
