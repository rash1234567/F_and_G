import React, { useState } from "react";
import { useAppContext } from "../context.js";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie'

function ConfirmTransaction({ onClick }) {
  const { setLoading, handleShow } = useAppContext();
  const [pins, setPins] = useState(["", "", "", ""]);
  const navigate = useNavigate()
  const { transactions, setTransactions } = useAppContext();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const handleChange = (e, index) => {
    let newPins = [...pins];
    newPins[index] = e.target.value;
    setPins(newPins);
    console.log(newPins);
  };

  const handleBlur = (e, index) => {
    if (e.target.value.length === 0) {
      return;
    }
    handleChange(e, index);
  };

  const handleTransaction = async () => {
    setTransactions((prevState) => ({ ...prevState, pin: pins }));
    console.log(transactions);
    console.log(transactions.pin.join(""));
    const token = Cookies.get("auth");
    console.log(token);
    setLoading(true);
    try {
      await axios
        .post(
          "http://ec2-34-238-76-176.compute-1.amazonaws.com/api/wallets/wallet",
          {
            from: user.id,
            description: transactions.description,
            pin: pins.join(""),
            destination: transactions.accountNumber,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate('/transactionsucessful')
          } else {
            handleShow('Transaction declined', 'red', 'Pin not valid')
          }

        });
    } catch (error) {
      console.log(error);
      if (error instanceof axios.AxiosErrorerror && error.response.status === 500) {
        setLoading(false);
        navigate('/transactionsucessful')
      }
    }
    setLoading(false);
  };

  return (
    <div className='w-[90%] md:w-[450px] xl:w-[60%] h-[264px] xl:h-[50%] bg-[#ffffff] self-center flex items-center justify-center rounded-[0.5vw] border-[1px] border-solid border-[#F5F5F5]'>
      <div className='w-[90%] h-[95%] flex flex-col justify-between'>
        <div className='mt-[5%] w-full h-[100%] flex flex-col justify-around'>
          <div className='mx-auto w-full flex flex-col'>
            <div className='flex w-[70%] mx-auto justify-between'>
              {pins.map((pin, index) => (
                <input
                  key={index}
                  type='password'
                  maxLength={1}
                  value={pin}
                  onChange={(e) => handleChange(e, index)}
                  onBlur={(e) => handleBlur(e, index)}
                  className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-12 xl:h-12 border border-[#83879B] rounded-lg text-center mx-2'
                />
              ))}
            </div>
          </div>
          <p className='text-center text-[#87898E] font-normal  text-[12px] lg:text-[1.5vh] xl:text-[0.9vw]'>
            Provide your secret transaction pin
          </p>
          <button
            className='bg-[#1F28EB] rounded-md mx-auto w-[70%] py-[3%] text-[16px] lg:text-[1.87vh] xl:text-[1vw] font-[600] text-[#FCFCFD] confirmpinbutton'
            onClick={handleTransaction}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTransaction;
