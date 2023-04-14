import React from "react";

import { Img } from "components";

const WebDevPageColumnartboardtwentyoneOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="overflow-x-auto w-full">
          <div className="h-[45px] md:h-[62px] relative w-full">
            <Img
              src="images/img_artboard21.png"
              className="absolute h-[62px] inset-y-[0] left-[22%] my-auto object-cover w-[48%]"
              alt="artboardTwentyOne_One"
            />
            <Img
              src="images/img_artboard22.png"
              className="absolute h-[62px] inset-y-[0] my-auto object-cover right-[0] w-[48%]"
              alt="artboardTwentyTwo_Two"
            />
            <Img
              src="images/img_artboard22_44x45.png"
              className="absolute h-[62px] inset-y-[0] left-[0] my-auto object-cover w-[48%]"
              alt="artboardTwentyTwo_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

WebDevPageColumnartboardtwentyoneOne.defaultProps = {};

export default WebDevPageColumnartboardtwentyoneOne;
