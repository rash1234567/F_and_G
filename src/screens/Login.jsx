import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAppContext } from "../context";
import axios from 'axios';
import Cookies from 'js-cookie';
import Joi from "joi-browser";


function Login() {

  const navigate = useNavigate()
  const { setLoading, setUser, handleShow, user, setIsAuthenticated } = useAppContext();

  const [errors, setErrors] = useState({});
  const [customer, setCustomer] = useState({
    email: "",
    password: "",
  });

  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  };


  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }

    let customerData = { ...customer };
    customerData[name] = value;
    setCustomer(customerData);
    setErrors(errorData);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const result = Joi.validate(customer,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  async function handleSubmit() {

    const errorData = validateForm()
    if (errorData) {
      console.log(errorData);
      return
    }

    setLoading(true);
    const data = {
      email: customer.email,
      password: customer.password,
    };

    try {
      const response = await axios.post(
        "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login",
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200 || response.data.success !== true) {
        return handleShow('user not found', 'red', '')
      }
      Cookies.set('auth', response.data.data.token, { expires: 1 });
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
      handleShow('Incorrect email/password', 'red', '')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='bg-black w-[100vw] min-h-[100vh] flex items-center justify-center'>
      <div className='bg-white w-[85%] md:w-[70%] xl:w-[41vw] xl:min-h-[45vw] min-h-[50vh] md:min-h-[55vh] flex flex-col items-center  '>
        <h3 className='text-[2.6vh] xl:text-[1.6vw] font-[500] mt-[9.4%] xl:mt-[10%]'>
          Welcome Back!
        </h3>
        <p className='mt-[2.9%] xl:mt-[1.3vw] text-[1.5vh] xl:text-[1vw] font-[400] text-[#83879B]'>
          Securely login into your Persent account
        </p>
        <div className='mt-[10%] xl:mt-[15%] w-[80%] flex flex-col'>
          <label
            htmlFor=''
            className='text-[1.5vh] xl:text-[1vw] font-[500] text-[#2C2C2C]'>
            Phone / Email address *
          </label>
          <input
            value={customer.email}
            name="email"
            onChange={handleSave}
            type='text'
            className='mt-[2%] xl:mt-[1vw] px-[2%] border outline-none py-[2%]'
          />
        </div>
        {errors.email && (<div className="text-[1.5vh] xl:text-[1vw] text-red-400">{errors.email}</div>)}
        <div className=' mt-[5%] w-[80%] flex flex-col'>
          <label
            htmlFor=''
            className='text-[1.5vh] xl:text-[1vw] font-[500] text-[#2C2C2C]'>
            Password *
          </label>
          <input
            type='password'
            name="password"
            onChange={handleSave}
            value={customer.password}
            className='mt-[2%] xl:mt-[1vw] px-[2%] border outline-none py-[2%]'
          />
        </div>
        {errors.password && (<div className="text-[1.5vh] xl:text-[1vw] text-red-400">{errors.password}</div>)}
        <div className=' w-[80%] flex justify-around mt-[3%] xl:mt-[1vw] '>
          <span className='flex items-center  '>
            <input type='checkbox' name='' id='' />
            <p className='text-[#83879B] font-[500] text-[1.5vh] xl:text-[1vw]'>
              Remember me
            </p>
          </span>
          <p className='text-[#83879B] font-[500] text-[1.5vh] xl:text-[1vw]'>
            Forgot Password?
          </p>
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='bg-[#1F28EB] text-white text-[2.1vh] xl:text-[1.3vw] font-[600] w-[68%] h-[36px] md:h-[5vh] xl:h-[3vw] xl:mt-[7%] rounded-lg mt-[5%]'>
          Login
        </button>
        <p className='text-[1.5vh] xl:text-[1.1vw] font-[500] text-[#1F28EB] my-[5%]'>
          Don’t have an account?{" "}
          <Link to='/signup' className='font-[400] text-[#83879B]'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login