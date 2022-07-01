import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5';
import Logo from '../../assets/images/black-logo.svg'
import { LockClosedIcon } from '@heroicons/react/solid';
import registerimage from '../../assets/images/register-image.jpg';


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios
        .post('http://localhost:5050/api/v1/shop/users/register', {
          name,
          phone,
          address,
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data) )
          navigate('/login')
        })
        .catch((err) => {
          console.log('Error: ', err);
        });
    };

  return (
    <>
      <div className="relative h-full flex items-center justify-center px-4 overflow-hidden sm:px-6 lg:px-0">
        <IoChevronBack onClick={() => navigate("/")} size={30} 
        className='absolute top-0 left-0 ml-8 w-8 hover:animate-[bounce_2s_ease-in-out_infinite] mt-24 active:-translate-y-1'  
        />
        <div className="max-w-xlg w-full space-y-8 lg:p-4 xl:pr-4 box-border">
          <div>
            <img
              className="mx-auto h-32 w-auto mb-8"
              onClick={() => navigate("/")}
              src={Logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <span onClick={() => navigate("/login")} className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Log-in Here
              </span>
            </p>
          </div>
          <form className="max-w-lg mx-auto mt-8 space-y-6" 
          onClick={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='py-1'>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  type="name"
                  autoComplete="text"
                  onChange={(e) => setName(e.target.value)} required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
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
                <label htmlFor="email-address" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  value={phone}
                  autoComplete="text"
                  onChange={(e) => setPhone(e.target.value)} required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div className='py-1'>
                <label htmlFor="email-address" className="sr-only">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="address"
                  value={address}
                  autoComplete="text"
                  onChange={(e) => setAddress(e.target.value)} required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Main Address"
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
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Already a user?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:translate-y-1"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <img 
        className='hidden lg:flex lg:w-3/5 h-full lg:mr-0 lg:ml-8 lg:max-w-[1200px] mx-auto'
        src={registerimage} 
        alt='register' />
      </div>
    </>
  )
}

export default Register