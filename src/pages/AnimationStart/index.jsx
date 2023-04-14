import React from "react";

import { Img } from "components";
import { useNavigate } from "react-router-dom";

const AnimationStartPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_900 flex items-center justify-start mx-auto py-[231px] w-full">
        <Img
          src="images/img_whatsappvideo20230405.png"
          className="common-pointer h-[409px] sm:h-auto object-cover w-full"
          onClick={() => navigate("/donesubmit")}
          alt="whatsappvideoTwenty"
        />
      </div>
    </>
  );
};

export default AnimationStartPage;
