import React, { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from "../context";
import Cookies from 'js-cookie'


// async function autoLogin(email, password) {
//   const logindata = {
//     email: customer.email,
//     password: customer.password,
//   };

//   try {
//     const response = await axios.post(
//       "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login",
//       logindata,
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.status !== 200 || response.data.success !== true) {
//       return
//     }
//     Cookies.set('auth', response.data.data.token, { expires: 1 });
//   } catch (error) {
//     console.log(error);
//   }
// }



function Singup() {
  const navigate = useNavigate()
  const { setLoading, handleShow } = useAppContext();
  const [checked, setChecked] = useState(false);
  const [checkError, setCheckError] = useState('')
  const [errors, setErrors] = useState({});
  const [customer, setCustomer] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: ""
  });

  const toggleChecked = () => {
    setChecked(!checked)
  }

  const schema = {
    businessName: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    password: Joi.string().min(6).max(20).required()

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


  async function register() {
    const errorData = validateForm();

    if (errorData || checked === false) {
      console.log(errorData);
      setCheckError('Please Agree to the policy')
      return
    }

    setLoading(true);
    const data = {
      name: customer.firstName,
      email: customer.email,
      phone_number: customer.phoneNumber,
      password: customer.password,
    }

    try {
      const response = await axios.post(
        "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/register",
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data.success !== true) {
        console.log('not registered')
        return
      }
      if (response.data.success === true) {
        const loginResponse = await axios.post("http://ec2-34-238-76-176.compute-1.amazonaws.com/api/login", {
          email: customer.email,
          password: customer.password
        }, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (loginResponse.data.success === true) {
          Cookies.set('auth', loginResponse.data.data.token, { expires: 1 });
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          navigate('/createpin')
        }
      }
    
      
    } catch (error) {
      console.log(error);
      // return handleShow('email/phone already exists', 'red', '')

    } finally {
      setLoading(false);
    }
  }



  return (
    <div className='w-[100%] min-h-[100vh] flex items-center justify-center bg-black'>
      <div className='mx-auto h-full lg:min-h-[60%] xl:min-h-[98%] w-[100%] lg:w-[50%]  xl:w-[40%] text-[#2C2C2C] bg-white flex flex-col px-[3%] rounded-[10px] border-solid border-black border-[2px]'>
        <p className='mt-[8%] text-[22px] font-[500] font-inter '>
          Register your account
        </p>
        <div className='flex flex-col w-[95%] mx-auto mt-[2%] justify-between h-[85%]'>
          <div className='flex flex-col'>
            <label
              htmlFor=''
              className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
              Business Name<span className='font-bold'>*</span>
            </label>
            <input
              type='text'
              name='businessName'
              value={customer.businessName}
              onChange={handleSave}
              className='mt-[2%] w-[80%] text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[8px] border-[1px] border-[#83879B] border-solid'
              placeholder='Enter text'
            />
          </div>
          {errors.businessName && (
            <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
              {errors.businessName}
            </div>
          )}

          <div className='flex mt-[2%]  w-[80%] items-center justify-between'>
            <span className='flex flex-col w-[47%]'>
              <label
                htmlFor=''
                className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
                First Name<span className='font-bold'>*</span>
              </label>
              <input
                placeholder='enter firstname'
                type='text'
                name='firstName'
                value={customer.firstName}
                onChange={handleSave}
                className='text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[5px] mt-[2%] border-[1px] border-[#83879B] border-solid'
              />
              {errors.firstName && (
                <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
                  {errors.firstName}
                </div>
              )}
            </span>

            <span className='flex flex-col w-[47%]'>
              <label
                htmlFor=''
                className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
                Last Name<span className='font-bold'>*</span>
              </label>
              <input
                type='text'
                placeholder='enter surname'
                name='lastName'
                value={customer.lastName}
                onChange={handleSave}
                className='text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[5px] mt-[2%] border-[1px] border-[#83879B] border-solid'
              />
              {errors.lastName && (
                <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
                  {errors.lastName}
                </div>
              )}
            </span>
          </div>
          <div className='flex flex-col mt-[2%]'>
            <label
              htmlFor=''
              className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
              Email<span className='font-bold'>*</span>
            </label>
            <input
              type='email'
              placeholder='enter email'
              name='email'
              onChange={handleSave}
              value={customer.email}
              className='mt-[2%] w-[80%] text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[8px] border-[1px] border-[#83879B] border-solid'
            />
          </div>
          {errors.email && (
            <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
              {errors.email}
            </div>
          )}

          <div className='flex flex-col mt-[2%]'>
            <label
              htmlFor=''
              className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
              Phone number<span className='font-bold'>*</span>
            </label>
            <input
              type='phone'
              name='phoneNumber'
              onChange={handleSave}
              value={customer.phoneNumber}
              className='mt-[2%] w-[80%] text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[8px] border-[1px] border-[#83879B] border-solid'
            />
          </div>
          {errors.phoneNumber && (
            <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
              {errors.phoneNumber}
            </div>
          )}

          <div className='flex flex-col mt-[2%]'>
            <label
              htmlFor=''
              className='text-[14px]  xl:text-[1.2vw] font-medium font-inter'>
              Create Password<span className='font-bold'>*</span>
            </label>
            <input
              type='password'
              name='password'
              onChange={handleSave}
              value={customer.password}
              className='mt-[2%] w-[80%] text-[14px]  xl:text-[1.2vw] text-[#83879B] font-inter p-[8px] rounded-[8px] border-[1px] border-[#83879B] border-solid'
            />
          </div>
          {errors.password && (
            <div className='text-[1.5vh] xl:text-[1vw] text-red-400'>
              {errors.password}
            </div>
          )}

          <div className='flex mt-[2%] items-center text-[10px] font-inter font-normal  justify-between'>
            <input
              type='checkbox'
              name=''
              id=''
              className='w-[30px] h-[30px]'
              onChange={toggleChecked}
            />
            <p className='ml-[2%]'>
              I consent to the collection and processing of my personal data
              in line with the data regulations as described in Persent’s
              Privacy Policy
            </p>
          </div>
          {
            checkError !== '' && <small className="text-[12px] text-[red]">{checkError}</small>
          }
          <div className='mt-[2%] flex flex-col'>
            <div className='flex items-center justify-center w-[50%] self-center bg-[#1F28EB] h-[40px] xl:h-[5vh] rounded-[0.5vw]'>
              <button
                onClick={register}
                className='font-roboto text-[16px] text-[white] font-bold'>
                Sign Up
              </button>
            </div>
            <p className='text-center text-[10px] font-roboto font-bold mt-[2%]'>
              By clicking the “Sign up” button, you agree to Persent’s Terms.
            </p>
            <p className='text-[15px] text-[#83879B] mt-[2%] mb-[1.5vw] text-center'>
              Already a user?{" "}
              <Link to='/' className='text-[#000000] underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Singup;
