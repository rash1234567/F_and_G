import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppContext } from "../context.js";
import emoji from '../assets/Success.png'

function Message() {
  const { show, handleClose, message, variant, description } = useAppContext();

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className='modal w-[70vw] md:w-[400px] bg-[white] z-[99] flex flex-col shadow-2xl h-[300px] md:h-[350px] lg:w-[551px] lg:h-[387px] font-inter border-none absolute   rounded-[0.5vw]'>
        <Modal.Header closeButton className='flex flex-col items-center'>
          {" "}
          <i
            className='fa-solid text-[3vw] fa-xmark self-end'
            onClick={handleClose}></i>
        </Modal.Header>
        <Modal.Body
          style={{
            color: variant,
            height: "95%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          className={`text-[${variant}] text-center`}>
          <div className='flex flex-col items-center self-center justify-between w-full h-[95%]'>
            <div className='h-[80px] w-[80px] lg:w-[120px] lg:h-[120px] bg-[#FC3400] flex items-center justify-center mt-[5%] rounded-full'>
              <img src={emoji} className='w-[50%]' />
            </div>
            <p className='text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-[#2E2C34] mt-[10%]'>
              {" "}
              {message}
            </p>
            {description !=='' && (
              <p className='text-[10px] md:text-[12px] lg:text-[14px] font-medium text-[#83879B] mt-[2%]'>
                {description}
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Message;
