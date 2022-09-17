import Link from 'next/link';
import React, { Fragment } from 'react'
import { DUMMY_POOJAS } from '../../../../public/data';
import Navbar from '../../../Navbar'

import { useRouter } from 'next/router'
import Button from '../../../components/UI/Button';

const PoojaVidhiPage = (props: {
  totalVidhi: Number;
  vidhi: { id: number; name: string; description: string; }; poojaName: string; poojaId: string;
}) => {

  const router = useRouter()

  const handleNextClick = () => {
    if (props.vidhi?.id !== props.totalVidhi) {
      let url = `/pooja/${props.poojaId}/poojavidhi/${props.vidhi?.id + 1}`;
      router.push(url)
    }
  }

  const handlePreviousClick = () => {
    if (props.vidhi?.id !== 1) {
      let url = `/pooja/${props.poojaId}/poojavidhi/${props.vidhi?.id - 1}`;
      router.push(url)
    }
  }

  const handleCloseBtnClick = () => {
    let url = "/HomePage";
    router.push(url)
  }

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
                  className="relative items-center justify-center overflow-hidden border lg:flex"
                >
                <div className="absolute text-center top-0 right-0 px-2 cursor-pointer" onClick={handleCloseBtnClick}><p className="py-2">Aarti Samapt Karein</p></div>

                  <div className="basis-1/10  py-12 px-7 cursor-pointer" onClick={handlePreviousClick}>
                    <img src={props.vidhi?.id === 1 ? "/assets/images/left_angle_circle_icon_149919.png" : "/assets/images/left_arrow_angle_in_cular_icon_193329.png"} alt="left-pointing-arrow" />
                  </div>

                  <div
                    className="basis-8/10 w-full justify-center py-12 px-7"
                  >
                    <h1
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      {props.poojaName}
                    </h1>
                    <h2
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      Pooja Vidhi - {`${props.vidhi?.id}/${props.totalVidhi}`}
                    </h2>
                    <h3
                      className="mb-6 text-center text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                    >
                      {props.vidhi?.name}
                    </h3>
                    <p className="mb-9 text-center leading-relaxed text-body-color">
                      {props.vidhi?.description}
                    </p>

                    {props.vidhi?.id === props.totalVidhi ? <div onClick={handleCloseBtnClick}><Button classes="" value="Aarti Samapt Karein" onClickHandler={()=>{}} /></div> : null}
                  </div>

                  <div className="basis-1/10 justify-end py-12 px-7 cursor-pointer" onClick={handleNextClick}>
                    <img src={props.vidhi?.id === props.totalVidhi ? "/assets/images/right_angle_circle_icon_149877.png" : "/assets/images/right_arrow_angle_in_cular_icon_193348.png"} alt="left-pointing-arrow" />
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

export async function getStaticProps(context: { params: { poojaId: string; poojaVidhiId: number; }; }) {
  const poojaDetails = DUMMY_POOJAS[context.params.poojaId]

  return {
    props: {
      poojaId: poojaDetails.id,
      poojaName: poojaDetails.name,
      totalVidhi: poojaDetails.poojaVidhi.totalVidhi,
      vidhi: poojaDetails.poojaVidhi.vidhi[context.params.poojaVidhiId - 1]
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      "/pooja/1/poojavidhi/1",
      "/pooja/1/poojavidhi/2",
      "/pooja/1/poojavidhi/3"
    ],
    fallback: true,
  }
}

export default PoojaVidhiPage