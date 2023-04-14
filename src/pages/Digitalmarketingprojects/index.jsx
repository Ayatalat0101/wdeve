import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Input, TextArea, Button } from "components";
import HomeScreenColumn from "components/HomeScreenColumn";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import WebDevPageColumnartboardtwentyoneOne from "components/WebDevPageColumnartboardtwentyoneOne";

const DigitalmarketingprojectsPage = () => {
  function handleNavigate3() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate4() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-black_900 flex flex-col font-gopher items-center justify-start mx-auto pb-2 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col mt-[22px] md:px-5 relative w-full">
          <div className="h-[1365px] md:h-[872px] mx-auto w-full">
            <div className="absolute h-[1216px] md:h-[872px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                src="images/img_rectangle5370_1.png"
                className="absolute h-[822px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                alt="rectangle5370"
              />
              <div className="absolute bg-pink_A400_a3 bottom-[0] flex flex-col gap-[50px] h-[874px] md:h-auto items-center justify-start left-[17%] p-[86px] md:px-10 sm:px-5 rounded-[50%] w-[874px]">
                <Text
                  className="text-center text-white_A700 w-auto"
                  as="h1"
                  variant="h1"
                >
                  Our Projects
                </Text>
                <div className="flex flex-col font-opensans gap-1.5 items-end justify-start mb-[374px] w-[2%] md:w-full">
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
                src="images/img_ellipse6_17.png"
                className="absolute h-[196px] left-[0] object-cover top-[1%] w-[6%]"
                alt="ellipseSix"
              />
              <Img
                src="images/img_ellipse7_6.png"
                className="absolute bottom-1/4 h-[339px] object-cover right-[0] w-[12%]"
                alt="ellipseSeven"
              />
            </div>
            <Img
              src="images/img_rectangle5384_1.png"
              className="absolute bottom-[0] h-[609px] inset-x-[0] mx-auto object-cover w-full"
              alt="rectangle5384"
            />
          </div>
          <Img
            src="images/img_component39_pink_a400.png"
            className="h-[565px] ml-auto mt-[-NaNpx] object-cover w-auto z-[1]"
            alt="componentThirtyNine"
          />
          <div className="flex flex-col font-inter md:gap-10 gap-16 items-center justify-center max-w-[1440px] mt-[-108.2px] mx-auto md:px-10 sm:px-5 px-[120px] py-20 w-full z-[1]">
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex font-opensans items-center justify-center self-stretch w-auto sm:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Recent Projects
                </Text>
              </div>
              <Text
                className="capitalize font-inter font-normal max-w-[527px] md:max-w-full not-italic text-center text-gray_600 tracking-[0.20px]"
                variant="body5"
              >
                We bring your ideas to life by designing impactful digital
                products that people love to use.
              </Text>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto md:w-full">
              <div className="md:gap-5 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {new Array(6).fill({}).map((props, index) => (
                  <React.Fragment key={`HomeScreenColumn${index}`}>
                    <HomeScreenColumn
                      className="flex flex-1 flex-col items-center justify-start w-full"
                      etiamnullalectuOne={
                        <>
                          Etiam nulla lectus amet nunc <br />
                          molestie at vulputate.
                        </>
                      }
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="font-opensans h-[2279px] mt-[138px] md:px-5 relative w-full">
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mb-[-4px] mx-auto self-stretch w-auto z-[1]">
            <Text
              className="capitalize text-center text-white_A700 w-auto"
              as="h3"
              variant="h3"
            ></Text>
            <div className="flex flex-col font-inter gap-8 items-center justify-start w-full">
              <Input
                wrapClassName="w-full"
                className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                type="text"
                name="email"
                placeholder="Full Name"
                shape="RoundedBorder10"
                size="md"
                variant="OutlineGray4007f"
              ></Input>
              <Input
                wrapClassName="flex w-full"
                className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                type="email"
                name="language_Two"
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
              <TextArea
                className="font-medium gap-2.5 h-[360px] leading-[normal] max-w-[971px] placeholder:text-gray_602 text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                name="email_One"
                placeholder="Your Message"
                shape="RoundedBorder10"
                size="sm"
                variant="OutlineGray4007f"
              ></TextArea>
            </div>
            <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-center justify-between w-[98%] md:w-full">
              <div className="flex flex-row gap-[9px] items-start justify-start w-auto sm:w-full">
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
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[256px] w-auto"
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
                  Submit Form
                </div>
              </Button>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-auto mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-center w-full">
              <OutsourcingPageColumnellipse165
                className="flex flex-col items-center justify-start w-auto md:w-full"
                patterneleven="images/img_pattern11_616x466.png"
              />
              <div className="bg-black_901 flex items-center justify-center md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-auto md:w-full">
                <div className="flex flex-col gap-[47px] items-center justify-center max-w-[1200px] w-full">
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <WebDevPageColumnartboardtwentyoneOne className="flex flex-col items-center justify-start w-auto md:w-full" />
                      <Text
                        className="font-medium max-w-[426px] md:max-w-full text-left text-white_A700"
                        variant="body1"
                      ></Text>
                    </div>
                    <div className="flex md:flex-1 flex-col font-opensans gap-[13px] items-start justify-start w-[24%] md:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        variant="body7"
                      >
                        Contact information
                      </Text>
                      <div className="flex flex-col font-inter gap-2 items-start justify-start self-stretch w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_mail_gray_50.svg"
                            className="h-6 w-6"
                            alt="mail"
                          />
                          <div className="flex items-center justify-start w-[89%]">
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
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
                                className="font-medium text-left text-white_A700 w-auto"
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
                        onClick={handleNavigate3}
                        alt="twitter"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        className="common-pointer h-12 w-12"
                        onClick={handleNavigate4}
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
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1142px] w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start self-stretch w-auto md:w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Our Services
                        </Text>
                        <div className="flex flex-col gap-[13px] items-start justify-start self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Software and Web Development
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Digital Marketing
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Outsourcing
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Head Hunting
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[159px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Company
                        </Text>
                        <div className="flex flex-col gap-3 h-[115px] md:h-auto items-start justify-start w-[159px]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            About US
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Our Mission
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Our Vision
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto">
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            Join Us
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            Contact Information
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            About US
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
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
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Subscribe
                        </Text>
                        <div className="bg-white_A700 border border-bluegray_101 border-solid flex flex-row gap-14 items-center justify-start pl-[15px] rounded-[20px] w-[345px]">
                          <Text
                            className="flex-1 font-normal not-italic text-gray_800_90 text-left w-auto"
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
                          className="leading-[20.00px] max-w-[345px] md:max-w-full not-italic text-left text-white_A700_99"
                          variant="body10"
                        >
                          Lorem ipsum dolor sit amet et delectus accommodare his
                          consul copiosae legendos at vix ad putent delectus
                          delicata usu. Vidit dissentiet eos cu eum an
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-white_A700_5f h-px outline outline-[0.5px] outline-white_A700_5f w-full" />
                  <Text
                    className="font-normal font-opensans text-center text-white_A700 w-auto"
                    variant="body8"
                  >
                    Copyright © 2023 - Todos os direitos reservados - É proibida
                    a reprodução total ou parcial
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DigitalmarketingprojectsPage;
