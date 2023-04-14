import React from "react";

import Header from "components/Header";
import { Img, Text, Button } from "components";
import HomeScreenColumnOne from "components/HomeScreenColumnOne";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import Footer1 from "components/Footer1";

const BlogsListpagePage = () => {
  return (
    <>
      <div className="bg-black_900 flex font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start mt-[30px] md:px-5 w-[41%] md:w-full">
            <Img
              src="images/img_ellipse6_11.png"
              className="h-[196px] md:h-auto mb-[83px] object-cover w-[15%] sm:w-full"
              alt="ellipseSix"
            />
            <Text
              className="sm:mt-0 mt-[105px] text-left text-white_A700 w-[85%] sm:w-full"
              as="h3"
              variant="h3"
            ></Text>
          </div>
          <div className="md:h-[2182px] h-[2550px] md:ml-[0] ml-[88px] md:px-5 relative w-[94%] md:w-full">
            <Img
              src="images/img_ellipse7_4.png"
              className="absolute h-[339px] object-cover right-[0] top-[2%] w-[13%]"
              alt="ellipseSeven"
            />
            <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[94%]">
              <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-center self-stretch w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
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
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex items-center justify-start w-[44%] md:w-full">
                    <Img
                      src="images/img_rectangle5370.png"
                      className="h-[250px] md:h-auto object-cover w-full"
                      alt="rectangle5370_One"
                    />
                  </div>
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
                    </Text>
                    <HomeScreenColumnOne
                      className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                      readmore="Read More"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
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
                      alt="rectangle5370_Two"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex items-center justify-start w-[44%] md:w-full">
                    <Img
                      src="images/img_rectangle5370.png"
                      className="h-[250px] md:h-auto object-cover w-full"
                      alt="rectangle5370_Three"
                    />
                  </div>
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
                    </Text>
                    <HomeScreenColumnOne
                      className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                      readmore="Read More"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
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
                      alt="rectangle5370_Four"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
                  <div className="flex items-center justify-start w-[44%] md:w-full">
                    <Img
                      src="images/img_rectangle5370.png"
                      className="h-[250px] md:h-auto object-cover w-full"
                      alt="rectangle5370_Five"
                    />
                  </div>
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
                    </Text>
                    <HomeScreenColumnOne
                      className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                      readmore="Read More"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start self-stretch w-auto md:w-full">
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
                      ipsum dolor sit amit et postulant dolor sit nisi Bulum Mi.
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
                      alt="rectangle5370_Six"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute font-normal leading-[38.00px] left-[0] text-bluegray_100 text-left top-[0] w-[94%] sm:w-full"
              variant="body3"
            >
              We offer exceptional services tailored to a wide range of
              businesses that want to improve the effectiveness of their digital
              marketing activities with discernible returns on investment. We
              aim to get back to all enquiries rapidly.
            </Text>
            <div className="absolute flex md:flex-col flex-row gap-8 items-center justify-between left-[0] self-stretch top-[7%] w-auto">
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
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-center text-pink_A400 text-xl w-auto"
                shape="CircleBorder23"
                size="sm"
                variant="FillPinkA40033"
              >
                Design
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-center text-pink_A400 text-xl w-auto"
                shape="CircleBorder23"
                size="sm"
                variant="FillPinkA40033"
              >
                UI-UX
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[158px] text-center text-pink_A400 text-xl w-auto"
                shape="CircleBorder23"
                size="sm"
                variant="FillPinkA40033"
              >
                Outsourcing
              </Button>
            </div>
          </div>
          <div className="h-[1018px] md:h-[959px] mt-[279px] md:px-5 relative w-full">
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

export default BlogsListpagePage;
