import { getCookie, hasCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'

import Navbar from './Navbar'
import PoojaList from './PoojaList'

const HomePage = (props: { name: string }) => {
  const router = useRouter();

  const [bhaktName, setBhaktName] = useState("")

  useEffect(() => {
    const getBhaktData = async () => {
      const xBhaktToken = getCookie("xBhaktToken") + "";
      const response = await fetch('/api/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-bhakt-token': xBhaktToken
        }
      });
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);

      if (response.status === 200) {
        const bhaktNameData = responseJson.full_name;
        console.log(bhaktNameData)
        setBhaktName(bhaktNameData);
      }
      else if (response.status === 401) {
        console.log(responseJson.message);
      }
      else {
        console.log(responseJson.message);
      }
    }
    getBhaktData();

    if (!hasCookie("xBhaktToken")) {
      router.push('/Login')
      return;
    }
  }, []);

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
                <h1 className="text-4xl font-semibold text-black">Welcome {bhaktName}, please select a pooja to start</h1>
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