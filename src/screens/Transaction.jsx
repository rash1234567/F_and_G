import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useAppContext } from "../context";
import noTrans from '../assets/Group 1000005196.png'
import Cookies from "js-cookie"

function Transaction() {
  const {setLoading} = useAppContext()
    const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setLoading(true)
    const token = Cookies.get('auth')
    const getTransactions = () => {
      axios
        .get("http://ec2-34-238-76-176.compute-1.amazonaws.com/api/user-wallet-transaction", {
          headers: {
            "Authorization": `Bearer ${token}` ,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log(response.data);
          setTransaction(response.data.data.transaction)
        })
        .catch(error => {
          console.error(error);    
        });
      setLoading(false)
    }
    getTransactions()
  }, [])

  
  return (
    <div className='bg-[white] m-[1%] md:m-[2%] w-[full] font-inter h-[100vh] flex items-center justify-center'>
      <div className='w-[95%] h-[95%] flex flex-col justify-between'>
        <h1 className='text-[17px] xl:text-[1.7vw] font-bold text-[#000000]'>
          Transaction
        </h1>
        {/* table */}
        <div className='h-[90%]'>
          {
            transaction.length < 1 ? 
              <div className="w-full h-full flex items-center justify-center">
                <img src={noTrans} alt="" />
              </div>
              :
          <>
              <div className='flex w-full items-center justify-between bg-[#ffffff] h-[53px] 2xl:h-[5vh] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[1.2vw] font-medium text-[#83879B] border-t-solid border-t-[#F0F0F7] border-t-[1px] border-b-[#F0F0F7] border-b-[1px] border-b-solid'>
                <h1 className='w-[18%]'>Reference</h1>
                <h1 className='w-[28%]'>Transaction information</h1>
                <h1 className='w-[15%]'>Currency</h1>
                <h1 className='w-[24%]'>Date</h1>
                <h1 className='w-[15%]'>Status</h1>
              </div>

          {
            transaction.map(transaction => {
              return (<div className='flex w-full items-center justify-between h-[53px] bg-[#ffffff] 2xl:h-[5vh] text-[8px] md:text-[12px] lg:text-[14px] xl:text-[1.2vw] font-normal text-[#00000] border-b-[#F0F0F7] border-b-[1px] border-b-solid'>
                <h1 className='w-[18%]'>{transaction.reference }</h1>
                <h1 className='w-[28%]'>
                  {transaction.amount} <span className='text-[#83879B]'>from ******</span>
                  {transaction.initiatedBy_id}
                </h1>
                <h1 className='w-[15%]'>NGN</h1>
                <h1 className='w-[24%]'>{transaction.created_at}</h1>
                <div className='w-[15%] flex items-center '>
                  <h1 className='w-[80%] bg-[#52C41A1A] text-[#52C41A] text-center rounded-[0.6vw]'>
                   {transaction.status}
                  </h1>
                </div>
              </div>)
            })
                }
          </>
         }
        
        </div>
      </div>
    </div>
  );
}

export default Transaction;
