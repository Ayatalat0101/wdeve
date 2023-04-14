import React from "react";

import { Img } from "components";

const HeadHuntingPageColumnrectangle5379 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[567px] relative rotate-[-30deg] w-[567px] sm:w-full">
          <Img
            src="images/img_rectangle5379.svg"
            className="absolute bottom-[11%] h-[353px] right-[6%] w-[353px]"
            alt="rectangle5379"
          />
          <div className="absolute h-[567px] inset-[0] justify-center m-auto w-[567px] sm:w-full">
            <Img
              src="images/img_rectangle5378.svg"
              className="absolute h-[358px] inset-[0] justify-center m-auto w-[359px]"
              alt="rectangle5378"
            />
            <Img
              src={props?.pattern141}
              className="absolute h-[567px] inset-[0] justify-center m-auto object-cover w-[567px] sm:w-full"
              alt="pattern141"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HeadHuntingPageColumnrectangle5379.defaultProps = {
  pattern141: "images/img_pattern141.png",
};

export default HeadHuntingPageColumnrectangle5379;
