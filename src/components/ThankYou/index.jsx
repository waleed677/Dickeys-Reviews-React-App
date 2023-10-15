import React from "react";
import { Cool } from "../../assets/imageIndex";

const ThankYou = () => {
  const handleGoogleReview = () => {
    window.open("https://www.google.com/search?q=Dickey%27s+Barbecue+Pit%2C+10580+W+State+St%2C+Star%2C+ID+83669%2C+United+States&oq=Dickey%27s+Barbecue+Pit%2C+10580+W+State+St%2C+Star%2C+ID+83669%2C+United+States&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEwMjJqMGo3qAIAsAIA&client=ms-android-xiaomi-rvo2&sourceid=chrome-mobile&ie=UTF-8#lrd=0x54afad186b65df0d:0xc9d92511304aacff,3,,,,&pi=dickey's%20barbecue%20pit%20star%20reviews&sbfbu=0&wptab=si:ALGXSlb9ylv6FQuI8zCROKWgJkMHV_7qC6_qVQjaGVH5mNU2SfoBIch9Av48LmNl-WdUFIQ9DSHT9Tshg4NqcfSZZsf5Pm6vTEHRmeOsfx8e8GwOBvrn7664m7sEpMT0vz1BX7O21ZYvywJjqhQxvZYQKQ08LM4tnqQeHOHsYFJhnE1cffLKt1M%3D", '_self')
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
