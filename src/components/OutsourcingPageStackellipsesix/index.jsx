import React from "react";

import { Img, Text } from "components";

const OutsourcingPageStackellipsesix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[333px] justify-start left-[0] w-[19%]">
          <Img
            src="images/img_ellipse6_119x22.png"
            className="h-[119px] md:h-auto object-cover w-[9%]"
            alt="ellipseSix"
          />
          <div className="md:h-[119px] h-[186px] md:ml-[0] ml-[151px] relative w-[45%]">
            <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] bottom-[0] h-[99px] inset-x-[0] mx-auto rounded-[59px] w-full"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] inset-x-[0] mx-auto rounded-[59px] top-[0] w-[119px]"></div>
          </div>
        </div>
        <div className="absolute h-[720px] inset-[0] justify-center m-auto w-[97%] md:w-full">
          <div className="absolute flex h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[77%]">
            <div className="h-[720px] relative w-full">
              <Img
                src="images/img_clippathgroup_720x1055.png"
                className="absolute h-[720px] inset-[0] justify-center m-auto object-cover w-full"
                alt="clippathgroup"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] right-[0] rounded-[50%] top-[31%] w-[162px]"></div>
            </div>
          </div>
          <div className="absolute flex items-center justify-start left-[0] top-[22%] w-[58%]">
            <div className="flex items-center justify-start pb-3.5 pl-3.5 w-full">
              <div className="flex flex-col gap-2 justify-start mb-[86px] w-full">
                <div className="flex items-start justify-end pr-2 py-2 w-full">
                  <Text
                    className="font-opensans mt-[45px] text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    {props?.outsourcing}
                  </Text>
                </div>
                <Text
                  className="font-normal font-opensans leading-[24.00px] md:ml-[0] ml-[9px] text-justify text-white_A700_a2 w-3/5 sm:w-full"
                  variant="body7"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OutsourcingPageStackellipsesix.defaultProps = {};

export default OutsourcingPageStackellipsesix;
