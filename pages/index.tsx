import type { NextPage } from 'next'
import { Fragment } from 'react'
import Login from './Login'
import HomePage from './HomePage'
import {useRouter} from "next/router";

const Home: NextPage = () => {
  const { query } = useRouter();
  const isLoggedIn = query.isLoggedIn == 'true';

  return (
    <Fragment>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <HomePage />}
    </Fragment>
  )
}

export default Home
