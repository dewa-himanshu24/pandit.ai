import React, { useState } from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Link from 'next/link'
import Navbar from './Navbar'
import Button from './components/UI/Button'



const Login = (props: { onClick: any; onChange: any }) => {
  const rounter = useRouter();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const emailInputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputEmail(event.target.value);
  }
  const passwordInputChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputPassword(event.target.value);
  }

  const handleSignIn = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("SignIn clicked");
    signIn("credentials", {
      email: inputEmail, password: inputPassword, callbackUrl: `${window.location.origin}/homePage`, redirect: false
    }
    ).then(function (result: any) {
      if (result.error !== null) {
        if (result.status === 401) {
          console.log("Your username/password combination was incorrect. Please try again");
        }
        else {
          console.log(result.error);
        }
      }
      else {
        console.log("login successfull");
        rounter.push(result.url);
      }
    });

    setInputEmail("");
    setInputPassword("");
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
                <form>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      value={inputEmail}
                      onChange={emailInputChangeHandler}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      value={inputPassword}
                      onChange={passwordInputChangeHandler}
                    />
                  </div>
                  <Button value="Sign In" classes="" onClick={handleSignIn} />
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