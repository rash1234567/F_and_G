import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context';
import Cookies from 'js-cookie';


function Createpin() {
  const { handleShow,setLoading } = useAppContext()
  const navigate = useNavigate()
   const [pins, setPins] = useState(["", "", "", ""]);

   const handleChange = (e, index) => {
     let newPins = [...pins];
     newPins[index] = e.target.value;
     setPins(newPins);
  };

  async function createPin() {
    const pin = pins.join('');

    if (pin.length < 4) {
     return handleShow('Invalid pin, try again')
    }

    const data = {
      pin:pin
    }

    const token = Cookies.get(('auth'));
    console.log(data, token);
    setLoading(true);


    try {
      const response = await axios.patch(
        "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/users/set-pin",
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Token: token
          },
        }
      );

      // if (response.status !== 200 || response.data.success !== true) {
      //   Cookies.delete('auth')
      //   navigate('/')
      //   return handleShow('ERROR, Please try again', 'red', '')
      // }
      Cookies.remove('auth')
      navigate('/')

    } catch (error) {
      Cookies.remove('auth')
      navigate('/')
      console.log(error)
      // handleShow('Please try again', 'red', '')
    } finally {
     
      setLoading(false);
    }
    navigate('/')
  }
  
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='bg-white w-[95%] md:w-[80%] xl:w-[35%] xl:h-[72%] h-[50vh] flex flex-col items-center  '>
        <h3 className='text-[22px] lg:text-[2.6vh] xl:text-[1.6vw] font-[500] mt-[9.4%]'>
          Create PIN
        </h3>
        <p className='mt-[3%] w-[70%] text-center font-[400] text-[13px] lg:text-[1.5vh] xl:text-[1vw] text-[#83879B]'>
          Transaction PIN is a 4-digit, which will be used to authorize your
          transactions
        </p>
        <div className='mt-[5%] w-[80%] h-[50%] border flex flex-col justify-around py-[5%]  '>
          <div className='mx-auto'>
            <div className='flex'>
              {pins.map((pin, index) => (
                <input
                  key={index}
                  type='password'
                  maxLength={1}
                  value={pin}
                  onChange={(e) => handleChange(e, index)}
                  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-12 xl:h-12 border border-[#83879B] rounded-lg text-center mx-2'
                />
              ))}
            </div>
          </div>
          <p className='text-start text-[#87898E] px-[15%]  font-[500] text-[12px] lg:text-[1.5vh] xl:text-[0.9vw]'>
            Provide your secret transaction pin
          </p>
          <button className='bg-[#1F28EB] rounded-md mx-auto w-[70%] py-[3%] text-[16px] lg:text-[1.87vh] xl:text-[1vw] font-[600] text-[#FCFCFD]' onClick={createPin}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createpin