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
    const { name, type } = event.target;
    if (type == "radio ") {
      setSelectedAnswer({
        ...selectedAnswer,
        [name]: event.target.value,
      });
    } else {
      
      const checkBoxValue = event.target.defaultValue;
      const isChecked = event.target.checked;

      const checkboxValue = event.target.defaultValue;
      const isCheckboxChecked = event.target.checked;

      setSelectedAnswer((prevSelectedAnswer) => {
        // Copy the previous selected answers
        const updatedSelectedAnswer = { ...prevSelectedAnswer };
        
        // Initialize an array for the checkboxes if it doesn't exist
        updatedSelectedAnswer[name] = updatedSelectedAnswer[name] || [];
  
        if (isCheckboxChecked) {
          // If the checkbox is checked and the value doesn't already exist, add it to the array
          if (!updatedSelectedAnswer[name].includes(checkboxValue)) {
            updatedSelectedAnswer[name].push(checkboxValue);
          }
        } else {
          // If the checkbox is unchecked, remove the value from the array
          updatedSelectedAnswer[name] = updatedSelectedAnswer[name].filter((value) => value !== checkboxValue);
        }
  
        return updatedSelectedAnswer;
      });

    }

  };

  const sendEmail = () => {
    var emailParams = {
      to_email: "Pigdreamsstar@gmail.com",
      from_name: "DICKEYS BARBEQUE PIT",
    };

    Questionaires.forEach((question, index) => {
      (emailParams[`Question${index + 1}`] = question.question),
        (emailParams[`Answer${index + 1}`] = selectedAnswer[question.question]);
    });

     console.log({emailParams})

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
            <div className="flex flex-col " key={index}>
              {Questionaires[tabs].type == "radio" && (
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
              )}
              {Questionaires[tabs].type == "checkbox" && (
                <div>
                  <label className="inline-flex items-center ml-3 mt-3">
                    <input
                      type="checkbox"
                      className=" h-4 w-4 text-green-500 border-green-500 "
                      name={Questionaires[tabs].question}
                      value={option}
                      onChange={handleAnswerChange}
                    />
                    <span className="ml-3 mt-0.5 ">{option}</span>
                  </label>
                </div>
              )}
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
