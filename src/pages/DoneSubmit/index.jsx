import React from "react";

import { Img, Text, Button } from "components";

const DoneSubmitPage = () => {
  return (
    <>
      <div className="flex font-opensans items-center justify-start mx-auto shadow-bs2 w-full">
        <div className="bg-pink_A400 flex items-center justify-start p-[33px] sm:px-5 rounded-[30px] w-full">
          <div className="flex flex-col justify-start max-w-[1032px] mb-3.5 mx-auto md:px-5 w-full">
            <Img
              src="images/img_close.svg"
              className="h-12 md:ml-[0] ml-[984px] w-12"
              alt="close"
            />
            <div className="flex flex-col gap-4 items-center justify-start mr-7 mt-[55px] w-auto md:w-full">
              <Text
                className="text-center text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                Thank you For Your Application
              </Text>
              <Text
                className="font-semibold text-center text-white_A700 w-auto"
                variant="body2"
              >
                We will contact you within few Hours.
              </Text>
            </div>
            <Img
              src="images/img_icbaselinemarkemailread.svg"
              className="h-60 md:ml-[0] ml-[382px] mt-[18px] w-60"
              alt="icbaselinemarke"
            />
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[377px] sm:min-w-full md:ml-[0] ml-[313px] mr-[341px] mt-8 md:text-3xl sm:text-[28px] text-[32px] text-center text-pink_A400 w-auto"
              size="xl"
              variant="FillWhiteA700"
            >
              Send New Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoneSubmitPage;
