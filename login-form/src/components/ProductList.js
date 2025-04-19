
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import Layout from '../layouts/Layout';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  // console.log(products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    // <Layout>
    //   <div className='product'>
    //     <h2>Product List</h2>
    //     {status === 'loading' && <p>Loading...</p>}
    //     {status === 'succeeded' && (
    //       <ul>
    //         {products.map(product => (
    //           <li key={product.id}>
    //             {product.name}
    //             console.log(products);
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //     {status === 'failed' && <p>{error}</p>}
    //   </div>
    // </Layout>
    <Layout>
    <div className='product'>
      <h2>Product List</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              {/* Ensure you're rendering string values or valid React elements */}
            </li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>{error}</p>}
    </div>
  </Layout>
  );
};

export default ProductList;