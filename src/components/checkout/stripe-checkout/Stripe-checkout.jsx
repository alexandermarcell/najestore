import { useStripe } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../helpers";
import { useState } from "react";

const StripeChekout = ({ cart }) => {
    const stripe = useStripe();
    const [email, setEmail ] = useState('');

    const handleCheckout = async(e, cart) => {
        e.preventDefault();

        const line_items = cart.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price,
                    product_data: {
                        name: item.name,
                        description: item.description,
                        images: [item.image],
                    }
                },
            }
        })

        const response = await fetchFromAPI('create-checkout-session', {
            body: { line_items, customer_email: email },
        })

        const { sesionId } = response;
        const sessionId = sesionId;
        console.log(sessionId)
        
        const { error } = await stripe.redirectToCheckout({
            sessionId
        });

        if(error) {
            console.log(error)
        }
    }

    return(
        <form 
        className="w-full h-full max-w-screen-2xl flex flex-col items-center p-2 box-border"
        onSubmit={(e) => handleCheckout(e, cart)}
        >
            <div className="w-1/2 h-full flex flex-col items center p-1 box-border">
                <label className="text-slate-500 w-ful py-1 ">
                    Email
                </label>
                <input 
                type="email" 
                value={email}
                placeholder="Enter your email"
                className="w-full h-12 p-4 rounded-xl flex border-2 "
                onChange={(e) => setEmail(e.target.value)}
                />
                <div 
                className="w-full flex justify-center my-2">
                    <button 
                    type="submit"
                    className="w-[190px] h-12 rounded-xl my-4 border-2 bg-violet-400 text-white uppercase active:translate-y-1"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </form>
    )
}

export default StripeChekout