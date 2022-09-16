import React, { useEffect, useState } from 'react'
import { getCookie, setCookie, hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import Link from 'next/link'
import Navbar from './Navbar'
import Button from './components/UI/Button'

// Wrong email or password - done
// Redirect to wrong page - done
// Redirect without token - done
// Redirect with wrong token - pending
// Redirect to Home page if right token present - done
// Staty in login page if wrong token - present in cookie - pending

const Login = () => {
  const router = useRouter();

  const loginBhakt = async (email: string, password: string) => {

    const bhaktLoginInput = {
      email, password
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(bhaktLoginInput),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);

    const responseJson = await response.json();
    console.log(responseJson);
    const token = responseJson.xBhaktToken;

    if (response.status === 200) {
      setCookie('xBhaktToken', token, { maxAge: 60 * 60 * 24 })
      router.push('/HomePage');
      return;
    }
    else {
      alert(responseJson.message)
    }
  }

  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")

  // if cookie redirect to homepage.....
  useEffect(() => {

    if (hasCookie('xBhaktToken')) {
      router.push('/HomePage');
      return;
    }

  }, [])

  const emailInputChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmmisionHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginBhakt(enteredEmail, enteredPassword);

    setEnteredEmail("");
    setEnteredPassword("");
  }

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
                    <p className="max-w-[160px]">Login</p>
                  </div>
                </div>
                <form onSubmit={formSubmmisionHandler}>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      onChange={emailInputChangeHandler}
                      value={enteredEmail}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      onChange={passwordInputChangeHandler}
                      value={enteredPassword}
                    />
                  </div>
                  <Button value="Sign In" classes="" />
                </form>
                <p
                  className="mb-2 inline-block text-base text-[#adadad] hover:text-primary"
                >
                  <br />
                  OR
                </p>
                <p className="text-base text-[#adadad]">
                  Click here to create a <u><Link href="/Registration" className="text-primary hover:underline">
                    new account
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

export default Login
