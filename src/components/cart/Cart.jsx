import Header from '../header/Header';
import Footer from '../footer/Footer';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {  useDispatch, useSelector } from "react-redux";
import emptycart from '../../assets/images/emptycart.png';
import { cartTotalPriceSelector, cartTotalSelector } from "../../slices/selector";
import { decrement, increment, remove, clear } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)
    const totalPrice = useSelector(cartTotalPriceSelector);
    const cartItemQuantity = useSelector(cartTotalSelector);

    return (
        <>
        <Header />
        <div className="w-full h-full flex flex-col justify-center mt-24 p-4 box-border">
            {cartItemQuantity > 0 ?
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl lg:text-5xl flex justify-end lg:mx-auto-4 w-full lg:w-5/6">Shopping Cart</h2>
                <h5 onClick={() => dispatch(clear(cart))}
                className="italic text-blue-600 font-semibold text-sm flex justify-end w-full lg-mx-auto cursor-pointer lg:py-2 lg:w-5/6">delete all items</h5>
            </div> 
            : ""
            }
            {cartItemQuantity < 1 && 
            <div className="w-full h-full p-4 my-8">
                <img className="w-full" 
                src={emptycart} 
                alt='no items are in the cart' />
                <div className="w-full flex flex-col items-center text-indigo-300 font-bold">
                    <h2 className="sm:text-lg md:text-xl">Your Shopping Cart</h2>
                    <p className="">is empty!</p>
                    <button onClick={() => navigate("/")}
                    className="w-5/6 md:w-[185px] h-10 md:h-12 my-4 bg-violet-400 text-base text-white uppercase rounded-lg active:translate-y-1">
                        Continue Shopping
                    </button>
                </div>
            </div>
            }
            {cart && cart.map((product) => {
                return(
                    <div 
                    key={product._id}
                    className="w-full h-full md:flex-row my-8 flex lg:flex-col items-center justify-center box-border lg:p-4"
                    >
                        <div 
                        key={product._id} 
                        className="relative w-full md:w-11/12 lg:w-5/6 h-full flex flex-col justify-center md:flex-row box-border lg:pb-8 lg:border-b-2 p-4 border-1 hover:bg-slate-100">
                            <img 
                            className="w-full  md:w-1/5 my-2" 
                            src={product.image} 
                            alt={product.imageAlt} 
                            />
                            <div className="w-full flex flex-col justify-between md:ml-4">
                                <AiOutlineCloseCircle size={25}
                                onClick={() => dispatch(remove(product._id))}
                                className="absolute top-0 right-0 py-1 cursor-pointer active:translate-y-1"
                                />
                                <div className="flex flex-row items-center justify-between w-full">
                                    <h2 className="sm:text-base md:text-xl ">
                                    {product.name}
                                    </h2>
                                    <span className="sm:text-sm md:text-xl lg:text-lg">
                                        ${ (product.price/100).toFixed(2) }
                                    </span>
                                </div>
                                <div className="w-full md:h-full flex flex-row items-center md:items-start">
                                    <p className="sm:text-md md:text-lg my-2 mr-4">Qty: </p>
                                    <div className="w-1/3 flex flex-row items-center sm:my-1 md:my-2 md:ml-4">
                                        <button className="sm:text-sm md:text-3xl"
                                        disabled={product.quantity === 1}
                                        onClick={() => dispatch(decrement(product._id))} 
                                        >-</button>
                                        <span className="w-7 mx-2 flex justify-center sm:text-sm md:text-xl">
                                            {product.quantity}
                                        </span>
                                        <button className="sm:text-sm md:text-2xl"
                                        onClick={() => dispatch(increment(product._id))} 
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            {cartItemQuantity > 0 &&
                <div className="flex flex-col justify-end items-center lg:mx-auto mt-8 w-full lg:w-10/12">
                    <span className="sm:text-sm md:text-base flex w-full flex-row content-center justify-end ">
                        Subtotal: ({cartItemQuantity} items ) : ${(totalPrice/100).toFixed(2)}
                    </span>
                        <div className="w-full flex flex-col lg:flex-row justify-end box-border">
                            <button 
                            onClick={(e) => navigate('/checkout')}
                            className="w-full md:w-64 lg:w-80 h-12 rounded-2xl mt-8 bg-violet-400 sm:text-sm md:text-xl text-white uppercase lg:h-14 items-center active:translate-y-1">
                            Checkout
                            </button>
                        </div>
                </div>
            }
        </div>
        <Footer />
        </>
    )
}


export default Cart