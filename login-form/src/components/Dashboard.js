

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';
import Sidebar from '../layouts/Sidebar';
import ReactPaginate from 'react-paginate';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 10; // Define how many products per page
  const skip = currentPage * limit;

  const fetchProducts = useCallback((currentPage, searchQuery = '') => {
    setIsLoading(true);
    const limit = 12;
    const skip = currentPage * limit;
    let url;

    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    } else {
      url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setPageCount(Math.ceil(data.total / limit));
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery, fetchProducts]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Handle adding product
  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // alert(`Added ${product.title} to cart.`);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="dashboard">
      <Header />
      <Sidebar /> {/* Sidebar always visible */}
      <div className="main-content">
        <div className="content">
          <div className='product-menu'>
              <h3>Products</h3>
              <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add Product</button>
          </div>
          </div>
          {isLoading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            <div className="product-section">
              <div className="gallery-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <Carousel 
                      showThumbs={false} 
                      infiniteLoop={true} 
                      autoPlay={false} 
                      showStatus={false} 
                      emulateTouch={true} 
                    >
                      {product.images.map((image, index) => (
                        <div key={index}>
                          <img src={image} alt={`${product.title} ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                    <div className="product-info">
                      <span className="product-title">{product.title}</span>
                      <span className="product-rating">{'⭐'.repeat(product.rating)}</span>
                      <p className="product-price">${product.price}</p>
                      <div className="product-actions">
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        <button onClick={() => handleBuyNow(product)}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
            </div>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
