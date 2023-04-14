import React from "react";

import { Img } from "components";

const OutsourcingPageColumnellipse165 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[616px] relative w-full">
          <Img
            src="images/img_ellipse165.png"
            className="absolute h-[616px] inset-[0] justify-center m-auto object-cover w-full"
            alt="ellipse165"
          />
          <div className="absolute h-[616px] inset-[0] justify-center m-auto w-full">
            <Img
              src={props?.patterneleven}
              className="absolute h-[616px] inset-[0] justify-center m-auto object-cover w-full"
              alt="patternEleven"
            />
            {!!props?.ellipsetwelve ? (
              <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] right-[1%] rounded-[50%] top-[12%] w-[162px]"></div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

OutsourcingPageColumnellipse165.defaultProps = {
  patterneleven: "images/img_pattern11.png",
};

export default OutsourcingPageColumnellipse165;
