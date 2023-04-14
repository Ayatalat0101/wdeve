import React from "react";

import { Img, Text } from "components";

const HomeScreenColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start w-full">
          <Img
            src="images/img_rectangle5372.png"
            className="h-[237px] sm:h-auto object-cover w-full"
            alt="rectangle5372"
          />
        </div>
        <div className="flex items-center justify-center w-[356px]">
          <Text
            className="capitalize font-inter font-semibold text-center text-white_A700 tracking-[0.20px]"
            variant="body4"
          >
            {props?.etiamnullalectuOne}
          </Text>
        </div>
      </div>
    </>
  );
};

HomeScreenColumn.defaultProps = {
  etiamnullalectuOne: (
    <>
      Etiam nulla lectus amet nunc <br />
      molestie at vulputate.
    </>
  ),
};

export default HomeScreenColumn;
