import React, { useEffect, useState } from "react";

// Import Smileys

import {
  Excellent,
  Great,
  Happy,
  Poor,
  VeryPoor,
  Cool,
} from "../../assets/imageIndex";

const feedbackText = ["VERY POOR", "POOR","HAPPY", "GREAT", "EXCELLENT"];

const Smileys = (props) => {
  console.log("calling smiley", props);
  const [smiley, setSmiley] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    switch (props.stars) {
      case 5:
        setSmiley(Excellent);
        setFeedback(feedbackText[4]);
        break;

      case 4:
        setSmiley(Great);
        setFeedback(feedbackText[3]);
        break;

      case 3:
        setSmiley(Happy);
        setFeedback(feedbackText[2]);
        break;

      case 2:
        setSmiley(Poor);
        setFeedback(feedbackText[1]);
        break;

      case 1:
        setSmiley(VeryPoor);
        setFeedback(feedbackText[0]);
        break;

      default:
        setSmiley(Cool);
        break;
    }
  }, [props.stars]);

  return (
    <>
    <div className="flex flex-col">
    <div className="mx-auto text-center">
      <img src={smiley} />
    </div>
    <div className="mt-5">
      <p className="text-2xl text-center">{feedback}</p>
    </div>
    </div>
    
    </>
  );
};

export default Smileys;
