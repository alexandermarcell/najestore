import { useState, useEffect } from 'react'
import Logo from '../../assets/images/black-logo.svg';
import Dropdown from '../dropdown/Dropdown';
import { ShoppingBagIcon, } from '@heroicons/react/outline'
import { cartTotalSelector } from "../../slices/selector";
import { useSelector } from 'react-redux';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)

  const toggler = () => {setOpen(!open)};

  const [ user, setUser ] = useState([]);

    useEffect(() => {
        (async () => {
            const getJson = await localStorage.getItem('user');
            setUser(JSON.parse(getJson));
        })()
    },[])

  const cartItemQuantity = useSelector(cartTotalSelector);

  return (
    <div id='header' className='w-full flex flex-col lg:mx-auto px-2 box-border max-w-screen-xl'>
      <div className="w-ful flex flex-row items-center justify-between">
        <Link className='' to={"/"}>
          <img className='w-1/5 md:w-1/5 lg:w-[125px]' src={Logo} alt="" />
        </Link>
        <div className="w-full">
          <div className="flex lg:hidden">
              <Hamburger className='nav__hamburger' color='black' size={20} toggled={open} toggle={setOpen} />
              {open && 
              <div className='bg-white w-[75vw] h-screen absolute top-0 right-0 flex flex-col items-center z-50' 
              onClick={() => toggler(!open)}>
                  <Dropdown setOpen={setOpen} isOpen={open} />
              </div>}
          </div>
          <div className="w-full ml-auto flex items-center">
            { user ?
              <div className="hidden lg:w-full lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
              >
                <Link to="/" 
                onClick={()=> localStorage.removeItem('user')}
                className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Logout
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Dashboard
                </Link>
              </div>
              :
              <div className="hidden lg:w-full lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Login
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Register
                </Link>
              </div>
            }

            {/* Cart */}
            <div className=" hidden lg:flex lx-4 lg:ml-6">
              <Link to="/cart" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartItemQuantity}</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header