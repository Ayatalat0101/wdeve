import React from "react";

import { Text, Img, Line } from "components";

const OutsourcingPageColumnEight = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Text
              className="font-poppins font-semibold text-left text-white_A700 w-auto"
              variant="body4"
            >
              {props?.talktous}
            </Text>
            <Img
              src={props?.arrowtwentyone}
              className="h-0.5 w-auto"
              alt="arrowTwentyOne"
            />
          </div>
          <Line className="bg-white_A700 h-0.5 mt-0.5 w-full" />
        </div>
      </div>
    </>
  );
};

OutsourcingPageColumnEight.defaultProps = {
  talktous: "Talk To Us",
  arrowtwentyone: "images/img_arrow21_white_a700.svg",
};

export default OutsourcingPageColumnEight;
