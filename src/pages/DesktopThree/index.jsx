import React from "react";

import { Img, Text, Button } from "components";
import Header1 from "components/Header1";
import DesktopThreeStackheadhunting from "components/DesktopThreeStackheadhunting";

const DesktopThreePage = () => {
  return (
    <>
      <div className="flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-gray_907 flex items-end justify-start mx-auto md:px-10 sm:px-5 px-[165px] w-full">
            <div className="flex items-center justify-end w-[48%] md:w-full">
              <Img
                src="images/img_httpsapplot_102x528.png"
                className="h-[102px] md:h-auto object-cover w-full"
                alt="httpsapplot"
              />
            </div>
          </div>
          <Header1 className="flex flex-col items-center justify-center mb-auto mt-[-9px] mx-auto w-full z-[1]" />
        </div>
        <div className="flex items-center justify-start mt-[3px] w-full">
          <div className="bg-pink_A400_14 h-[778px] md:px-5 relative w-full">
            <div className="absolute bottom-[1%] flex flex-col inset-x-[0] justify-start mx-auto w-full">
              <Img
                src="images/img_ellipse6_119x116.png"
                className="h-[119px] md:h-auto object-cover w-[9%] sm:w-full"
                alt="ellipseSix"
              />
              <div className="backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] md:ml-[0] ml-[1273px] mt-[98px] rounded-[50%] w-[162px]"></div>
              <div className="backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] md:ml-[0] ml-[150px] mr-[1166px] mt-40 rounded-[59px] w-[119px]"></div>
            </div>
            <div className="absolute bottom-[19%] flex flex-col md:gap-10 gap-[65px] justify-start left-[6%] w-[27%]">
              <Text
                className="font-gopher text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Outsourcing
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[241px] md:ml-[0] ml-[23px] mr-[116px] w-auto"
                rightIcon={
                  <Img
                    src="images/img_forward.svg"
                    className="ml-2.5"
                    alt="forward"
                  />
                }
                size="lg"
                variant="FillPinkA400"
              >
                <div className="font-bold font-opensans leading-[normal] text-center text-white_A700 text-xl tracking-[0.46px]">
                  Learn More
                </div>
              </Button>
            </div>
            <Img
              src="images/img_group19053_white_a700_125x55.svg"
              className="absolute h-[125px] right-[4%] top-[36%] w-auto"
              alt="group19053"
            />
            <Img
              src="images/img_ezgif18cd51619ec_778x1440.png"
              className="absolute h-[778px] inset-[0] justify-center m-auto object-cover w-full"
              alt="ezgif18cd51619e"
            />
          </div>
        </div>
        <div className="h-[785px] md:h-[787px] mt-0.5 md:px-5 relative w-full">
          <Text
            className="ml-[111px] mt-[100px] text-left text-white_A700 w-auto"
            as="h3"
            variant="h3"
          >
            Head Hunting
          </Text>
          <DesktopThreeStackheadhunting className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[5px] w-full" />
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
