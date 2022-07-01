import React, { useState } from 'react'
import contactImage from '../../assets/images/contactus.png'

const Contact = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    function sendEmail(e) {
        e.preventDefault();
    
        // emailjs.sendForm('service_cshbo9b', 'template_b3181om', e.target, 'vh3TBm5FAk2l0lQFv')
        //   .then((result) => {
        //       console.log(result.text);
        //       window.location.href = "#hero"
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };

  return (
    <div id='contact' className='w-full lg:h-full lg:mt-12 flex flex-row items-center content-center justify-center box-border max-w-screen-2xl'>
        <div className='w-full h-full flex flex-col justify-center p-4 box-border'>
            <h2 className="text-xl my-8 md:text-3xl lg:text-5xl mx-auto">
                Connect With Me 
            </h2>
            <form onSubmit={sendEmail} className="w-full md:w-4/6 lg:w-4/6 flex flex-col  mx-auto">
                <div className="w-full flex flex-col items-start">
                    <label className="w-full flex flex-col py-2 text-stone-400">
                        Name:
                        <input type="name" placeholder='Name' 
                        className="w-full py-2 px-2 rounded-xl border-2 border-solid" name='name' value={name}
                        onChange={(e) => setName(e.target.value)} required/>
                    </label>
                    <label className="w-full flex flex-col text-stone-400">
                        Email:
                        <input type="email" placeholder='Email' 
                        className="w-full py-2 px-2 rounded-xl border-2 border-solid" name='email' value={email} 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </label>
                    <label className="w-full flex flex-col text-stone-400">
                        Message:
                        <textarea type="message" name='message' placeholder='Message...'  
                        className='w-full py-4 px-2 rounded-xl border-2 border-solid resize-none' value={message}
                        onChange={(e) => setMessage(e.target.value)} required/>
                    </label>
                    <button type='submit' className='w-full px-4 my-4 py-4 rounded-xl border-2 border-solid uppercase bg-violet-300 text-white'>Sumbit</button>
                </div>
            </form>
        </div>
        <img src={contactImage} 
        className="hidden lg:flex lg:w-1/2 lg:h-full brightness-[90%]"
        alt="" />
    </div>
  )
}

export default Contact