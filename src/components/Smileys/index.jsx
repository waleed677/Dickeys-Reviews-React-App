import React, { useEffect, useState } from "react";

// Import Smileys

import excellent from "../../../public/assets/images/smileys/5.png";
import great from "../../../public/assets/images/smileys/4.png";
import happy from "../../../public/assets/images/smileys/3.png";
import poor from "../../../public/assets/images/smileys/2.png";
import vpoor from "../../../public/assets/images/smileys/1.png";
import start from "../../../public/assets/images/smileys/6.png";

const Smileys = (props) => {
    console.log(props)
  const [smiley, setSmiley] = useState();


  useEffect(() => {
    switch (props.stars) {
        case 5:
          setSmiley(excellent);
          break;
    
        case 4:
          setSmiley(great);
          break;
    
        case 3:
          setSmiley(happy);
          break;
    
        case 2:
          setSmiley(poor);
          break;
    
        case 1:
          setSmiley(vpoor);
          break;
    
        default:
            setSmiley(start);
          break;
      }
  }, [props.stars])
  
  return (
    <div className="mx-auto text-center">
      <img src={smiley} />
    </div>
  );
};

export default Smileys;
