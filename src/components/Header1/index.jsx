import React from "react";

import { Img, Text, Input } from "components";
import { CloseSVG } from "../../assets/images";

const Header1 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="bg-black_900 flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-center p-[19px] w-full">
          <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[65px] md:mt-0 mt-0.5 w-[9%] md:w-full">
            <div className="h-11 relative w-full">
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
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-center justify-start self-stretch w-auto md:w-full">
            <div className="flex items-center justify-start w-[5%] md:w-full">
              <div className="flex items-center justify-start w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 w-auto"
                  variant="body8"
                >
                  HOME
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start px-0.5 w-[8%] md:w-full">
              <div className="flex items-center justify-start w-auto md:w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 uppercase w-auto"
                  variant="body8"
                >
                  Services
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start w-[8%] md:w-full">
              <div className="flex items-center justify-start w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 uppercase w-auto"
                  variant="body8"
                >
                  PROJECTS
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start px-[11px] w-[8%] md:w-full">
              <div className="flex items-center justify-start w-auto md:w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 uppercase w-auto"
                  variant="body8"
                >
                  ABOUT
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start px-0.5 w-[8%] md:w-full">
              <div className="flex items-center justify-start w-auto md:w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 uppercase w-auto"
                  variant="body8"
                >
                  CONTACT
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-start w-[8%] md:w-full">
              <div className="flex items-center justify-start w-full">
                <Text
                  className="font-medium font-montserrat text-center text-white_A700 uppercase w-auto"
                  variant="body8"
                >
                  Our Blog
                </Text>
              </div>
            </div>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e)}
              wrapClassName="flex w-[239px] md:w-full"
              className="font-inter font-medium gap-2 p-0 placeholder:text-gray_300_99 text-gray_300_99 text-left text-xs w-full"
              name="input"
              placeholder="Search"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer ml-[35px] my-auto"
                    onClick={() => setInputvalue("")}
                    fillColor="#99dfdfdf"
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                ) : (
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[35px] my-auto"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder17"
              size="smSrc"
              variant="srcOutlinePinkA400"
            ></Input>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
