import React, { useEffect, useState } from "react";
import SendMoneyForm from "../components/SendMoneyForm";
import SendMoneySummary from "../components/SendMoneySummary";
import ConfirmTransaction from "../components/ConfirmTransaction";
import Modal from '../components/Modal';
import { useAppContext } from "../context.js";
import TimeLine from '../components/TimeLine';


function SendMoney() {
  const { show, handleClose, message, variant, description, handleShow } = useAppContext();

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.id)

  const [activeStep, setActiveStep] = useState(1);
  const [formStep, setFormStep] = useState(1)


  const handleStepClick = (step) => {
    setActiveStep(step);
  };


  const handleNextButtonClick = () => {
    setFormStep(formStep + 1);
  };

  const handleBackButtonClick = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div className='flex flex-col px-[2%] py-[10%] md:py-[5%] lg:py-[1%] h-[800px] md:h-[100vh] xl:h-[100vh] justify-between w-full'>
      <div className='flex font-inter text-[14px] xl:text-[1.2vw] items-center font-bold'>
        <h1 className='text-[#000000]'>Send</h1>
        <i className='fa-solid fa-chevron-right text-[#83879B] ml-[0.5%]'></i>
        <h1 className='text-[#83879B] ml-[0.5%]'>Local</h1>
      </div>
      <div className='flex flex-col w-[90%] xl:w-[70%] h-[95%] self-center justify-between'>
        <div className='self-center w-[100%]'>
          <TimeLine activeStep={activeStep} />
        </div>

        {/* the first form on the screen for transaction */}
        {activeStep === 1 && (
          <div className='w-[90%] lg:w-[468px] xl:w-[50%] h-[90%] self-center mt-[10%]'>
            <SendMoneyForm
              onClick={() => {
                handleStepClick(2);
                console.log("clicked");
              }}
            />
          </div>
        )}

        {/* transaction summary */}
        {activeStep === 2 && (
          <div className='w-[100%] md:w-[550px] xl:w-[90%] h-[90%] self-center flex flex-col'>
            <SendMoneySummary
              onClick={() => handleStepClick(3)}
              onEdit={() => handleStepClick(1)}
            />
          </div>
        )}

        {/* enter pin to confirm transaction div */}
        {activeStep === 3 && (
          <div className='w-[100%] md:w-[550px] xl:w-[90%] h-[90%] self-center flex flex-col'>
            <ConfirmTransaction
              onClick={() =>
                handleShow(
                  "Insufficient fund",
                  "black",
                  "You do not have sufficient balance in your wallet, add money to continue transaction"
                )
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SendMoney;
