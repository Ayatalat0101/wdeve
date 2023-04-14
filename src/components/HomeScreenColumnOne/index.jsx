import React from "react";

import { Text, Img, Line } from "components";

const HomeScreenColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-[95%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row gap-[18px] items-center justify-between w-full">
              <Text
                className="font-poppins font-semibold text-bluegray_100 text-left w-auto"
                variant="body6"
              >
                {props?.readmore}
              </Text>
              <Img
                src="images/img_arrow21.svg"
                className="h-0.5 w-auto"
                alt="arrowTwentyOne"
              />
            </div>
            <Line className="bg-pink_A400 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

HomeScreenColumnOne.defaultProps = { readmore: "Read More" };

export default HomeScreenColumnOne;
