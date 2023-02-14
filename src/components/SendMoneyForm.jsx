import React, { useState } from 'react';
import Selsect from './Selsect';
import Arrowdown from "../assets/ArrowDown.png";
import { useAppContext } from "../context.js";


function SendMoneyForm({ onClick }) {
  const { transactions, setTransactions } = useAppContext()


  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    let transactionsData = { ...transactions };
    transactionsData[name] = value;
    setTransactions(transactionsData);
    console.log(transactions)
  };


  return (
    <div className='w-full bg-[#FFFFFF] flex justify-center items-center font-inter min-h-full rounded-[0.5vw] border-solid border-[1px] border-[#E7E7E7]'>
      <div className='w-[90%] h-[95%] flex flex-col justify-between'>
        <h1 className='text-[18px] mt-[2vw] xl:text-[1.5vw] text-[#000000] font-bold'>
          Details
        </h1>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>From</h1>
          <div className='w-full border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'>
            <Selsect
              placeholder='Select account to debit'
              options={[`${user.id}`]}
              value={transactions.from}
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>Amount</h1>
          <input
            type='text'
            value={transactions.amount}
            onChange={handleValueChange}
            name='amount'
            id=''
            className='p-[2%] outline-none border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>
            Destination Bank
          </h1>
          <input
            type='text'
            value={transactions.destinationBank}
            onChange={handleValueChange}
            name='destinationBank'
            id=''
            className='p-[2%] outline-none border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>
            Account Number
          </h1>
          <input
            type='text'
            name='accountNumber'
            value={transactions.accountNumber}
            onChange={handleValueChange}
            id=''
            className='p-[2%] outline-none border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>Account Name</h1>
          <input
            type='text'
            value={transactions.accountName}
            onChange={handleValueChange}
            name='accountName'
            id=''
            className='p-[2%] outline-none border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-[14px] xl:text-[1.2vw] font-bold'>Description</h1>
          <input
            type='text'
            value={transactions.description}
            onChange={handleValueChange}
            name='description'
            id=''
            className='p-[2%] outline-none border-[0.7px] border-solid border-[#E7E7E7] rounded-[0.5vw] mt-[1%]'
          />
        </div>
        <div
          className='w-[90%] flex items-center  justify-center h-[50px] lg:h-[3vw] cursor-pointer my-[2vw] bg-[#1F28EB] rounded-[0.5vw] self-center'
          onClick={onClick}>
          <h1 className='text-[white] text-[14px] xl:text-[1.2vw] font-normal '>
            Proceed
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SendMoneyForm;