import React, { useState, useRef } from "react";
import ThankYou from "../ThankYou";
import { Questionaires } from "../../data/questionaire";
import emailjs from "@emailjs/browser";

const Questionaire = () => {
  const [tabs, setTabs] = useState(0);
  const [showThankYou, setshowThankYou] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState({});

  const handleNextTab = (e) => {
    e.preventDefault();
    tabs == Questionaires.length - 1
      ? sendEmail()
      : tabs < Questionaires.length - 1
      ? setTabs(tabs + 1)
      : "";
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer({
      ...selectedAnswer,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = () => {
    var emailParams = {
      to_email: "Pigdreamsstar@gmail.com",
      from_name: "DICKEYS BARBEQUE PIT",
    };

    Questionaires.forEach((question, index) => {
      (emailParams[`Question${index + 1}`] = question.question),
        (emailParams[`Answer${index + 1}`] =
          selectedAnswer[question.question] );
    });


    emailjs
      .send(
        "service_lzx7guf",
        "template_1n0k6br",
        emailParams,
        "x3lGtSy8W8zVR-YUg"
      )
      .then(
        (result) => {
          setshowThankYou(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <>
      {!showThankYou && (
        <div className="container mx-auto p-7 px-10 mt-10">
          <div className="flex flex-col">
            <p className="font-sans text-black font-medium text-lg">
              {`${tabs + 1}. ${Questionaires[tabs].question}`}
            </p>
          </div>

          {Questionaires[tabs].options.map((option, index) => (
            <div className="flex flex-col" key={index}>
              <div>
                <label className="inline-flex items-center ml-3 mt-3">
                  <input
                    type="radio"
                    className=" h-4 w-4 text-green-500 border-green-500 "
                    name={Questionaires[tabs].question}
                    value={option}
                    onChange={handleAnswerChange}
                  />
                  <span className="ml-3 mt-0.5 ">{option}</span>
                </label>
              </div>
            </div>
          ))}

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
              {tabs == Questionaires.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      )}

      {showThankYou && <ThankYou />}
    </>
  );
};

export default Questionaire;
