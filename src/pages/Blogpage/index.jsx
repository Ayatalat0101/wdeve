import React from "react";

import { Img, Text, Line, List, Button } from "components";
import Header from "components/Header";
import HomeScreenColumnOne from "components/HomeScreenColumnOne";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import Footer1 from "components/Footer1";

const BlogpagePage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-opensans sm:gap-10 md:gap-10 gap-[439px] items-center justify-start mx-auto pb-[604px] w-full">
        <div className="h-[2156px] md:px-5 relative w-full">
          <Img
            src="images/img_component39_pink_a400.png"
            className="h-[565px] mb-[undefinedpx] ml-auto mt-auto object-cover w-auto z-[1]"
            alt="componentThirtyNine"
          />
          <Header className="flex flex-col items-center justify-center mb-[-0.11px] mx-auto w-full z-[1]" />
          <div className="flex flex-col mt-auto mx-auto w-full">
            <div className="h-[1388px] md:h-[822px] sm:h-[872px] mx-auto w-full">
              <div className="absolute h-[1223px] md:h-[822px] sm:h-[872px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  src="images/img_rectangle5370.png"
                  className="absolute h-[822px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  alt="rectangle5370"
                />
                <div className="absolute bg-pink_A400_a3 bottom-[0] flex flex-col md:gap-10 gap-[90px] h-[874px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 rounded-[50%] w-[874px]">
                  <Text
                    className="text-center text-white_A700 w-auto"
                    as="h1"
                    variant="h1"
                  >
                    Blog Page
                  </Text>
                  <div className="flex flex-col gap-1.5 items-end justify-start mb-[390px] w-[2%] md:w-full">
                    <Text
                      className="font-normal rotate-[90deg] text-left text-white_A700 tracking-[4.00px] w-auto"
                      variant="body7"
                    >
                      SCROLL
                    </Text>
                    <Line className="bg-white_A700 h-16 mr-0.5 w-0.5" />
                  </div>
                </div>
                <Img
                  src="images/img_ellipse6_9.png"
                  className="absolute h-[196px] left-[0] object-cover top-[2%] w-[6%]"
                  alt="ellipseSix"
                />
                <Img
                  src="images/img_ellipse7_2.png"
                  className="absolute bottom-[23%] h-[339px] object-cover right-[0] w-[12%]"
                  alt="ellipseSeven"
                />
              </div>
              <Img
                src="images/img_rectangle5384.png"
                className="absolute bottom-[0] h-[609px] inset-x-[0] mx-auto object-cover w-full"
                alt="rectangle5384"
              />
            </div>
            <div className="flex flex-col gap-6 items-start justify-start mt-[-341.76px] mx-auto w-[89%] z-[1]">
              <Text
                className="text-left text-white_A700 w-[39%] sm:w-full"
                as="h3"
                variant="h3"
              ></Text>
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
                  <List
                    className="flex-col gap-[51px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex h-[394px] justify-end my-0 relative w-full">
                      <div className="flex flex-col h-full items-start justify-start mb-[19px] mt-auto w-[47%]">
                        <Text
                          className="font-normal text-bluegray_300 text-left w-auto"
                          variant="body7"
                        >
                          March 22, 2023
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] mt-[18px] text-bluegray_300 text-left w-full"
                          variant="body6"
                        >
                          Amcorper usique ac dolor nec nisi ptqe . Bulum sed
                          uiltersc mi morbi dim puru . Lorem ipsum dolor sit
                          amet, et postiulart intelligents pri mel velit scfgery
                          Lorem ipsum dolor sit amit et postulant dolor sit nisi
                          Bulum Mi.
                        </Text>
                        <HomeScreenColumnOne
                          className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                          readmore="Read More"
                        />
                      </div>
                      <div className="absolute flex flex-col gap-[30px] h-full inset-[0] items-end justify-center m-auto w-full">
                        <Text
                          className="font-normal leading-[38.00px] text-bluegray_100 text-left w-full"
                          variant="body3"
                        >
                          We offer exceptional services tailored to a wide range
                          of businesses that want to improve the effectiveness
                          of their digital marketing activities with discernible
                          returns on investment. We aim to get back to all
                          enquiries rapidly.
                        </Text>
                        <div className="flex items-center justify-start w-[44%] md:w-full">
                          <Img
                            src="images/img_rectangle5370.png"
                            className="h-[250px] md:h-auto object-cover w-full"
                            alt="rectangle5370"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mr-0.5 my-0 w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
                        <Text
                          className="font-normal text-bluegray_300 text-left w-auto"
                          variant="body7"
                        >
                          March 22, 2023
                        </Text>
                        <Text
                          className="font-semibold leading-[38.00px] mt-[18px] text-bluegray_100 text-left w-full"
                          variant="body3"
                        >
                          Your Guide to Awesome Automated Marketing Campaigns
                        </Text>
                        <HomeScreenColumnOne
                          className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                          readmore="Read More"
                        />
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 h-[250px] items-center justify-start w-[44%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_component23.png')",
                        }}
                      >
                        <Img
                          src="images/img_rectangle5370_250x550.png"
                          className="h-[250px] md:h-auto object-cover w-full"
                          alt="rectangle5370"
                        />
                      </div>
                    </div>
                  </List>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[232px] w-auto"
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
                    <div className="font-bold leading-[normal] text-center text-white_A700 text-xl tracking-[0.46px]">
                      View More
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1047px] md:h-[680px] md:px-5 relative w-full">
          <OutsourcingPageColumnellipse165
            className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto sm:w-full"
            patterneleven="images/img_pattern11_2.png"
          />
          <Footer1 className="absolute bg-black_901 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogpagePage;
