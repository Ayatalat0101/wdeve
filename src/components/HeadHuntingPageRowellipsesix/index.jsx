import React from "react";

import { Img, Text } from "components";

const HeadHuntingPageRowellipsesix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[685px] h-[716px] relative w-full">
          <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[332px] justify-start left-[0] w-[19%]">
            <Img
              src="images/img_ellipse6_2.png"
              className="h-[119px] md:h-auto object-cover w-[9%]"
              alt="ellipseSix"
            />
            <div className="md:h-[119px] h-[186px] md:ml-[0] ml-[152px] relative w-[44%]">
              <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] bottom-[0] h-[99px] inset-x-[0] mx-auto rounded-[59px] w-full"></div>
              <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] inset-x-[0] mx-auto rounded-[59px] top-[0] w-[119px]"></div>
            </div>
          </div>
          <div className="absolute h-[685px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
            <div className="absolute flex h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[65%]">
              <div className="overflow-x-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[508px] justify-start w-full">
                  <Img
                    src="images/img_ellipse167.png"
                    className="h-[97px] md:h-auto object-cover w-[23%]"
                    alt="ellipse167"
                  />
                  <Img
                    src="images/img_rectangle5381.png"
                    className="h-[198px] md:h-auto mr-[289px] object-cover rounded-[99px] w-1/2"
                    alt="rectangle5381"
                  />
                </div>
              </div>
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] right-[0] rounded-[50%] top-[30%] w-[162px]"></div>
            <div className="absolute flex items-center justify-start left-[0] top-[21%] w-[58%]">
              <div className="flex items-center justify-start pb-3.5 pl-3.5 w-full">
                <div className="flex flex-col gap-2 justify-start mb-[86px] w-full">
                  <div className="flex items-start justify-end pr-5 py-5 w-full">
                    <Text
                      className="font-opensans mt-[21px] text-left text-white_A700 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      {props?.headhunting}
                    </Text>
                  </div>
                  <Text
                    className="font-normal font-opensans leading-[24.00px] md:ml-[0] ml-[9px] text-left text-white_A700_a2 w-3/5 sm:w-full"
                    variant="body4"
                  >
                    {props?.weareyourpartneOne}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[74px] md:mt-0 mt-[537px] w-[1%]"></div>
      </div>
    </>
  );
};

HeadHuntingPageRowellipsesix.defaultProps = {};

export default HeadHuntingPageRowellipsesix;
