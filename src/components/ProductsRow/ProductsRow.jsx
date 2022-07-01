import { useEffect } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { fetchProducts, productSelector } from "../../slices/productSlice";

import ProductView from '../ProductView/ProductView';

const ProductsRow = () => {
    const dispatch = useDispatch()
    const { products, loading, hasErrors } = useSelector(productSelector)

    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch])

    const renderProducts = () => {
        if (loading) return <p>Loading Products...</p>
        if (hasErrors) return <p> Unable to display products...</p>

        return products.map((product) =>  <ProductView key={product._id} product={product} /> )
    }

  return (
    <div id='shop' className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl flex justify-end my-8">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {renderProducts()}
        </div>
      </div>
    </div>
  )
}


export default ProductsRow