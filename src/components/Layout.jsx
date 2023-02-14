import React, { useEffect } from "react";
import SideNav from "./SideNav";
import { useAppContext } from "../context.js";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const { sidebar, setSidebar, isAuthenticated } = useAppContext();
  const navigate = useNavigate()
  
  // useEffect(() => {
  //  if (!isAuthenticated) {
  //   navigate('/')
  //  }
  // }, [isAuthenticated])
  

  return (
    <div className='flex'>
      <SideNav />
      <div className=' flex flex-col w-[100vw] xl:w-[86vw] bg-[#FFFFFF]'>
        <div className=' flex justify-between items-center px-[5%] py-[1vw]'>
          <button className='bg-[#1F28EB] rounded-lg text-[#FFFFFF] font-normal text-[1.6vh]  xl:text-[1vw] h-[5.1vh] xl:h-[3.2vw] w-[17vh] xl:w-[10.7vw]'>
            + Add money
          </button>
          <span className='flex items-center justify-around'>
            <i className='fa-regular fa-bell text-[2.1vh] xl:text-[1.5vw]'></i>
            <span className='bg-gray-500 border w-[30px] h-[30px] rounded-full  xl:h-[2.3vw] xl:w-[2.3vw] ml-[1vw]'></span>
            <i
              className='fa-solid fa-bars text-[20px] ml-[10%] md:hidden'
              onClick={() => setSidebar(!sidebar)}></i>
          </span>
        </div>
        <main className='bg-[#FAFAFA] flex flex-col min-h-[100vh] 2xl:min-h-[90vh]'>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
