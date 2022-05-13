import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="relative gap-y-10 px-32 py-14 cursor-pointer bg-gray-100 grid grid-clos-1 md:grid-cols-4 text-gray-800 dark:bg-gray-800 dark:text-white">
        <div className="space-y-4 text-xs text-gray-800 dark:text-gray-100">
          <h3 className="font-bold">ABOUT</h3>
          <p className="hover:text-primary">How Gateway Ethiopia works</p>
          <p className="hover:text-primary">News room</p>
          <p className="hover:text-primary">Investors</p>
          <p className="hover:text-primary">Gateway Ethiopia Plus</p>
          <p className="hover:text-primary">Gateway Ethiopia Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 dark:text-gray-100">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="hover:text-primary">Accessibility</p>
          <p className="hover:text-primary">Referrals acceptes</p>
          <p className="hover:text-primary">GatewayEthiopia</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 dark:text-gray-100">
          <h3 className="font-bold">HOST</h3>
          <p className="hover:text-primary">GatewayEthiopia</p>
          <p className="hover:text-primary">Presents</p>
          <p className="hover:text-primary">Thousands of subscribers</p>
          <p className="hover:text-primary">Subscribe Now</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 dark:text-gray-100">
          <h3 className="font-bold">SUPPORT</h3>
          <p className="hover:text-primary">Help Center</p>
          <p className="hover:text-primary">Trust & Safety</p>
          <p className="hover:text-primary">Come Vist Ethiopia</p>
          <p className="hover:text-primary">+251993534293</p>
          <p className="hover:text-primary">GatewayEthiopia@gmail.com</p>
        </div>
        <p>&copy; 2022 GatewayEthiopia</p>
      </footer>
    </>
  )
}
