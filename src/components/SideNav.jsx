import React from 'react';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import send from '../assets/Activity.svg';
import setting from '../assets/setting-2.svg';
import activity from '../assets/arrange-square.svg';
import help from '../assets/Path.svg'
import { useAppContext } from "../context.js";
import Cookies from 'js-cookie';

function SideNav() {
  const { sidebar, setSidebar, setIsAuthenticated } = useAppContext();
  const navigate = useNavigate();

return (
  <>
    <div className=' h-[100vh] font-inter w-[15vw] hidden md:flex bg-[white]'>
      <div className='h-[80%] w-[80%] mx-auto flex flex-col justify-between mt-[7vh]'>
        <div className='flex flex-col w-[100%]'>
          <Link
            to='/dashboard'
            className=' hover:w-full h-[8vh] text-[#83879B] mt-[3%] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Dashboard
            </span>
          </Link>
          <Link
            to='/sendmoney'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img src={activity} />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Send
            </span>
          </Link>
          <Link className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Wallet
            </span>
          </Link>
          <Link className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Beneficiary
            </span>
          </Link>
          <Link
            to='/transactions'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={send}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Transaction
            </span>
          </Link>
        </div>
        <div className='flex flex-col w-[100%]'>
          <Link
            to='/logout'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[8%] rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='text-[14px] text-[#83879B] md:hidden lg:flex ml-[5%]'>
              Get Help
            </span>
          </Link>
          <Link
            onClick={() => {
              setIsAuthenticated(false);
              Cookies.remove("auth");
              navigate("/");
            }}
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[8%] rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='text-[14px] text-[#83879B] md:hidden lg:flex ml-[5%]'>
              Settings
            </span>
          </Link>
        </div>
      </div>
    </div>

    {/* navbar on mobile */}
    <div
      className={
        !sidebar
          ? "fixed -left-[100%]"
          : "bg-[white] h-[100vh] z-[99] font-inter w-[50vw] fixed flex md:hidden"
      }>
      <div className='h-[80%] w-[80%] mx-auto flex flex-col justify-between mt-[7vh]'>
        <div className='flex flex-col w-[100%]'>
          <Link
            to='/dashboard'
            className=' hover:w-full h-[8vh] text-[#83879B] mt-[3%] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[15%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Dashboard
            </span>
          </Link>
          <Link
            to='/sendmoney'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img src={activity} />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Send
            </span>
          </Link>
          <Link
            to='/manage-playlist'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Wallet
            </span>
          </Link>
          <Link
            to='/athletes'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Beneficiary
            </span>
          </Link>
          <Link
            to='/transactions'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[5%]  rounded-[0.2vw] mb-[2%]'>
            <img
              src={send}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='ml-[5%] text-[14px] text-[#83879B] md:hidden lg:flex'>
              Transaction
            </span>
          </Link>
        </div>
        <div className='flex flex-col w-[100%]'>
          <Link
            to='/logout'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[8%] rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='text-[14px] text-[#83879B] md:hidden lg:flex ml-[5%]'>
              Get Help
            </span>
          </Link>
          <Link
            to='/logout'
            className=' hover:w-full h-[8vh] text-[#83879B] hover:bg-[#F5F7F9] hover:text-[black] font-medium w-full flex items-center px-[8%] rounded-[0.2vw] mb-[2%]'>
            <img
              src={help}
              className='w-[10%] md:w-[50px] lg:w-[30px] xl:w-[15%]'
            />
            <span className='text-[14px] text-[#83879B] md:hidden lg:flex ml-[5%]'>
              Settings
            </span>
          </Link>
        </div>
      </div>
    </div>
  </>
);
}

export default SideNav