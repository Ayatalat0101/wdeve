import React from "react";

import { Img, Text, Button, Line } from "components";

const Footer1 = (props) => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate10() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[47px] items-center justify-center max-w-[1200px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
              <div className="flex items-center justify-start w-[29%] md:w-full">
                <div className="overflow-x-auto w-full">
                  <div className="h-[45px] md:h-[62px] relative w-full">
                    <Img
                      src="images/img_artboard21.png"
                      className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[53%]"
                      alt="artboardTwentyOne_One"
                    />
                    <Img
                      src="images/img_artboard22.png"
                      className="absolute h-[62px] inset-y-[0] my-auto object-cover right-[0] w-[53%]"
                      alt="artboardTwentyTwo_Two"
                    />
                    <Img
                      src="images/img_artboard22_44x45.png"
                      className="absolute h-[62px] inset-y-[0] left-[0] my-auto object-cover w-[53%]"
                      alt="artboardTwentyTwo_Three"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-inter font-medium max-w-[426px] md:max-w-full text-left text-white_A700"
                variant="body1"
              ></Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[24%] md:w-full">
              <Text
                className="font-bold font-opensans text-left text-white_A700 w-auto"
                variant="body7"
              >
                Contact information
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start self-stretch w-auto">
                <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                  <Img
                    src="images/img_mail_gray_50.svg"
                    className="h-6 w-6"
                    alt="mail"
                  />
                  <div className="flex items-center justify-start w-[89%]">
                    <div className="flex items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-inter font-medium text-left text-white_A700 w-auto"
                        variant="body8"
                      ></Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                  <Img
                    src="images/img_call_gray_50.svg"
                    className="h-6 w-6"
                    alt="call"
                  />
                  <div className="flex items-start justify-start w-[89%]">
                    <div className="flex items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-inter font-medium text-left text-white_A700 w-auto"
                        variant="body8"
                      >
                        (11) 9 1556-7873
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 h-16 md:h-auto items-center justify-center w-[352px]">
              <Img
                src="images/img_twitter_blue_500.svg"
                className="common-pointer h-12 rounded-[50%] w-12"
                onClick={handleNavigate10}
                alt="twitter"
              />
              <Img
                src="images/img_facebook.svg"
                className="common-pointer h-12 w-12"
                onClick={handleNavigate}
                alt="facebook"
              />
              <Img
                src="images/img_group.png"
                className="h-12 md:h-auto rounded-[50%] w-12"
                alt="group"
              />
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                size="smIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_mail_pink_a400.svg"
                  className="h-[31px]"
                  alt="mail_One"
                />
              </Button>
            </div>
          </div>
          <Line className="bg-white_A700_5f h-px outline outline-[0.5px] outline-white_A700_5f w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1142px] w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start self-stretch w-auto">
                <Text
                  className="font-bold font-inter text-left text-white_A700 w-auto"
                  variant="body7"
                >
                  Our Services
                </Text>
                <div className="flex flex-col gap-[13px] items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Software and Web Development
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Digital Marketing
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Outsourcing
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Head Hunting
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start w-[159px]">
                <Text
                  className="font-bold font-inter text-left text-white_A700 w-auto"
                  variant="body7"
                >
                  Company
                </Text>
                <div className="flex flex-col gap-3 h-[115px] md:h-auto items-start justify-start w-[159px]">
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    About US
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Our Mission
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-left text-white_A700_99 w-auto"
                    variant="body7"
                  >
                    Our Vision
                  </Text>
                </div>
              </div>
              <div className="flex items-start justify-start self-stretch w-auto">
                <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto">
                  <Text
                    className="font-bold font-inter text-left text-white_A700 w-auto"
                    variant="body7"
                  >
                    Join Us
                  </Text>
                  <Text
                    className="font-bold font-inter text-left text-white_A700 w-auto"
                    variant="body7"
                  >
                    Contact Information
                  </Text>
                  <Text
                    className="font-bold font-inter text-left text-white_A700 w-auto"
                    variant="body7"
                  >
                    About US
                  </Text>
                  <Text
                    className="font-bold font-inter text-left text-white_A700 w-auto"
                    variant="body7"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-pink_A400 flex sm:flex-1 items-start justify-start md:px-10 sm:px-5 px-[42px] py-[30px] w-[435px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-[369px]">
                <Text
                  className="font-bold font-inter text-left text-white_A700 w-auto"
                  variant="body7"
                >
                  Subscribe
                </Text>
                <div className="bg-white_A700 border border-bluegray_101 border-solid flex flex-row gap-14 items-center justify-start pl-[15px] rounded-[20px] w-[345px]">
                  <Text
                    className="flex-1 font-inter font-normal not-italic text-gray_800_90 text-left w-auto"
                    variant="body8"
                  >
                    Email address
                  </Text>
                  <div className="bg-black_900 flex items-center justify-center p-[13px] rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md w-[50px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-6 w-6"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <Text
                  className="font-inter leading-[20.00px] max-w-[345px] md:max-w-full not-italic text-left text-white_A700_99"
                  variant="body10"
                >
                  Lorem ipsum dolor sit amet et delectus accommodare his consul
                  copiosae legendos at vix ad putent delectus delicata usu.
                  Vidit dissentiet eos cu eum an
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-white_A700_5f h-px outline outline-[0.5px] outline-white_A700_5f w-full" />
          <Text
            className="font-normal font-opensans text-center text-white_A700 w-auto"
            variant="body8"
          >
            Copyright © 2023 - Todos os direitos reservados - É proibida a
            reprodução total ou parcial
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
