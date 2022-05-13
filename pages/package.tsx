import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Package() {
  return (
    <>
      <Head>
        <title>View Package</title>
      </Head>
      <NavBar />
      <section className="grid grid-cols-3">
        <section className="col-span-2 pt-10 pb-36 px-10 h-screen overflow-scroll">
          <h1 className="text-4xl font-bold mb-5">
            South Ethiopia Tour Omo Valley Tribes
          </h1>

          <section className="grid grid-cols-1 gap-4">
            <Step
              num={1}
              title="Addis Ababa"
              img="https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            >
              Addis Ababa, Ethiopia's sprawling capital in the highlands
              bordering the Great Rift Valley, is the country's commercial and
              cultural hub. Its National Museum exhibits Ethiopian art,
              traditional crafts and prehistoric fossils, including replicas of
              the famous early hominid, "Lucy." The burial place of the
              20th-century emperor Haile Selassie, copper-domed Holy Trinity
              Cathedral, is a neo-baroque architectural landmark.
            </Step>
            <Step
              num={2}
              title="National Museum of Ethiopia"
              img="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/KToNrXJo71q6sTkMmbR5IuQ2IcpKGIKB"
            >
              The National Museum of Ethiopia, also referred to as the Ethiopian
              National Museum, is a national museum in Ethiopia. It is located
              in the capital, Addis Ababa, near the Addis Ababa University's
              graduate school.
            </Step>

            <Step
              num={3}
              title="Awassa"
              img="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ3dYP-R5HKWzG_BGQ3APUka0TXnRTmMpltyj1mepAN1hJMuENcNPFobap8_yw9"
            >
              Awasa, also called Hawassa, is a city in the Great Rift Valley of
              central Ethiopia. It lies at the eastern edge of large Lake Awasa,
              with its resident hippos. Water birds gather around a popular fish
              market along the lake's shore. Nearby, the waterside Amora Gedel
              National Park is inhabited by monkeys. To the northwest, Senkele
              Swayne’s Hartebeest Sanctuary is home to these endangered African
              antelopes.
            </Step>
            <Step
              num={4}
              title="Arba Minch"
              img="https://www.walkinethiopia.com/media/k2/items/cache/36fdb1a35cd2f54f95cf2119fb5bc7ed_XL.jpg"
            >
              Arba Minch is a city and separate woreda in the southern part of
              Ethiopia. "Arba Minch" means "40 Springs" the name was originated
              from the presence of more than 40 springs.
            </Step>
          </section>
        </section>

        <section className=" col-span-1 h-screen overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?output=embed"
          />
        </section>
      </section>
      <Footer />
    </>
  )
}

function Step({
  img,
  num,
  title,
  children,
}: {
  img: string
  num: number
  title: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 card bg-base-200 p-4">
        <div className="flex">
          <div className="avatar placeholder mr-2 h-fit">
            <div className="bg-primary text-neutral-content rounded-full w-8">
              <span>{num}</span>
            </div>
          </div>
          <div>
            <h1 className="card-title">{title}</h1>
            <p className="card-text my-2">{children}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <a className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
      <div className="col-span-1 flex items-center">
        <img src={img} className="w-fit rounded shadow-sm" />
      </div>
    </div>
  )
}
