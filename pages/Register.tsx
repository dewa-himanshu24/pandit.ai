import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Button from './components/UI/Button'
import { useRouter } from 'next/router'
import { hasCookie } from 'cookies-next'

const Register = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true)

  const registerBhakt = async (fullName: string, email: string, password: string) => {
    const bhaktRegisterInput = {
      full_name: fullName, email, password
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(bhaktRegisterInput),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);

    const responseJson = await response.json();

    if (response.status === 200) {
      alert("Successfully registered, Please login to start pooja")
      router.push('/Login');
      return;
    }
    else {
      alert(responseJson.message)
    }
  }

  const [enteredFullName, setEnteredFullName] = useState("")
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")

  // if cookie redirect to homepage.....
  useEffect(() => {
    if (hasCookie('xBhaktToken')) {
      router.push('/HomePage');
      return;
    } else {
      setLoading(false);
    }

  }, [])

  const fullNameInputChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredFullName(event.target.value);
  };
  const emailInputChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredEmail(event.target.value);
  };
  const passwordInputChangeHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmmisionHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    registerBhakt(enteredFullName, enteredEmail, enteredPassword);

    setEnteredFullName("");
    setEnteredEmail("");
    setEnteredPassword("");
  }

  if (loading) return <h1>LOADING....</h1>

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
                <form onSubmit={formSubmmisionHandler}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      value={enteredFullName}
                      onChange={fullNameInputChangeHandler}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      value={enteredEmail}
                      onChange={emailInputChangeHandler}
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none transition focus:border-primary focus-visible:shadow-none"
                      value={enteredPassword}
                      onChange={passwordInputChangeHandler}
                    />
                  </div>
                  <Button value="Sign Up" classes="" onClickHandler={() => { }} />
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

export default Register