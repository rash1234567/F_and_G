import React, { useState, useEffect } from "react";
import Arrowdown from "../assets/ArrowDown.png";

function Selsect({ onSelect = () => {}, options = [], placeholder = ""}) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    let value = false;

    onSelect(selected);

    return () => {
      value = true;
    };
  }, [selected, onSelect]);

  return (
    <div className='relative w-full'>
      <button
        onClick={() => setShow(!show)}
        className='p-[2%] bg-white w-full outline-none focus:outline-none flex justify-between items-center'>
        <h5 className='text-[#23262F] font-inter text-[14px] xl:text-[1.2vw]'>
          {selected !== "" ? selected : placeholder}
        </h5>
        <img src={Arrowdown} />
      </button>

      {show && (
        <div className='w-full absolute overflow-y-auto bg-white mt-1 z-50 max-h-40'>
          {options.map((each, i) => {
            const eachh = typeof each === "string" ? each : each.name;
            return (
              <span
                key={i}
                onClick={() => {
                  setSelected(eachh);
                  setShow(false);
                }}
                className='block hover:bg-pc-secondaryshade1 hover:bg-opacity-10 border-b px-3 py-3 cursor-pointer text-sm text-pc-grey6 border-gray-300'>
                {eachh}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Selsect;
