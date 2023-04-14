import React from "react";

import Header1 from "components/Header1";
import { Img, Text, Button } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-end mx-auto w-full">
        <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-gray_907 flex items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              src="images/img_ellipse6_14.png"
              className="md:flex-1 h-[119px] sm:h-auto md:mt-0 mt-[110px] object-cover w-[2%] md:w-full"
              alt="ellipseSix"
            />
            <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[59px] md:mt-0 mt-[422px] md:px-5 w-[37%] md:w-full">
              <Text
                className="font-gopher text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Digital Marketing
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[241px] md:ml-[0] ml-[23px] mr-[258px] mt-[65px] w-auto"
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
              <div className="backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] md:ml-[0] ml-[72px] mr-[331px] mt-[17px] rounded-[59px] w-[119px]"></div>
            </div>
            <div className="h-[784px] md:h-[939px] md:ml-[0] ml-[99px] md:px-5 relative w-[52%] md:w-full">
              <div className="h-[784px] md:h-[939px] m-auto w-full">
                <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] bottom-[38%] h-[162px] right-[0] rounded-[50%] w-[162px]"></div>
                <div className="absolute h-[784px] md:h-[939px] inset-y-[0] left-[0] my-auto w-[87%] md:w-full">
                  <div className="absolute md:h-[545px] h-[562px] inset-x-[0] mx-auto top-[12%] w-full">
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
                        50k Monthly Clients
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group19053_white_a700_125x55.svg"
                className="absolute h-[125px] right-[8%] top-[36%] w-auto"
                alt="group19053"
              />
            </div>
          </div>
        </div>
        <div className="font-opensans h-[780px] md:h-[827px] mt-[18px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-[18px] h-max inset-[0] items-center justify-center m-auto w-full">
            <Img
              src="images/img_ezgif18cd51619ec.png"
              className="h-3.5 md:h-auto object-cover w-full"
              alt="ezgif18cd51619e"
            />
            <div className="bg-pink_A400_14 flex flex-col justify-end pl-2.5 py-2.5 w-full">
              <Text
                className="md:ml-[0] ml-[100px] mr-[932px] mt-[119px] text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Outsourcing
              </Text>
              <div className="backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] md:ml-[0] ml-[1265px] mt-[110px] rounded-[50%] w-[162px]"></div>
              <div className="backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] md:ml-[0] ml-[142px] mr-[1166px] mt-40 rounded-[59px] w-[119px]"></div>
            </div>
          </div>
          <Img
            src="images/img_ellipse6_15.png"
            className="absolute h-[119px] left-[0] object-cover top-[14%] w-[2%]"
            alt="ellipseSix_One"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
