import React from "react";

import DesktopThreeStackheadhunting from "components/DesktopThreeStackheadhunting";
import { Img } from "components";
import Header1 from "components/Header1";

const DesktopFourPage = () => {
  return (
    <>
      <div className="bg-black_900 h-[872px] mx-auto relative w-full">
        <div className="h-[1566px] md:h-[788px] mx-auto overflow-auto md:px-5 w-full">
          <DesktopThreeStackheadhunting className="absolute bottom-[0] h-[788px] inset-x-[0] mx-auto w-full" />
          <div className="absolute flex inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="bg-pink_A400_14 flex h-[778px] justify-end relative w-full">
              <div className="backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] h-[119px] mb-2.5 ml-[153px] mt-auto rounded-[59px] w-[119px]"></div>
              <Img
                src="images/img_ezgif18cd51619ec_778x1440.png"
                className="absolute h-[778px] inset-[0] justify-center m-auto object-cover w-full"
                alt="ezgif18cd51619e"
              />
            </div>
          </div>
        </div>
        <Header1 className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full" />
      </div>
    </>
  );
};

export default DesktopFourPage;
