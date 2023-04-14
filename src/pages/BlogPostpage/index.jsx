import React from "react";

import Header from "components/Header";
import { Img, Text, List, Button } from "components";
import HomeScreenColumnOne from "components/HomeScreenColumnOne";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import Footer1 from "components/Footer1";

const BlogPostpagePage = () => {
  return (
    <>
      <div className="bg-black_900 flex font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row gap-2 items-end justify-start mt-[30px] md:px-5 w-[38%] md:w-full">
            <Img
              src="images/img_ellipse6_10.png"
              className="h-[196px] md:h-auto object-cover w-[16%] sm:w-full"
              alt="ellipseSix"
            />
            <Text
              className="sm:mt-0 mt-[65px] text-center text-white_A700 w-auto"
              as="h1"
              variant="h1"
            ></Text>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[1052px] mt-10 text-gray_100 text-left w-auto"
            as="h6"
            variant="h6"
          >
            March 22, 2023
          </Text>
          <div className="h-[603px] md:h-[623px] md:ml-[0] ml-[73px] mt-5 md:px-5 relative w-[95%] md:w-full">
            <Img
              src="images/img_rectangle5370.png"
              className="absolute h-[603px] inset-y-[0] left-[0] my-auto object-cover w-[95%]"
              alt="rectangle5370"
            />
            <Img
              src="images/img_ellipse7_3.png"
              className="absolute h-[339px] object-cover right-[0] top-[5%] w-[13%]"
              alt="ellipseSeven"
            />
          </div>
          <div className="font-gopher md:h-[1067px] sm:h-[1301px] h-[2036px] md:ml-[0] ml-[88px] mt-[86px] md:px-5 relative w-[94%] md:w-full">
            <Img
              src="images/img_component39_pink_a400.png"
              className="absolute h-[565px] inset-y-[0] my-auto object-cover right-[0] w-auto"
              alt="componentThirtyNine"
            />
            <div className="absolute bottom-[0] flex flex-col gap-7 justify-start left-[0] w-[94%]">
              <Text
                className="font-medium md:ml-[0] ml-[39px] text-center text-white_A700 w-auto"
                as="h5"
                variant="h5"
              ></Text>
              <div className="flex flex-col font-opensans md:gap-10 gap-16 items-center justify-center self-stretch w-auto md:w-full">
                <List
                  className="flex-col md:gap-10 gap-16 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
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
                        uiltersc mi morbi dim puru . Lorem ipsum dolor sit amet,
                        et postiulart intelligents pri mel velit scfgery Lorem
                        ipsum dolor sit amit et postulant dolor sit nisi Bulum
                        Mi.
                      </Text>
                      <HomeScreenColumnOne
                        className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                        readmore="Read More"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex h-[250px] items-center justify-start w-[44%] md:w-full"
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
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
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
                        uiltersc mi morbi dim puru . Lorem ipsum dolor sit amet,
                        et postiulart intelligents pri mel velit scfgery Lorem
                        ipsum dolor sit amit et postulant dolor sit nisi Bulum
                        Mi.
                      </Text>
                      <HomeScreenColumnOne
                        className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                        readmore="Read More"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[44%] md:w-full">
                      <Img
                        src="images/img_rectangle5370.png"
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
            <div className="absolute flex flex-col font-opensans justify-start left-[2%] top-[0] w-[77%]">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h2"
                  variant="h2"
                >
                  A
                </Text>
                <Text
                  className="font-normal leading-[35.00px] text-justify text-white_A700"
                  variant="body4"
                >
                  <>
                    {" "}
                    mcorper usique ac dolor nec nisi ptqe . Bulum sed uiltersc
                    mi morbi dim puru . Lorem <br /> ipsum dolor sit amet, et
                    postiulart intelligents pri mel velit scfgery Lorem ipsum
                    dolor sit amit et postulant dolor sit nisi Bulum Mi.
                    Amcorper usique ac dolor nec nisi ptqe . Bulum sed uiltersc
                    mi morbi dim puru . Lorem ipsum dolor sit amet, et
                    postiulart intelligents pri mel velit scfgery Lorem ipsum
                    dolor sit amit et postulant dolor sit nisi Bulum Mi.Amcorper
                    usique ac dolor nec nisi ptqe . Bulum sed uiltersc mi morbi
                    dim puru . Lorem ipsum dolor sit amet, et postiulart
                    intelligents pri mel velit scfgery Lorem ipsum dolor sit
                    amit et postulant dolor sit nisi Bulum Mi.
                  </>
                </Text>
                <Text
                  className="font-bold italic leading-[49.00px] mt-16 text-left text-white_A700_7f"
                  as="h6"
                  variant="h6"
                >
                  <>
                    ‘Here write Any Quate About the Blog or Artical <br />
                    see that it was done with many conflicts of interest.’
                  </>
                </Text>
                <Text
                  className="font-normal leading-[35.00px] mt-16 text-justify text-white_A700 w-full"
                  variant="body4"
                >
                  {" "}
                  mcorper usique ac dolor nec nisi ptqe . Bulum sed uiltersc mi
                  morbi dim puru . ipsum dolor sit amet, et postiulart
                  intelligents pri mel velit scfgery Lorem ipsum dolor sit amit
                  et postulant dolor sit nisi Bulum Mi. Amcorper usique ac dolor
                  nec nisi ptqe . Bulum sed uiltersc mi morbi dim puru . Lorem
                  ipsum dolor sit amet, et postiulart intelligents pri mel velit
                  scfgery Lorem ipsum dolor sit amit et postulant dolor sit nisi
                  Bulum Mi.Amcorper usique ac dolor nec nisi ptqe . Bulum sed
                  uiltersc mi morbi dim puru . Lorem ipsum dolor sit amet, et
                  postiulart intelligents pri mel velit scfgery Lorem ipsum
                  dolor sit amit et postulant dolor sit nisi Bulum Mi.
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-end ml-auto mt-[49px] w-[28%] md:w-full">
                <Img
                  src="images/img_ellipse178.png"
                  className="h-[65px] md:h-auto mt-1 rounded-[50%] w-[65px]"
                  alt="ellipse178"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="font-semibold text-left text-pink_A400 w-auto"
                    variant="body2"
                  >
                    E.Mouhamed
                  </Text>
                  <Text
                    className="font-normal text-left text-white_A700_b2 w-auto"
                    variant="body6"
                  >
                    CTO
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start ml-3 md:ml-[0] mt-[38px] self-stretch w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[100px] text-center text-pink_A400 text-xl w-auto"
                  shape="CircleBorder23"
                  size="sm"
                  variant="FillPinkA40033"
                >
                  Coding
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[129px] text-center text-pink_A400 text-xl w-auto"
                  shape="CircleBorder23"
                  size="sm"
                  variant="FillPinkA40033"
                >
                  Marketing
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[129px] text-center text-pink_A400 text-xl w-auto"
                  shape="CircleBorder23"
                  size="sm"
                  variant="FillPinkA40033"
                >
                  Teams
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[129px] text-center text-pink_A400 text-xl w-auto"
                  shape="CircleBorder23"
                  size="sm"
                  variant="FillPinkA40033"
                >
                  Web Dev
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[1018px] md:h-[750px] mt-[70px] md:px-5 relative w-full">
            <OutsourcingPageColumnellipse165
              className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto sm:w-full"
              patterneleven="images/img_pattern11_2.png"
            />
            <Footer1 className="absolute bg-black_901 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostpagePage;
