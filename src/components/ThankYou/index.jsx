import React from "react";
import { Cool } from "../../assets/imageIndex";

const ThankYou = () => {
  const handleGoogleReview = () => {
    window.open("https://www.google.com/maps/place/Dickey's+Barbecue+Pit/@43.6924776,-116.4856379,17z/data=!4m8!3m7!1s0x54afad186b65df0d:0xc9d92511304aacff!8m2!3d43.6924776!4d-116.4856379!9m1!1b1!16s%2Fg%2F11sd_y6w6c?entry=ttu", '_self')
}

  return (
    <div className="container mx-auto mt-28">
      <div className="flex justify-center">
        <img src={Cool} className="w-auto" />
      </div>
      <div className="flex justify-center flex-col">
        <p className="text-center font-sans text-black font-bold text-xl mt-7">
          Thank you and we appreciate your feedback !!!
        </p>
        <p className="text-center font-sans text-red-400 mt-3 leading-5">
        Our goal is to serve you an better services. Your feedback is very important for us
        
        </p>
        <p className="text-center font-sans text-gray-400 mt-3">
          Did we make it better?{" "}
          <span
            onClick={handleGoogleReview}
            className="text-blue-700 font-medium"
          >
            Leave a review
          </span>{" "}
        </p>
      </div>
     
    </div>
  );
};

export default ThankYou;
