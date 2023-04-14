import React from "react";

import { Img } from "components";

const WebServicesPageColumnartboardtwentyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-11 relative w-full">
          <Img
            src="images/img_artboard21.png"
            className="absolute h-11 inset-[0] justify-center m-auto object-cover w-[45px]"
            alt="artboardTwentyOne"
          />
          <Img
            src="images/img_artboard22.png"
            className="absolute h-11 inset-y-[0] my-auto object-cover right-[0] w-[45px]"
            alt="artboardTwentyTwo"
          />
          <Img
            src="images/img_artboard22_44x45.png"
            className="absolute h-11 inset-y-[0] left-[0] my-auto object-cover w-[45px]"
            alt="artboardTwentyTwo_One"
          />
        </div>
      </div>
    </>
  );
};

WebServicesPageColumnartboardtwentyone.defaultProps = {};

export default WebServicesPageColumnartboardtwentyone;
