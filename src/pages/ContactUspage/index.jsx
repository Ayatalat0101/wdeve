import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Input, TextArea, Button } from "components";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import Footer1 from "components/Footer1";

const ContactUspagePage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="md:h-[1276px] sm:h-[1348px] h-[2717px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="h-[1388px] md:h-[893px] mx-auto w-full">
              <div className="absolute h-[1211px] md:h-[893px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  src="images/img_whatsappimage20230330_2.png"
                  className="absolute h-[893px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  alt="whatsappimageTwenty"
                />
                <div className="absolute bg-pink_A400_a3 bottom-[0] flex h-[811px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-[223px] md:px-10 sm:px-5 rounded-[405px] w-[811px]">
                  <div className="flex flex-col gap-1.5 items-end justify-start mb-[209px] w-[4%] md:w-full">
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
                  src="images/img_ellipse6_8.png"
                  className="absolute h-[196px] left-[0] object-cover top-[2%] w-[6%]"
                  alt="ellipseSix"
                />
                <Img
                  src="images/img_ellipse7_1.png"
                  className="absolute bottom-[22%] h-[339px] object-cover right-[0] w-[12%]"
                  alt="ellipseSeven"
                />
              </div>
              <div className="absolute bg-black_900 bottom-[0] flex inset-x-[0] items-start justify-start mx-auto p-28 md:px-10 sm:px-5 w-full">
                <div className="flex items-center justify-start mb-[273px] w-auto md:w-full">
                  <Text
                    className="capitalize font-semibold text-left text-white_A700 w-full"
                    variant="body2"
                  ></Text>
                </div>
              </div>
            </div>
            <Text
              className="mt-[-NaNpx] mx-auto text-center text-white_A700 w-[64%] sm:w-full z-[1]"
              as="h1"
              variant="h1"
            >
              PARTNER WITH THE BEST
            </Text>
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mt-[-103.14px] mx-auto self-stretch w-auto z-[1]">
              <Text
                className="capitalize text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              ></Text>
              <div className="flex flex-col font-inter gap-8 items-start justify-start self-stretch w-auto md:w-full">
                <div className="bg-white_A700 flex h-[77px] md:h-auto items-center justify-start max-w-[1137px] outline outline-[2px] outline-gray_400_7f sm:px-5 px-8 py-2.5 rounded-[10px] w-full">
                  <Text
                    className="font-medium text-gray_602 text-left tracking-[0.20px] w-auto"
                    variant="body5"
                  >
                    Full Name
                  </Text>
                </div>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  type="email"
                  name="language"
                  placeholder="Email "
                  prefix={
                    <Img
                      src="images/img_mail_gray_602.svg"
                      className="mr-2.5 my-px"
                      alt="mail"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray4007f"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  type="number"
                  name="email"
                  placeholder="Your Phone Number"
                  prefix={
                    <Img
                      src="images/img_call_gray_602.svg"
                      className="mr-2.5 my-px"
                      alt="call"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray4007f"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  name="language_One"
                  placeholder="Company "
                  prefix={
                    <Img
                      src="images/img_grid.svg"
                      className="mt-auto mb-0.5 mr-2.5"
                      alt="grid"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray4007f"
                ></Input>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  name="email_One"
                  placeholder="Country"
                  prefix={
                    <Img
                      src="images/img_globe_gray_602.svg"
                      className="mt-auto mb-0.5 mr-2.5"
                      alt="globe"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray4007f"
                ></Input>
                <TextArea
                  className="font-medium gap-2.5 h-[360px] leading-[normal] max-w-[1137px] placeholder:text-gray_602 text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  name="email_Two"
                  placeholder="Project Description"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineGray4007f"
                ></TextArea>
                <Input
                  wrapClassName="flex w-full"
                  className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                  name="email_Three"
                  placeholder="Attach Files"
                  prefix={
                    <Img
                      src="images/img_fluentattach12filled.svg"
                      className="mr-2.5 my-px"
                      alt="fluent:attach-12-filled"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="OutlineGray4007f"
                ></Input>
              </div>
              <div className="flex flex-col font-opensans gap-8 items-start justify-center max-w-[972px] w-full">
                <div className="flex flex-row gap-[9px] items-start justify-start w-[32%] md:w-full">
                  <Img
                    src="images/img_computer_white_a700.svg"
                    className="h-[33px] w-8"
                    alt="computer"
                  />
                  <Text
                    className="font-semibold mt-1 text-left text-white_A700 tracking-[0.20px] w-auto"
                    variant="body5"
                  >
                    I aacept your privacy policy
                  </Text>
                </div>
                <div className="flex items-center justify-start w-full">
                  <Button
                    className="cursor-pointer flex h-16 items-center justify-center max-w-[972px] w-full"
                    rightIcon={
                      <Img
                        src="images/img_forward.svg"
                        className="mb-px ml-2.5"
                        alt="forward"
                      />
                    }
                    size="lg"
                    variant="FillPinkA400"
                  >
                    <div className="font-semibold leading-[normal] md:text-[22px] sm:text-xl text-2xl text-center text-white_A700 tracking-[0.46px]">
                      Submit Form
                    </div>
                  </Button>
                </div>
              </div>
              <Text
                className="font-semibold text-center text-pink_50_cc w-auto"
                variant="body5"
              >
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </Text>
            </div>
          </div>
          <Img
            src="images/img_component39_pink_a400.png"
            className="absolute h-[565px] object-cover right-[0] top-[32%] w-auto"
            alt="componentThirtyNine"
          />
        </div>
        <div className="h-[1143px] md:h-[978px] mt-[298px] md:px-5 relative w-full">
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

export default ContactUspagePage;
