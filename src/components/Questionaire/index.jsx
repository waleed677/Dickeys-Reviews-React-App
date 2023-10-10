import React, { useState } from "react";
import ThankYou from "../ThankYou";

const Questionaire = () => {
  const [tabs, setTabs] = useState(1);
  const [showThankYou, setshowThankYou] = useState(false);

  const handleNextTab = () => {
    tabs == 3 ? setshowThankYou(true) : setTabs(tabs + 1);
  };

  return (
    <>
    {!showThankYou && 
      <div className="container mx-auto p-7 px-10 mt-10">
        {tabs == 1 && (
          <div className="flex flex-col">
            <div>
              <p className="font-sans text-black font-medium text-lg">
                1. How was our food quality?
              </p>
              <div className="flex flex-col">
                <div>
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" h-4 w-4 text-green-500 border-green-500 "
                      name="radio-colors"
                      value="Great"
                    />
                    <span className="ml-3 mt-0.5 ">Great</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" text-indigo-600 h-4 w-4"
                      name="radio-colors"
                      value="Good"
                    />
                    <span className="ml-3 mt-0.5">Good</span>
                  </label>
                </div>

                <div>
                  <label class="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" text-indigo-600 h-4 w-4"
                      name="radio-colors"
                      value="Not Good"
                    />
                    <span className="ml-3 mt-0.5">Not Good</span>
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
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" h-4 w-4 text-green-500 border-green-500 "
                      name="radio-experience"
                      value="Great"
                    />
                    <span className="ml-3 mt-0.5 ">Great</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" text-indigo-600 h-4 w-4"
                      name="radio-experience"
                      value="Good"
                    />
                    <span className="ml-3 mt-0.5">Good</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" text-indigo-600 h-4 w-4"
                      name="radio-experience"
                      value="Not Good"
                    />
                    <span className="ml-3 mt-0.5">Not Good</span>
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
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="radio"
                      className=" text-indigo-600 h-4 w-4"
                      name="radio-visit"
                      value="Yes"
                    />
                    <span className="ml-3 mt-0.5">Yes</span>
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
        )}

        {tabs == 2 && (
          <div>
            {" "}
            <p className="font-sans text-black font-medium text-lg">
              Sorry to hear that !!! Where did you fall short?
            </p>
            <div className="flex flex-col">
              <div>
                <label className="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" h-4 w-4 text-green-500 border-green-500 "
                    name="radio-short"
                    value="Accuracy"
                  />
                  <span className="ml-3 mt-0.5 ">Accuracy</span>
                </label>
              </div>

              <div>
                <label className="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Cleanliness"
                  />
                  <span className="ml-3 mt-0.5">Cleanliness</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Food Quality"
                  />
                  <span className="ml-3 mt-0.5">Food Quality</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Food Quality"
                  />
                  <span className="ml-3 mt-0.5">Taste of Food</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Food Quality"
                  />
                  <span className="ml-3 mt-0.5">Friendliness</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Food Quality"
                  />
                  <span className="ml-3 mt-0.5">Speed of Services</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Food Quality"
                  />
                  <span className="ml-3 mt-0.5">Staff behavior</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {tabs == 3 && (
          <div>
            {" "}
            <p className="font-sans text-black font-medium text-lg">
              Where did we miss on cleanliness?
            </p>
            <div className="flex flex-col">
              <div>
                <label className="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" h-4 w-4 text-green-500 border-green-500 "
                    name="radio-short"
                    value="Chairs"
                  />
                  <span className="ml-3 mt-0.5 ">Chairs</span>
                </label>
              </div>

              <div>
                <label className="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Drink Bar"
                  />
                  <span className="ml-3 mt-0.5">Drink Bar</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Floors"
                  />
                  <span className="ml-3 mt-0.5">Floors</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Tables"
                  />
                  <span className="ml-3 mt-0.5">Tables</span>
                </label>
              </div>

              <div>
                <label class="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" text-indigo-600 h-4 w-4"
                    name="radio-short"
                    value="Somethings else"
                  />
                  <span className="ml-3 mt-0.5">Somethings else</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <hr className="bg-red-custom h-2 w-28 rounded-xl" />{" "}
          <hr className="bg-red-custom h-2 w-28 ml-2 rounded-xl" />
        </div>
        <div className="flex justify-center">
          <button
            className="mt-10 p-3 text-white w-64 rounded-3xl text-xl"
            style={{ background: "#1E0300" }}
            onClick={handleNextTab}
          >
            {tabs == 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      }

      {showThankYou && <ThankYou/>}
    </>
  );
};

export default Questionaire;
