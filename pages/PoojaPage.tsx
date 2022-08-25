import React, { Fragment } from 'react'
import Button from './components/UI/Button';

import Navbar from './Navbar';


const PoojaPage = (props: { name: string ; description: string ; }) => {
  return (
    <Fragment>
      <Navbar isLoggedIn={true} />
      <section
        id="about"
        className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
      >
        <div className="container py-20">
          <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div
                  className="items-center justify-center overflow-hidden border lg:flex"
                >
                  <div
                    className="w-full justify-center py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                  >
                    <h2
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      Daily Aarti {props.name}
                    </h2>
                    <p className="mb-9 text-center leading-relaxed text-body-color">
                      Pooja Vidhi for ghar mae daily ki aarti.{props.description}
                    </p>
                    <Button classes="" value="Aarti Shuru Karen" /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PoojaPage