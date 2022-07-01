import React from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from './stripe-checkout/Stripe-checkout'
import { cartTotalPriceSelector, cartTotalSelector } from "../../slices/selector";
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector(cartTotalPriceSelector);
    const cartItemQuantity = useSelector(cartTotalSelector);

  return (
    <>
        <Header />
        <div className="w-full h-[700px] max-w-screen-2xl p-2 box-border">
            <div className="w-full h-full flex my-12 flex-col items-center">
                <h1 className="w-full text-2xl italic flex justify-center">
                    Checkout Summary
                </h1>
                <div className="w-full flex flex-col items-center">
                    <h3 className="py-2">
                        Total Items: {cartItemQuantity}
                    </h3>
                    <h4 className="py-2">
                        Amount to pay: ${totalPrice/100}
                    </h4>
                </div>
                <StripeCheckout cart={cart} />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Checkout