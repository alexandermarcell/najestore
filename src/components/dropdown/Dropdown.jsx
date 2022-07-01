import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BsFilePerson } from 'react-icons/bs';
import { BiMessageAltEdit, BiUserCircle, BiLogOutCircle } from 'react-icons/bi';
import { Twirl as Hamburger } from 'hamburger-react';
import { ShoppingBagIcon, } from '@heroicons/react/outline';
import { cartTotalSelector } from "../../slices/selector";


function Dropdown({ isOpen, setOpen }) {
    const toggler = () => {setOpen(!isOpen)}
    const logout = () => {localStorage.removeItem('user')}
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        (async () => {
            const getJson = await localStorage.getItem('user');
            setUser(JSON.parse(getJson));
        })()
    },[])

    const cartItemQuantity = useSelector(cartTotalSelector);
  return (
    <section className='w-full h-full flex justify-center z-50'>
        <ul className='w-full flex flex-col items-center pt-7 pr-2' 
        onClick={() => toggler(!isOpen)}>
            <div className="w-full flex justify-end ">
                <Hamburger color='black' size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            { user !== null ?
            <>
                <li className='w-full flex flex-col items-center' 
                onClick={() => { 
                    toggler(!isOpen); 
                    logout(); }} 
                >
                    <Link className='w-1/4 flex items-center justify-center text-lg' to="/">
                        <BiLogOutCircle className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-500 mr-2" />
                        Logout
                    </Link>
                </li>
                <li className='w-full flex flex-col items-center py-4' onClick={() => toggler(!isOpen)} >
                    <Link className='w-1/3 flex items-center justify-center text-lg' to="/dashboard">
                        <BiUserCircle className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-500 mr-4" />
                        Dashboard
                    </Link>
                </li>
            </>
            :
            <>
                <li className='w-full flex flex-col items-center' onClick={() => toggler(!isOpen)} >
                    <Link className='w-1/4 flex items-center justify-center text-lg' to="/login">
                        <BsFilePerson className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-500 mr-2" />
                        Login
                    </Link>
                </li>
                <li className='w-full flex flex-col items-center py-4' onClick={() => toggler(!isOpen)} >
                    <Link className='w-1/3 flex items-center justify-center text-lg' to="/register">
                        <BiMessageAltEdit className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-500 mr-4" />
                        Register
                    </Link>
                </li>
            </>
            }
            <li className='w-full flex flex-col items-center' onClick={() => toggler(!isOpen)}>
                <Link className='w-full flex items-center justify-center text-lg' to="/cart">
                    {cartItemQuantity > 0 &&
                    <span className="rounded-full text-lg mx-2 items-center  group-hover:text-gray-800">
                        {cartItemQuantity}
                    </span>
                    }
                    <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-gray-800 group-hover:text-gray-500 mr-2" />
                    Shopping Cart
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Dropdown