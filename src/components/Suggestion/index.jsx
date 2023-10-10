import React from "react";

const Suggeston = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-start p-5 mt-7">
        <p className="text-lg font-bold">Write your suggestion below...</p>
      </div>
      <div className="flex justify-start px-5 ">
      <textarea
        defaultValue={""}
        className=" block w-full rounded-xl  px-3.5 py-2 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name="message"
        id="message"
        rows={6}
        placeholder="Type something here..."
      ></textarea>
      </div>
      <div className='flex justify-start px-5'>
          <button className='mt-10 p-3 text-white w-36 rounded-3xl text-lg' style={{background:'#1E0300'}} >SEND NOW</button>
        </div>
    </div>
  );
};

export default Suggeston;
