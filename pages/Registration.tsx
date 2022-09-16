import React from 'react'

import Link from 'next/link'
import Navbar from './Navbar'
import Button from './components/UI/Button'

const Registration = () => {
  return (
    <>
      <Navbar isLoggedIn={false} />
      <section className="bg-[#F4F7FF] py-14 lg:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-14 px-8 text-center sm:px-12 md:px-[60px]"
                data-wow-delay=".15s"
              >
                <div className="mb-10 text-center">
                  <div className="mx-auto inline-block max-w-[160px]">
                    <p className="max-w-[160px]">Registration</p>
                  </div>
                </div>
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <Button value="Sign Up" classes="" onClickHandler={()=>{}} />
                </form>
                <p className="mb-6 text-base text-[#adadad]">
                  <br />
                  OR</p>

                <p className="text-base text-[#adadad]">
                  Already have an account? <u><Link href="/Login" className="text-primary hover:underline">
                    Login
                  </Link></u>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration