import axios from 'axios';
import { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/black-logo.svg';
import loginimage from '../../assets/images/login.jpg';
import { LockClosedIcon } from '@heroicons/react/solid';

function Login() {
    let navigate = useNavigate();
    const [ email, setEmail ]= useState('');
    const [ password, setPassword ]= useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      let fetchUrl = 'http://localhost:5050/api/v1/shop/users/login';

      try {
        axios.post(fetchUrl, {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data) )
          navigate("/dashboard")
        })
      } catch (error) {
        console.log(error)
      }
    };

  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center p-1 sm:px-6 lg:px-0 box-border">
          <IoChevronBack onClick={() => navigate("/")} size={30}
          className='absolute top-0 left-0 ml-8 w-8 hover:animate-[bounce_2s_ease-in-out_infinite] mt-24 active:-translate-y-1'  />
        <div className="max-w-xlg w-full space-y-8 lg:p-4 xl:pr-4 box-border">
          <div className='w-full flex flex-col items-center box-border'>
            <img onClick={() => navigate("/")}
            src={Logo} alt="" 
            className='w-36 flex items-center justify-center py-4'
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <span onClick={() => navigate('/register')} className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                create an account
              </span>
            </p>
          </div>
          <form className="max-w-lg mx-auto mt-8 space-y-6" 
          onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='py-1'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className='py-1'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)} required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Need to create an account?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-400 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-800" aria-hidden="true" />
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
        <img 
        src={loginimage} 
        alt='panel ' 
        className='hidden lg:flex lg:w-1/2 xl:w-3/5 lg:mr-0'/>
      </div>
    </>
  )
}

export default Login