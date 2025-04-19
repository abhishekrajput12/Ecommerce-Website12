// CategoryPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';


const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Home & Kitchen' },
  { id: 4, name: 'Books' },
  { id: 5, name: 'Toys' },
];

function CategoryPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Layout>
            <div className="category-page">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}

export default CategoryPage;