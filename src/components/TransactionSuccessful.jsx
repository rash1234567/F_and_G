import React from "react";
import { useAppContext } from "../context.js";

function TransactionSuccessful() {
  const { setLoading, handleShow } = useAppContext();
  const { transactions, setTransactions } = useAppContext();

  return (
    <div className='w-[90%] xl:w-[60%] self-center flex items-center justify-center rounded-[0.5vw] h-[90vh] md:h-[700px] xl:h-[90vh]'>
      <div className=' w-[300px] h-[500px] md:w-[100%] md:h-[90%] xl:w-[90%] xl:h-[90%] font-inter flex flex-col items-center justify-between'>
        <h1 className='text-[18px] md:text-[24px] xl:text-[2vw] font-semibold'>
          Transfer Successful
        </h1>
        <div className='h-[70%] w-[100%] md:w-[461px] md:h-[341px] xl:w-[75%] xl:h-[70%] bg-black flex items-center justify-center rounded-[1vw]'>
          <div className='flex flex-col items-center justify-between w-[95%] h-[80%]'>
            <div className='text-[60px] md:text-[100px] text-[#3FB48D]'>
              <i class='fa-solid fa-certificate'></i>
            </div>
            <h1 className='text-[#FFFFFF] text-[12px] md:text-[18px] xl:text-[1.5vw]'>
              Congratulations your transfer is succesful
            </h1>
            <p className='text-[#FAFAFA] text-[11px] md:text-[13px] xl:text-[1.2vw]'>
              Below is transfer summary
            </p>
            <div className='flex flex-col h-[37%] bg-transparent px-[2%] py-[2%] rounded-[0.5vw] justify-between w-[80%] border-dashed border-[1px] border-[#FFFFFF]'>
              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col justify-between'>
                  <h1 className='text-[#FFFFFF] text-[10px] md:text-[12px] xl:text-[0.9vw] font-bold'>
                    Withdrawal amount
                  </h1>
                  <p className='text-[#FFFFFF] font-normal text-[11px] md:text-[13px] xl:text-[1vw] '>
                    {transactions.amount}
                  </p>
                </div>
                <div className='flex flex-col  justify-between'>
                  <h1 className='text-[#FFFFFF] text-[10px] md:text-[12px] xl:text-[0.9vw] font-bold'>
                    Name
                  </h1>
                  <p className='text-[#FFFFFF] font-normal text-[11px] md:text-[13px] xl:text-[1vw]  font-inter'>
                    {transactions.accountName}
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col justify-between'>
                  <h1 className='text-[#FFFFFF] text-[10px] md:text-[12px] xl:text-[0.9vw] font-bold'>
                    Account Number
                  </h1>
                  <p className='text-[#FFFFFF] font-normal text-[11px] md:text-[13px] xl:text-[1vw]  font-inter'>
                    {transactions.accountNumber}
                  </p>
                </div>
                <div className='flex flex-col justify-between'>
                  <h1 className='text-[#FFFFFF] text-[10px] md:text-[12px] xl:text-[0.9vw] font-bold'>
                    Destination Bank
                  </h1>
                  <p className='text-[#FFFFFF] font-normal text-[11px] md:text-[13px] xl:text-[1vw]  font-inter'>
                    {transactions.destinationBank}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-[8%] xl:h-[10%] w-[40%] md:w-[30%] text-white text-[16px] xl:text-[1.4vw] cursor-pointer font-semibold donebutton rounded-[0.7vw] md:rounded-[0.5vw]'>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionSuccessful;
