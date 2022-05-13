import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="relative gap-y-10 px-32 py-14 cursor-pointer bg-gray-100 grid grid-clos-1 md:grid-cols-4 text-gray-800 dark:bg-gray-800 dark:text-white">
        <div className="space-y-4 text-xs text-gray-800 dark:text-gray-100">
          <h3 className="font-bold">SUBSCRIBE</h3>
          <form action="">
          <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group">
              <span>Name</span>
              <input type="text" placeholder="your name" class="input input-bordered" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group">
              <span>Email</span>
              <input type="text" placeholder="info@site.com" class="input input-bordered" />
            </label>
            <button className = 'btn btn-primary w-60 mt-6'>Subscribe</button>
          </div>
          </form>
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
