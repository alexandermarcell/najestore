import React from 'react';
import { useNavigate } from 'react-router-dom';
import canceledcart from '../../assets/images/cancelled.png';

const Canceled = () => {
    const navigate = useNavigate();

  return (
    <div style={{ backgroundColor:'rgba(0, 0, 0, 0.55)', position:'fixed' }}
    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-50 overflow-hidden box-border">
        <div className="bg-white w-[90%] h-[80%] md:w-[60%] md:h- lg:w-1/2 lg:h-1/2 xl:w-2/3 xl:h-1/4 2xl:w-2/4 2xl:h-2/5 
        flex flex-col items-center drop-shadow-2xl justify-center mx-auto md:p-1 lg:flex-row lg:p-4 rounded-3xl box-border">
            <img src={canceledcart} alt="order is canceled" 
            className="w-2/5 h-full" />
            <div className="w-3/4 flex flex-col itmes-start justify-center m-2">
                <div className="w-full flex flex-col items-center">
                    <h1 className="w-full text-2xl 2xl:text-5xl mb-8 font-semibold">Hey Wait!!!</h1>
                    <p className="w-full text-xl">Are you sure, you want to leave this page</p>
                    <p className="w-full text-xl pb-4 lg:pb-8">without confirming your order?</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <button onClick={() => navigate('/')}
                    className="w-full h-8 lg:h-12 lg:mr-1 bg-violet-400 text-white border-2 rounded-lg">
                        Yes, Maybe later
                    </button>
                    <button onClick={() => navigate('/cart')}
                    className="w-full h-8 lg:h-12 lg:ml-1 bg-transparent border-2 border-black rounded-lg">
                        No, I want to stay
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Canceled