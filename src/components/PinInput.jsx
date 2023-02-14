import React, { useState } from "react";

const PinInput = () => {
  const [pins, setPins] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    let newPins = [...pins];
    newPins[index] = e.target.value;
    setPins(newPins);
  };

  return (
    <div className='flex'>
      {pins.map((pin, index) => (
        <input
          key={index}
          type='password'
          maxLength={1}
          value={pin}
          onChange={(e) => handleChange(e, index)}
          className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-12 xl:h-12 border border-[#83879B] rounded-lg text-center mx-2'
        />
      ))}
    </div>
  );
};

export default PinInput;
