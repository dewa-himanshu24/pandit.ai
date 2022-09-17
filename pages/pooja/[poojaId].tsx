import React, { Fragment } from 'react'
import Button from '../components/UI/Button';
import { DUMMY_POOJAS } from '../../public/data';

import Navbar from '../Navbar';
import Link from 'next/link';


const PoojaPage = (props: { id: string ; name: string ; description: string ; }) => {

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
                      {props.name}
                    </h2>
                    <p className="mb-9 text-center leading-relaxed text-body-color">
                      {props.description}
                    </p>
                    <Link href={`/pooja/${props.id}/poojavidhi/1`}><a><Button classes="" value="Aarti Shuru Karen" onClickHandler={()=>{}} /></a></Link>
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

export async function getStaticProps(context: {params: { poojaId: string ; };}) {
  const poojaDetails = DUMMY_POOJAS[context.params.poojaId]
  

  return {
    props: {
      id: poojaDetails.id,
      name: poojaDetails.name,
      description: poojaDetails.description
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      "/pooja/1","/pooja/2"
    ],
    fallback: true,
  }
}
export default PoojaPage