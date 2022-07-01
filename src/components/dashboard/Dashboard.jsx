import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { BsReceipt } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { BiUser, BiHeart } from 'react-icons/bi';
import { useEffect } from 'react';

const Dashboard = () => {
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        (async () => {
            const getJson = await localStorage.getItem('user');
            setUser(JSON.parse(getJson));
        })()
    },[])

  return (
    <>
    <div className="max-w-screen-xl w-full flex mx-auto">
        <Header />
    </div>
    <div className='w-full h-full max-w-screen-2xl max-h-full mx-auto my-8 bg-slate-100 p-1 lg:p-8 flex flex-col items-center box-border'>
        <div className='w-full h-[750px] flex flex-col p-1 items-center box-border md:p-8 lg:p'>
            { user ? 
            <h1 className='text-sm italic font-semibold pb-4 my-4 border-b-2 md:text-xl 2xl:text-3xl 2xl:pb-8'>
                Welcome to your dashboard <span className='mx-1 text-xl 2xl:text-3xl uppercase font-semibold'>{user.name}</span> !
            </h1>
            :
            <h1 className='text-sm italic font-semibold pb-4 my-4 border-b-2 md:text-xl 2xl:text-3xl 2xl:pb-8'> 
            Welcome to your user dashboard!
            </h1>
            }
            <div className="w-full flex flex-col my-2 md:flex-row md:items-center md:py-4 md:my-4">
                <div className="w-full flex flex-col my-2">
                    <label className='font-semibold flex items-center 2xl:text-2xl'> 
                    <BsReceipt style={{marginRight:'8px'}} 
                        size={20} />
                    Order history:
                    </label>
                    <span className='underline cursor-pointer py-2 xl:text-2xl'>view</span>
                </div>
                <div className="w-full flex flex-col my-2 md:w-2/3 ">
                    <label className='font-semibold flex items-center 2xl:text-2xl'>
                        <BiUser style={{marginRight:'8px'}} 
                        size={20}/> 
                        My Profile:
                        </label>
                    <span className='underline cursor-pointer py-2 xl:text-2xl'>view</span>
                </div>
            </div>
            <div className="w-full flex flex-col my-2 md:flex-row md:items-center md:py-4 md:my-4">
                <div className="w-full flex flex-col my-4">
                    <label className='font-semibold flex items-center 2xl:text-2xl'> 
                        <BiHeart style={{marginRight:'8px'}} 
                        size={20} />
                        Wishlisht:
                    </label>
                    <span className='underline cursor-pointer py-2 xl:text-2xl'>view</span>
                </div>
                <div className="w-full flex flex-col my-2 md:w-2/3">
                    <label className='font-semibold flex items-center 2xl:text-2xl'> 
                        <MdLocationPin style={{marginRight:'8px'}} 
                        size={20} />
                        Address:
                    </label>
                    {user &&
                    <p className="xl:text-xl">Your is: 
                        <span className='mx-1 uppercase'>
                            {user.address}
                        </span>
                    </p>
                    }
                    <span className='w-full underline cursor-pointer py-2 xl:text-2xl'>view</span>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Dashboard