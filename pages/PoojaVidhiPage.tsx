import React, { Fragment } from 'react'
import Button from './components/UI/Button'
import Navbar from './Navbar'

const PoojaVidhiPage = (props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {
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
              <div>
                gg
              </div>
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
                    <h2
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      Pooja Vidhi - 1/21 {props.name}
                    </h2>
                    <h2
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      Bhagwan ko Pranam {props.name}
                    </h2>
                    <p className="mb-9 text-center leading-relaxed text-body-color">
                      Pehale bhagawn ko pranam karo aur "om ganeshay namah" bole.{props.description}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                gg
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PoojaVidhiPage