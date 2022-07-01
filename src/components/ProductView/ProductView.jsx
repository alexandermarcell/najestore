import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

function ProductView({ product }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
      <div key={product.id} onClick={() => setOpen(!open)}
      className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div className='w-full flex justify-between'>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${product.price/100}</p>
        </div>

        {/* create a modal */}
        {open && 
        <div key={product._id}
        style={{ backgroundColor:'rgba(0, 0, 0, 0.55)', position:'fixed' }}
        className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center z-50 overflow-hidden box-border">
          {/* modal white space */}
          <div className=" relative bg-white w-[70%] h-[70%] sm:w-2/5 sm:h-[70%] md:w-[50%] md:h-4/6 lg:w-2/3 lg:h-1/3 xl:w-2/5 xl:h-1/3 2xl:w-1/2 2xl:h-1/3 
          flex flex-col lg:flex-row items-center drop-shadow-2xl justify-center mx-auto md:p-1 lg:p-4 rounded-lg box-border">
            <img 
            className="w-[50%] md:w-[40%] lg:w-[40%] lg:h-full" 
            src={product.image} 
            alt={product.imageAlt} 
            />
            <div className="w-full flex flex-col mx-auto p-8 md:p-0 lg:h-full lg:pl-4 box-border">
              <div className="w-full h-full flex flex-col justify-center lg:justify-between md:items-center lg:flex-col md:p-4 lg:p-0">
                <div className='w-full flex flex-col box-border'>
                  <div className='w-full h-full flex flex-col box-border'>
                    <h2 className="text-sm md:text-lg lg:text-lg ">
                      <span className='font-semibold'>Product: </span>{product.name}
                    </h2>
                    <p className="text-sm md:text-base font-semibold py-2 md:py-0 lg:pt-2">
                      Price: ${product.price/100}
                    </p>
                  </div>
                  <p className="sm:w-full sm:h-2/5 sm:text-sm sm:mt-4 md:mt-0 md:text-sm md:py-2 lg:text-lg">
                    <span className='font-semibold'>Product Details: </span>{product.description}
                  </p>
                </div>
                <div className="w-full flex flex-col mt-4 md:mt-2 lg:flex-row lg:items-center box-border">
                  <button onClick={() => dispatch(addToCart(product))}
                  className="w-full h-10 lg:px-1 md:h-12 lg:mx-1 rounded-lg md:mt-4 lg:mt-2 bg-violet-400 text-white text-sm uppercase sm:py-4 md:py-4 active:translate-y-1">
                    Add to Cart
                  </button>
                  <button onClick={() => setOpen(!open)}
                  className="w-full h-10 md:h-12 lg:mx-1 rounded-lg mt-4 md:mt-4 lg:mt-2 bg-transparent border-2 border-slate-400 text-sm uppercase active:translate-y-1">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        {/* End of Modal */}

      </div>
  )
}

export default ProductView