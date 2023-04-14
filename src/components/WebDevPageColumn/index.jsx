import React from "react";

import { Line, Text, Img } from "components";

const WebDevPageColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[11px] items-center justify-start w-[97%] md:w-full">
          {!!props?.lineeight ? (
            <Line className="bg-white_A700_b2 h-0.5 w-[97%]" />
          ) : null}
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[508px] sm:w-full">
            <div className="flex items-center justify-start w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-start self-stretch w-auto sm:w-full">
                <Text
                  className="font-poppins font-semibold text-left text-pink_A400 w-auto"
                  as="h5"
                  variant="h5"
                >
                  {props?.one}
                </Text>
                <Text
                  className="capitalize font-opensans font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                  variant="body4"
                >
                  {props?.clientbrief}
                </Text>
              </div>
            </div>
            <Img src="images/img_plus.svg" className="h-12 w-12" alt="plus" />
          </div>
        </div>
      </div>
    </>
  );
};

WebDevPageColumn.defaultProps = {
  one: "02",
  clientbrief: "Analytics and Prototyping",
};

export default WebDevPageColumn;
