import React from "react";

import { Img, Text, Button, Input } from "components";

const Get50Page = () => {
  return (
    <>
      <div className="bg-pink_A400 font-opensans h-[514px] mx-auto md:pl-10 sm:pl-5 pl-[55px] relative w-full">
        <div className="absolute bottom-[0] md:h-[514px] h-[542px] right-[0] w-[57%] md:w-full">
          <div className="absolute bg-white_A700 flex items-end justify-start p-[15px] right-[0] top-[0] w-[515px]">
            <Img
              src="images/img_close_pink_a400.svg"
              className="h-12 mb-[436px] mr-[11px] w-12"
              alt="close"
            />
          </div>
          <div className="absolute md:h-[514px] h-[542px] inset-y-[0] left-[0] my-auto pb-7 w-[90%] md:w-full">
            <div className="absolute h-[514px] right-[0] top-[0] w-[94%] sm:w-full">
              <div className="absolute h-[476px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute h-[459px] inset-y-[0] my-auto right-[0] w-[96%] sm:w-full">
                  <Img
                    src="images/img_ellipse16.png"
                    className="h-[459px] m-auto object-cover w-full"
                    alt="ellipseSixteen"
                  />
                  <Img
                    src="images/img_ellipse15.png"
                    className="absolute h-[83px] left-[5%] object-cover top-[0] w-[18%]"
                    alt="ellipseFifteen"
                  />
                </div>
                <Img
                  src="images/img_ellipse13.png"
                  className="absolute h-[476px] inset-y-[0] left-[0] my-auto object-cover w-[86%]"
                  alt="ellipseThirteen"
                />
              </div>
              <Img
                src="images/img_cheerfulmanpo.png"
                className="absolute h-[514px] inset-y-[0] left-[5%] my-auto object-cover w-[71%]"
                alt="cheerfulmanpo"
              />
            </div>
            <div className="absolute h-[121px] inset-y-[0] left-[0] my-auto w-[21%]">
              <div className="absolute bg-black_900 h-[121px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs w-[121px]"></div>
              <div className="absolute md:h-11 h-[45px] inset-[0] justify-center m-auto w-full">
                <Img
                  src="images/img_artboard21.png"
                  className="absolute h-11 inset-[0] justify-center m-auto object-cover w-[45px]"
                  alt="artboardTwentyOne"
                />
                <Img
                  src="images/img_artboard22.png"
                  className="absolute h-11 inset-y-[0] my-auto object-cover right-[0] w-[45px]"
                  alt="artboardTwentyTwo"
                />
                <Img
                  src="images/img_artboard22_44x45.png"
                  className="absolute h-11 inset-y-[0] left-[0] my-auto object-cover w-[45px]"
                  alt="artboardTwentyTwo_One"
                />
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[188px] h-max inset-y-[0] justify-start my-auto right-[10%] w-[36%]">
              <div className="bg-pink_A401 flex flex-col h-[121px] items-center justify-end md:ml-[0] ml-[70px] mr-[27px] p-0.5 rounded-[20px] shadow-bs w-[121px]">
                <div className="md:h-[60px] h-[72px] mt-[21px] relative w-[71px]">
                  <div className="absolute md:h-[39px] h-[69px] inset-x-[0] mx-auto top-[0] w-full">
                    <div className="absolute md:h-[39px] h-[51px] left-[0] top-[0] w-[78%]">
                      <Img
                        src="images/img_star14.svg"
                        className="absolute h-[39px] right-[0] rounded-[1px] top-[0] w-[39px]"
                        alt="starFourteen"
                      />
                      <Img
                        src="images/img_star15.svg"
                        className="absolute bottom-[0] h-[34px] left-[0] rotate-[15deg] rounded-[1px] w-[34px]"
                        alt="starFifteen"
                      />
                    </div>
                    <Img
                      src="images/img_star16.svg"
                      className="absolute h-[34px] inset-y-[0] my-auto right-[0] rotate-[-15deg] rounded-[1px] w-[34px]"
                      alt="starSixteen"
                    />
                    <Img
                      src="images/img_star17.svg"
                      className="absolute bottom-[0] h-[27px] left-[13%] rounded-[1px] w-[27px]"
                      alt="starSeventeen"
                    />
                  </div>
                  <Img
                    src="images/img_star18.svg"
                    className="absolute bottom-[0] h-[34px] right-[10%] rotate-[-15deg] rounded-[1px] w-[34px]"
                    alt="starEighteen"
                  />
                </div>
                <Text
                  className="font-bold rotate-[15deg] text-center text-white_A700 w-auto"
                  variant="body5"
                >
                  +4.9
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[218px] text-center text-pink_A400 text-xl w-auto"
                shape="RoundedBorder20"
                size="xl"
                variant="OutlineBlack9003f"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-8 h-max inset-y-[0] items-start justify-center left-[11%] my-auto w-[530px] sm:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="capitalize text-left text-white_A700 tracking-[0.20px] w-auto"
              as="h3"
              variant="h3"
            >
              gET 50% oFF
            </Text>
            <Text
              className="capitalize font-semibold leading-[137.02%] max-w-[392px] md:max-w-full text-gray_51 text-left tracking-[0.20px]"
              variant="body6"
            >
              sEBSCRIBE NOW AND RECEIVE A DISCOUNT ON YOUR FIRST ORDER
            </Text>
          </div>
          <div className="flex font-inter items-start justify-start w-[433px] sm:w-full">
            <Input
              wrapClassName="w-full"
              className="font-medium leading-[normal] p-0 placeholder:text-gray_400 text-base text-gray_400 text-left tracking-[0.20px] w-full"
              type="email"
              name="language"
              placeholder="Email "
              size="sm"
              variant="FillWhiteA700"
            ></Input>
          </div>
          <Button
            className="cursor-pointer flex h-[57px] items-center justify-center w-[200px]"
            rightIcon={
              <Img
                src="images/img_mail.svg"
                className="mb-px ml-2.5"
                alt="mail"
              />
            }
            size="lg"
            variant="FillWhiteA700"
          >
            <div className="font-bold leading-[normal] text-base text-center text-pink_A400 tracking-[0.46px]">
              Sign Up Now
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Get50Page;
