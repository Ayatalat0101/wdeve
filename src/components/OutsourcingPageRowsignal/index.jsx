import React from "react";

import { Img, Text, RatingBar, Button } from "components";

const OutsourcingPageRowsignal = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[19px] items-start justify-start w-[38%] md:w-full">
          <div className="flex flex-col gap-[19px] items-start justify-start ml-2.5 md:ml-[0] w-[87%] md:w-full">
            <Img
              src="images/img_signal.svg"
              className="h-[23px] w-auto"
              alt="signal"
            />
            <Text
              className="capitalize font-opensans font-semibold leading-[38.00px] text-bluegray_100 text-left w-full"
              variant="body3"
            >
              {props?.savetimemanagin}
            </Text>
          </div>
          <Text
            className="font-normal font-opensans leading-[30.00px] text-bluegray_300 text-left w-[89%] sm:w-full"
            variant="body6"
          >
            {props?.descriptionFive}
          </Text>
          <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[52%] md:w-full">
            <RatingBar
              className="rounded-[1px]"
              value={5}
              starCount={5}
              color="#ff7847"
              activeColor="#ff7847"
              size={17}
            ></RatingBar>
            <Text
              className="font-opensans font-semibold mt-5 text-bluegray_100 text-left w-auto"
              variant="body5"
            >
              {props?.houcinefahim}
            </Text>
            <Text
              className="font-normal font-opensans mt-[13px] text-bluegray_300 text-left w-auto"
              variant="body7"
            >
              {props?.uiuxdesigner}
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[225px] mt-[31px] w-auto"
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
                {props?.talkToUs}
              </div>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-start w-[56%] md:w-full">
          <div className="flex flex-col gap-9 items-start justify-start w-full">
            <Text
              className="font-bold font-opensans leading-[50.00px] text-bluegray_100 text-left"
              as="h6"
              variant="h6"
            >
              {props?.wearefortunate}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Button
                className="flex h-9 items-center justify-center mb-7 md:mt-0 mt-[420px] w-9"
                shape="icbRoundedBorder20"
                size="mdIcn"
                variant="icbFillPinkA400"
              >
                <Img
                  src="images/img_group19007.svg"
                  className=""
                  alt="group19007"
                />
              </Button>
              <div className="flex md:flex-1 items-center justify-start py-2.5 w-[73%] md:w-full">
                <div className="bg-pink_A400 flex h-[464px] sm:h-auto items-center justify-start rounded-[50%] w-[464px] sm:w-full">
                  <div className="h-[464px] relative w-[464px] sm:w-full">
                    <Img
                      src="images/img_portraitcheerf.png"
                      className="absolute h-[464px] inset-[0] justify-center m-auto rounded-[50%] w-[464px]"
                      alt="portraitcheerf"
                    />
                    <Button
                      className="absolute bottom-[4%] flex h-9 items-center justify-center left-[2%] w-9"
                      shape="icbRoundedBorder20"
                      size="mdIcn"
                      variant="icbOutlinePinkA400"
                    >
                      <Img
                        src="images/img_group19006.svg"
                        className=""
                        alt="group19006"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="flex h-[60px] items-center justify-center mb-[272px] md:ml-[0] ml-[84px] md:mt-0 mt-[152px] w-[60px]"
                shape="icbCircleBorder32"
                size="lgIcn"
                variant="icbFillPinkA400"
              >
                <Img
                  src="images/img_dashboard_black_903.svg"
                  className=""
                  alt="dashboard"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

OutsourcingPageRowsignal.defaultProps = {
  savetimemanagin: "They choose the best talents for my company",
  descriptionFive:
    "There are many variations passages of Lorem Ipsum available, but the majority have suffered alteratiomn in some form, by injected or randomised. words which don’t look even slightly believable if you are going to use",
  houcinefahim: "Houcine Fahim",
  uiuxdesigner: "UI/UX Designer",
  talkToUs: "Talk to Us",
  wearefortunate: (
    <>
      We are fortunate to work
      <br />
      with fantastic company
    </>
  ),
};

export default OutsourcingPageRowsignal;
