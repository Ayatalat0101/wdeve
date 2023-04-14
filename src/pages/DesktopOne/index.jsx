import React from "react";

import Header1 from "components/Header1";
import { Img, Text, Button } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-gray_907 flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-4 items-start justify-between overflow-auto w-full">
          <div className="flex h-[748px] md:h-[792px] justify-end md:px-5 relative w-full">
            <div className="h-[792px] mt-auto mx-auto w-full">
              <div className="h-[792px] m-auto w-full">
                <Img
                  src="images/img_clippathgroup_792x1440.png"
                  className="h-[792px] m-auto object-cover w-full"
                  alt="clippathgroup"
                />
                <Img
                  src="images/img_ellipse6_12.png"
                  className="absolute h-[119px] left-[0] object-cover top-[14%] w-[2%]"
                  alt="ellipseSix"
                />
                <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] bottom-[6%] h-[99px] left-[11%] rounded-[59px] w-[9%]"></div>
                <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[162px]"></div>
              </div>
              <div className="absolute bottom-[13%] flex items-center justify-start right-[13%] w-[37%]">
                <div className="flex items-center justify-start w-full">
                  <Img
                    src="images/img_layer1_550x526.png"
                    className="h-[550px] md:h-auto object-cover w-full"
                    alt="layerOne"
                  />
                </div>
              </div>
              <div className="absolute flex items-center justify-start left-[0] pb-[111px] top-[26%] w-[13%]">
                <div className="flex items-center justify-start pt-[78px] w-full">
                  <Text
                    className="text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Geradorede.Devs
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[16%] flex flex-col gap-[33px] justify-start left-[6%] w-[45%]">
              <Text
                className="font-gopher text-left text-white_A700 w-full"
                as="h3"
                variant="h3"
              >
                Web and Sofrware Development
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[241px] md:ml-[0] ml-[23px] mr-[375px] w-auto"
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
              className="absolute h-[125px] right-[4%] top-[38%] w-auto"
              alt="group19053"
            />
          </div>
          <div className="h-[74px] md:mt-0 mt-[568px] md:px-5 w-[1%]"></div>
        </div>
        <div className="bg-gray_907 flex items-center justify-end mt-[46px] pr-0.5 pt-0.5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[420px] justify-start md:px-5 w-[47%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[91px] items-start justify-start w-full">
                <Img
                  src="images/img_ellipse6_13.png"
                  className="sm:flex-1 h-[119px] md:h-auto sm:mt-0 mt-[82px] object-cover w-[4%] sm:w-full"
                  alt="ellipseSix_One"
                />
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Digital Marketing
                </Text>
              </div>
              <div className="backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[99px] md:ml-[0] ml-[153px] mr-[398px] rounded-[59px] w-[18%]"></div>
            </div>
            <div className="font-inter h-[729px] md:h-[939px] md:px-5 relative w-[46%] md:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] bottom-[36%] h-[162px] right-[0] rounded-[50%] w-[162px]"></div>
              <div className="absolute h-[729px] md:h-[939px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                <div className="absolute bottom-[2%] md:h-[545px] h-[562px] inset-x-[0] mx-auto w-full">
                  <div className="absolute md:h-[545px] h-[562px] inset-y-[0] my-auto right-[0] w-[91%] sm:w-full">
                    <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_6a blur-[77.00px] flex sm:h-auto h-max inset-y-[0] items-start justify-start my-auto p-[15px] right-[0] rounded-[272px] w-[545px]">
                      <div className="bg-pink_A401 h-[97px] mb-[361px] mt-[57px] rounded-[48px] w-[97px]"></div>
                    </div>
                    <div className="absolute bg-gray_900 bottom-[0] h-[491px] left-[0] rounded-[245px] w-[491px]"></div>
                  </div>
                  <div className="absolute bg-gray_900 bottom-[35%] flex h-[121px] items-center justify-end left-[0] p-[30px] sm:px-5 rounded-[20px] shadow-bs w-[121px]">
                    <Img
                      src="images/img_diagram1.svg"
                      className="h-[60px] w-[60px]"
                      alt="diagramOne"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[939px] inset-x-[0] mx-auto w-[84%] sm:w-full">
                  <Img
                    src="images/img_httpsapplot_939x528.png"
                    className="h-[939px] m-auto object-cover w-full"
                    alt="httpsapplot"
                  />
                  <div className="absolute flex flex-col md:gap-10 gap-[255px] h-max inset-y-[0] justify-start my-auto right-[0] w-[42%]">
                    <div className="bg-pink_A401 flex h-[121px] items-center justify-end ml-20 md:ml-[0] mr-[17px] p-[30px] sm:px-5 rounded-[20px] shadow-bs w-[121px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[60px] w-[60px]"
                        alt="checkmark"
                      />
                    </div>
                    <Button
                      className="cursor-pointer font-semibold min-w-[218px] text-center text-lg text-pink_A401 w-auto"
                      shape="RoundedBorder20"
                      size="2xl"
                      variant="OutlineBlack9003f_1"
                    >
                      50k Monthly Clinets
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
