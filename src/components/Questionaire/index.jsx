import React from "react";

const Questionaire = () => {
  return (
    <div className="container mx-auto p-7 px-10 mt-10">
      <div className="flex flex-col">
        <div>
          <p className="font-sans text-black font-medium text-lg">
            1. How was our food quality?
          </p>
          <div className="flex flex-col">
            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" h-4 w-4 text-green-500 border-green-500 "
                  name="radio-colors"
                  value="Great"
                />
                <span class="ml-3 mt-0.5 ">Great</span>
              </label>
            </div>

            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-colors"
                  value="Good"
                />
                <span class="ml-3 mt-0.5">Good</span>
              </label>
            </div>


            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-colors"
                  value="Not Good"
                />
                <span class="ml-3 mt-0.5">Not Good</span>
              </label>
            </div>

          </div>
        </div>

        <div className="mt-6">
          <p className="font-sans text-black font-medium text-lg">
          2. How was your experience with staffs?
          </p>
          <div className="flex flex-col">
            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" h-4 w-4 text-green-500 border-green-500 "
                  name="radio-experience"
                  value="Great"
                />
                <span class="ml-3 mt-0.5 ">Great</span>
              </label>
            </div>

            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-experience"
                  value="Good"
                />
                <span class="ml-3 mt-0.5">Good</span>
              </label>
            </div>


            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-experience"
                  value="Not Good"
                />
                <span class="ml-3 mt-0.5">Not Good</span>
              </label>
            </div>

          </div>
        </div>

        <div className="mt-6">
          <p className="font-sans text-black font-medium text-lg">
          3. Did we sign and cheer during your visit?
          </p>
          <div className="flex flex-col">
           
            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-visit"
                  value="Yes"
                />
                <span class="ml-3 mt-0.5">Yes</span>
              </label>
            </div>


            <div>
              <label class="inline-flex items-center ml-3 mt-3">
                <input
                  type="radio"
                  class=" text-indigo-600 h-4 w-4"
                  name="radio-visit"
                  value="No"
                />
                <span class="ml-3 mt-0.5">No</span>
              </label>
            </div>

          </div>
        </div>
      </div>

      <div className='flex justify-center mt-10'>
          <hr className='bg-red-custom h-2 w-28 rounded-xl'/>  <hr className='bg-red-custom h-2 w-28 ml-2 rounded-xl'/>
        </div>
        <div className='flex justify-center'>
          <button  className='mt-10 p-3 text-white w-64 rounded-3xl text-xl' style={{background:'#1E0300'}} >Next</button>
        </div>
    </div>
  );
};

export default Questionaire;
