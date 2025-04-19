
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import img1 from "../pages/assets/home1.jpg";
import { useNavigate, useMatch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


function Form() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const [loginError, setLoginError] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const matchLoginPage = useMatch('/login');

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue('username', parsedData.username);
      setValue('password', parsedData.password);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      console.log('Logged in username:', data.username);

      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password
        })
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('formData', JSON.stringify(data));
        setLoginError('');

        // Display success toast instead of alert
        toast.success('User login successful!', { position: 'top-center' });

        const productResponse = await fetch('https://dummyjson.com/products');
        const productResult = await productResponse.json();
        setProducts(productResult.products);

        // Navigate to dashboard after successful login
        navigate('/dashboard', { state: { products: productResult.products } });
      } else {
        setLoginError('Invalid username or password');
        toast.error('Invalid username or password', { position: 'top-center' });
      }
    } catch (error) {
      console.error('Error during login or fetching products:', error);
      setLoginError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.', { position: 'top-center' });
    }
  };

  const handleForgetPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div>
      {/* Toast container to display toasts */}
      <ToastContainer />
      {matchLoginPage && (
        <form className='home' onSubmit={handleSubmit(onSubmit)}>
          <div className='figure'>
            <img src={img1} alt="Home" />
          </div>
          <div className='data'>
            <div className='email'>
              <label>Enter Your Username</label><br />
              <input type="text" {...register("username")} /><br />
              {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div className='password'>
              <label>Enter Your Password</label><br />
              <input type="password" {...register("password")} /><br />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className='forgot-password'>
              <button type="button" onClick={handleForgetPassword}>Forgot Password?</button>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            {loginError && <div className="error">{loginError}</div>}
          </div>

          {products.length > 0 && (
            <div className='product-list'>
              <h3>Products</h3>
              <ul>
                {products.map(product => (
                  <li key={product.id}>{product.title} - ${product.price}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default Form;
