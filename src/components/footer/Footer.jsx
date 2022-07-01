import React from 'react'
import { ImFacebook, ImPinterest2} from 'react-icons/im'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/images/black-logo.svg'

const Footer = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    
      const onClickUrl = (url) => {
        return () => openInNewTab(url)
      }
  return (
    <div className='w-full h-full my-8 items-center flex flex-col p-4 box-border'>
        <div className='w-full h-full flex flex-col items-center'>
            <img onClick={() => window.scroll(0,0)} src={logo} alt="branding" className='w-52 py-4' />
            <ul className='w-full flex flex-col items-center'>
                <li className='cursor-pointer py-2' >FAQ</li>
                <li className='cursor-pointer py-2' >RETURNS</li>
                <li className='cursor-pointer py-2' >SHIPPING</li>
                <li className='cursor-pointer py-2' >CONTACT</li>
                <li className='cursor-pointer py-2' >STORE FINDER</li>
            </ul>
            <div className="w-1/5 flex flex-row justify-evenly py-8">
                <div className="border-2 mx-2 p-2 border-black rounded-lg">
                    <ImFacebook 
                    onClick={onClickUrl('https://www.facebook.com/profile.php?id=2039409')} />
                </div>
                <div className="border-2 mx-2 p-2 border-black rounded-lg">
                    <FaInstagram 
                    onClick={onClickUrl('https://www.instagram.com/becoming_dpm')} />
                </div>
                <div className="border-2 mx-2 p-2 border-black rounded-lg">
                    <ImPinterest2 
                    onClick={onClickUrl('https://www.pinterest.com')} />
                </div>
                <div className="border-2 mx-2 p-2 border-black rounded-lg">
                    <FaLinkedinIn 
                    onClick={onClickUrl('https://www.linkedin.com/in/naomie-jean-5b3a8699/')} />
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <p className='py-2'>SITE BY ALEXANDER MARCELL</p>
                <p className='py-2'>COPYRIGHT NAJE ESSENTIALS</p>
                <p className='w-full flex flex-row items-center justify-center text-center py-2'>
                    <a className='px-2 cursor-pointer' href='/terms&conditions'>TERMS & CONDITIONS </a> 

                    <a className='px-2 cursor-pointer' href='/privacy-policy'>PRIVACY POLICY </a>
                    
                    <a className='px-2 cursor-pointer' href='/legal&notice'>LEGAL NOTICE</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer