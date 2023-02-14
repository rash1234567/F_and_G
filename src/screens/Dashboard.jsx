import React from 'react'
import flag from "../assets/Shape.png";
import { useNavigate } from 'react-router-dom'
import SimpleBarChart from '../components/Chart';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className='w-[100%] pb-[3.5vw] bg-[#F5F7F9] px-[2vh] xl:px-[2.6vh] pt-[1vw]'>
      <div className=' xl:w-[81vw] h-[16.8vh] xl:h-[10.5vw] bg-white flex shadow-lg'>
        <div className='bg-black rounded-lg w-[50%] md:w-[40%] xl:w-[16vw] h-full xl:h-[10.5vw] text-white px-[1%] py-[1%] flex flex-col justify-around'>
          <span className='justify-between items-center flex w-full '>
            <span className='flex items-center'>
              <img src={flag} alt='' className='w-[3.6vh] xl:w-[2.3vw]' />
              <p className='text-[#F5F7F9] mt-[1%] font-[400] text-[1.3vh] xl:text-[0.8vw]'>
                NGN
              </p>
            </span>
            <p className='text-[#F5F7F9] mt-[1%] font-[400] text-[1.3vh] xl:text-[0.8vw]'>
              Available balance
            </p>
          </span>
          <span>
            <p className=' font-[400] text-[2.3vh] xl:text-[1.5vw]'>
              12,345 NGN
            </p>
            <p className='text-[#F5F7F9] mt-[1%] font-[400] text-[1.3vh] xl:text-[0.8vw]'>
              -N180.000{" "}
            </p>
          </span>
        </div>
        <div className='w-[50%] md:w-[40%] xl:w-[16vw] h-full xl:h-[10.5vw] md:border-r text-white px-[2%] py-[5%] flex flex-col justify-between '>
          <p className='text-black font-[400] text-[1.6vh] xl:text-[1vw]'>
            Savings
          </p>
          <span>
            <p className=' text-[2.3vh] xl:text-[1.5vw] text-black font-[700]'>
              831,071 NGN
            </p>
            <p className='text-[#83879B] mt-[1%] font-[400] text-[1.3vh] xl:text-[0.8vw]'>
              -N180.000
            </p>
          </span>
        </div>
      </div>
      <div
        id='chart'
        className=' xl:w-[81vw] h-[26vh] xl:h-[35vw] flex shadow-lg mt-[1vw]'>
        <SimpleBarChart />
      </div>
      <div className=' xl:w-[81vw] h-[26vh] xl:h-[35vw] flex flex-wrap justify-between mt-[2vw]'>
        <div className='w-[100%] lg:w-[51vw] h-full bg-green-600  p-[2%]'>
          <div className='flex justify-between'>
            <p className='text-[1.6vh] xl:text-[1vw] text-[#23262F] font-[600]'>
              Transactions
            </p>
            <button
              className='text-[#83879B] bg-[#F5F5F5] rounded-lg text-[0.8vw] font-[500] w-[11vh] h-[3.3vh] xl:w-[7vw] xl:h-[2vw]'
              onClick={() => navigate("/transactions")}>
              View All <i class='fas fa-chevron-right'></i>
            </button>
          </div>
          <div>
            <div id='tablehead'></div>
            <div id='tablebody'></div>
          </div>
        </div>
        <div className='w-[100%] mt-[1.5%] md:mt-0 lg:w-[28vw] h-full bg-blue-300 p-[3%] flex flex-col justify-between'>
          <div className='h-[70%] flex justify-between flex-col'>
            <h3 className='xl:text-[1.2vw] text-[16px] font-[600] '>
              Quick transaction
            </h3>
            <div className='flex w-full items-center justify-around '>
              <button className='bg-[#F7F9FA] text-[center] h-[39px] w-[45%] md:h-[6vh] rouded-[0.5vw] font-medium'>
                Add Money
              </button>
              <button className='bg-[#F7F9FA] text-[center] h-[39px] w-[45%] md:h-[6vh] rouded-[0.5vw] font-medium'>
                Withdraw
              </button>
            </div>
            <p className='text-[13px] xl:text-[1vw] text-[#000000] font-semibold'>
              Account
            </p>
            <div>
              <input
                type='text'
                name=''
                id=''
                className='w-[60%] h-[39px]h-[39px] md:h-[6vh] rouded-[0.5vw] bg-[#F7F9FA]'
              />
            </div>
            <p className='text-[13px] xl:text-[1vw] text-[#000000] font-semibold'>
              Amount
            </p>
            <div>
              <input
                type='number'
                name=''
                id=''
                className='w-[100%] h-[39px]h-[39px] md:h-[6vh] rouded-[0.5vw] bg-[#F7F9FA]'
              />
            </div>
          </div>
          <button className='bg-[#1F28EB] text-center text-[2.1vh] xl:text-[1.3vw] text-[white] font-[600] rounded-lg w-full  h-[6.4vh] xl:h-[4vw]'>
            Add
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Dashboard;