
import Link from 'next/link'
import Button from './components/UI/Button'

const Navbar = (props: { isLoggedIn: Boolean }) => {

  return (
    <div
      className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href={props.isLoggedIn ? "/HomePage" : "/Login"} className="navbar-logo block w-full py-5">
              <img src="/assets/images/Pandit_AI.png" alt="" />
            </Link>
          </div>
          {props.isLoggedIn && <Button classes='md-10 px-4' value="Logout" />}
        </div>
      </div>
    </div>
  )
}

export default Navbar