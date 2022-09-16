import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import Login from './Login'
import HomePage from './HomePage'
import { hasCookie } from 'cookies-next';

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () =>{
    setIsLoggedIn(hasCookie('xBhaktToken'));
  }, []);

  return (
    <Fragment>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <HomePage/>}
    </Fragment>
  )
}

export default Home
