import type { NextPage } from 'next'
import { Fragment } from 'react'
import Login from './Login'
// import HomePage from './HomePage'
import {useRouter} from "next/router";
import PoojaPage from './PoojaPage';

const Home: NextPage = () => {
  const { query } = useRouter();
  const isLoggedIn = query.isLoggedIn == 'true';
  
  const name = "Jainendra"

  return (
    <Fragment>
      {!isLoggedIn && <Login />}
      {/* {isLoggedIn && <HomePage name={name} />} */}
      {isLoggedIn && <PoojaPage />}
    </Fragment>
  )
}

export default Home
