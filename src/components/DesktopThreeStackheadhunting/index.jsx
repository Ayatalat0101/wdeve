import React from "react";

import { Img, Text, Button } from "components";

const DesktopThreeStackheadhunting = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_whatsappimage.png"
          className="absolute h-[780px] inset-[0] justify-center m-auto object-cover w-full"
          alt="whatsappimage"
        />
        <div className="absolute bottom-[20%] flex flex-col md:gap-10 gap-[65px] justify-start left-[6%] w-[30%]">
          {!!props?.headhunting ? (
            <Text
              className="font-gopher text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            >
              {props?.headhunting}
            </Text>
          ) : null}
          {!!props?.learnMore ? (
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[241px] md:ml-[0] ml-[23px] mr-[157px] w-auto"
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
                {props?.learnMore}
              </div>
            </Button>
          ) : null}
        </div>
        {!!props?.group19053 ? (
          <Img
            src={props?.group19053}
            className="absolute h-[125px] right-[4%] top-[36%] w-auto"
            alt="group19053"
          />
        ) : null}
      </div>
    </>
  );
};

DesktopThreeStackheadhunting.defaultProps = {};

export default DesktopThreeStackheadhunting;
