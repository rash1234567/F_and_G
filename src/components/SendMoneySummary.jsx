import React from 'react';
import { useAppContext } from "../context.js";
import axios from 'axios';

function SendMoneySummary({ onClick, onEdit }) {
  const { transactions, setTransactions } = useAppContext();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.id);


  return (
    <div className='w-[100%] md:w-[90%] xl:w-[75%] h-[505px] xl:h-[95%] bg-[#ffffff]  self-center flex items-center justify-center rounded-[0.5vw] border-[1px] border-solid border-[#F5F5F5]'>
      <div className='w-[90%] h-[95%]  flex flex-col justify-between'>
        <h1 className='text-[18px] xl:text-[2vw] font-bold'>Summary</h1>
        <div className='flex flex-col h-[45%] bg-[#FAFAFA] px-[3%] rounded-[0.5vw] justify-around w-full'>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-[13px] xl:text-[1vw] font-bold font-inter'>
              Destination Details:
            </h1>
            <span className='text-[#0177FD] text-[12.5px] xl:text-[1vw]' onClick={onEdit}>
              <i class='fa-solid fa-pen'></i>
              Edit
            </span>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Amount:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {transactions.amount}
            </p>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Bank:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {transactions.destinationBank}
            </p>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Account Number:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {transactions.accountNumber}
            </p>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Account Name:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {transactions.accountName}
            </p>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Nil
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {transactions.description}
            </p>
          </div>
        </div>
        <div className='flex flex-col h-[20%] bg-[#FAFAFA] px-[3%] rounded-[0.5vw] justify-between w-full'>
          <h1 className='text-[13px] xl:text-[1vw] font-bold font-inter'>
            Transaction Details:
          </h1>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Transaction Fee:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              N100
            </p>
          </div>
          <div className='flex items-center justify-between w-[85%] md:w-[70%] '>
            <h1 className='text-[#83879B] text-[13.5px] xl:text-[1vw] font-inter font-normal'>
              Total:
            </h1>
            <p className='text-[#000000] text-[13.5px] xl:text-[1vw] font-bold font-inter'>
              {parseInt(transactions.amount) + 100}
            </p>
          </div>
        </div>
        <div className='w-full bg-[#1F28EB] flex items-center justify-center cursor-pointer text-[white] font-inter font-bold text-[13.5px] xl:text-[1vw] h-[15%] rounded-[0.5vw]' onClick={onClick}>
          <span>Confirm and Send</span>
        </div>
      </div>
    </div>
  );
}

export default SendMoneySummary