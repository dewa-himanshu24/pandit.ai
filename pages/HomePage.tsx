import React, { Fragment } from 'react'

import Navbar from './Navbar'
import PoojaList from './PoojaList'

const HomePage = (props: { name: string }) => {
  return (
    <Fragment>
      <Navbar isLoggedIn={true} />
      <div
        className="relative z-10 overflow-hidden pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                <h1 className="text-4xl font-semibold text-black">Welcome {props.name} please select a pooja to start</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">

            <PoojaList />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default HomePage