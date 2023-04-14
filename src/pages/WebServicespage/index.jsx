import React from "react";

import WebServicesPageColumnartboardtwentyone from "components/WebServicesPageColumnartboardtwentyone";
import { Text, Input, Img, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";
import WebServicesPageColumnmenu from "components/WebServicesPageColumnmenu";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import Footer from "components/Footer";

const WebServicespagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-black_900 flex md:flex-col flex-row md:gap-5 items-center justify-center p-[19px] w-full">
            <WebServicesPageColumnartboardtwentyone className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[65px] md:mt-0 mt-0.5 w-auto md:w-full" />
            <div className="flex md:flex-1 md:flex-col flex-row gap-10 items-center justify-start md:ml-[0] ml-[60px] self-stretch w-auto md:w-full">
              <div className="flex font-montserrat items-center justify-start w-[6%] md:w-full">
                <div className="flex items-center justify-start w-full">
                  <Text
                    className="font-medium text-center text-white_A700 w-auto"
                    variant="body8"
                  >
                    HOME
                  </Text>
                </div>
              </div>
              <div className="flex font-montserrat items-center justify-start px-0.5 w-[9%] md:w-full">
                <div className="flex items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-medium text-center text-white_A700 uppercase w-auto"
                    variant="body8"
                  >
                    Services
                  </Text>
                </div>
              </div>
              <div className="flex font-montserrat items-center justify-start w-[9%] md:w-full">
                <div className="flex items-center justify-start w-full">
                  <Text
                    className="font-medium text-center text-white_A700 uppercase w-auto"
                    variant="body8"
                  >
                    PROJECTS
                  </Text>
                </div>
              </div>
              <div className="flex font-montserrat items-center justify-start px-[11px] w-[9%] md:w-full">
                <div className="flex items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-medium text-center text-white_A700 uppercase w-auto"
                    variant="body8"
                  >
                    ABOUT
                  </Text>
                </div>
              </div>
              <div className="flex font-montserrat items-center justify-start px-0.5 w-[9%] md:w-full">
                <div className="flex items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-medium text-center text-white_A700 uppercase w-auto"
                    variant="body8"
                  >
                    CONTACT
                  </Text>
                </div>
              </div>
              <div className="flex font-montserrat items-center justify-start w-[9%] md:w-full">
                <div className="flex items-center justify-start w-full">
                  <Text
                    className="font-medium text-center text-white_A700 uppercase w-auto"
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
                      className="cursor-pointer my-auto"
                      onClick={() => setInputvalue("")}
                      fillColor="#99dfdfdf"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer my-auto"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder17"
                size="smSrc"
                variant="srcOutlinePinkA400"
              ></Input>
            </div>
            <WebServicesPageColumnmenu
              className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[76px] w-auto md:w-full"
              menu="Menu"
            />
          </div>
        </header>
        <div className="h-[1533px] md:h-[961px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="h-[1388px] md:h-[961px] mx-auto w-full">
              <div className="absolute h-[1248px] md:h-[961px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  src="images/img_whatsappimage20230330_774x1437.png"
                  className="absolute h-[774px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  alt="whatsappimageTwenty"
                />
                <div className="absolute bg-pink_A400_b2 bottom-[0] flex h-[961px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-[336px] md:px-10 sm:px-5 rounded-[480px] w-[961px]">
                  <div className="flex flex-col gap-1.5 items-end justify-start mb-[133px] w-[4%] md:w-full">
                    <Text
                      className="font-normal rotate-[90deg] text-left text-white_A700 tracking-[4.00px] w-auto"
                      variant="body7"
                    >
                      SCROLL
                    </Text>
                    <Line className="bg-white_A700 h-16 mr-0.5 w-0.5" />
                  </div>
                </div>
              </div>
              <div className="absolute bg-black_900 bottom-[0] flex inset-x-[0] items-start justify-end mx-auto p-[101px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start mb-[75px] mt-[177px] w-[61%] md:w-full">
                  <Text
                    className="capitalize font-bold text-left text-white_A700 w-auto"
                    as="h5"
                    variant="h5"
                  >
                    <>Wanna get in touch? Let&#39;s talk</>
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[235px] w-auto"
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
                      Contact Us
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start ml-[155px] mt-[-NaNpx] w-[70%] z-[1]">
              <div className="md:h-[131px] h-[230px] relative w-full">
                <Text
                  className="absolute right-[0] text-left text-white_A700 top-[0] w-auto"
                  as="h1"
                  variant="h1"
                >
                  Web and software
                </Text>
                <Text
                  className="absolute bottom-[0] capitalize left-[0] text-left text-white_A700 w-auto"
                  as="h1"
                  variant="h1"
                >
                  development
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[506px] text-left text-white_A700 w-auto"
                as="h1"
                variant="h1"
              >
                Services
              </Text>
            </div>
            <Img
              src="images/img_ellipse6_18.png"
              className="h-[196px] mt-[-NaNpx] object-cover w-[6%] z-[1]"
              alt="ellipseSix"
            />
            <Img
              src="images/img_ellipse7_339x171.png"
              className="h-[339px] mb-auto ml-auto mt-[-NaNpx] object-cover w-[12%] z-[1]"
              alt="ellipseSeven"
            />
            <div className="flex flex-col gap-[22px] items-start justify-start ml-[87px] mt-[-56.91px] w-auto z-[1]">
              <Text
                className="capitalize font-bold text-left text-pink_A400 w-auto"
                as="h6"
                variant="h6"
              >
                At Grador de Devs
              </Text>
              <Text
                className="capitalize font-bold text-left text-white_A700 w-full"
                variant="body2"
              >
                We offer exceptional tailored services as we hit the right notes
                of the amazing Salsa dance.
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[36%] flex inset-x-[0] items-center justify-start mx-auto w-auto">
            <Text
              className="capitalize text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            ></Text>
          </div>
          <Text
            className="absolute bottom-[0] capitalize font-normal left-[6%] text-left text-white_A700 w-auto"
            variant="body4"
          >
            All our software and web dev projects include standard perks
          </Text>
        </div>
        <div className="md:h-[1016px] sm:h-[1063px] h-[947px] max-w-[1353px] mt-[116px] mx-auto md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex font-gopher h-max inset-[0] items-center justify-center m-auto py-[108px] w-[98%]"
            style={{ backgroundImage: "url('images/img_group29.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mt-[92px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[13px] w-[93%] md:w-full">
                <Text
                  className="capitalize font-medium md:mt-0 mt-[21px] text-left text-white_A700 w-auto"
                  variant="body2"
                >
                  Mobile Ready
                </Text>
                <Text
                  className="capitalize font-medium md:ml-[0] ml-[279px] text-left text-white_A700 w-[32%] sm:w-full"
                  variant="body2"
                >
                  Customisable UI UX Designs
                </Text>
                <Text
                  className="capitalize font-medium ml-16 md:ml-[0] md:mt-0 mt-[22px] text-left text-white_A700 w-auto"
                  variant="body2"
                >
                  Latest Technology
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-start justify-start w-full">
                <Text
                  className="capitalize font-normal leading-[24.00px] mb-1.5 not-italic text-left text-white_A700 tracking-[0.20px]"
                  variant="body6"
                >
                  <>
                    Mobile Website use now over 50%.
                    <br />
                    All our websites are mobile ready.
                    <br />
                    Rank higher on google for mobile search
                  </>
                </Text>
                <Text
                  className="capitalize font-normal leading-[24.00px] sm:ml-[0] ml-[130px] sm:mt-0 mt-[17px] not-italic text-left text-white_A700 tracking-[0.20px]"
                  variant="body6"
                >
                  <>
                    Exceptional Designs for each project
                    <br />
                    Smart user experience flow
                    <br />
                    Built for converting visitors into customers.
                  </>
                </Text>
                <Text
                  className="capitalize font-normal leading-[24.00px] mb-1.5 sm:ml-[0] ml-[86px] not-italic text-left text-white_A700 tracking-[0.20px]"
                  variant="body6"
                >
                  <>
                    Applying latest technologty to projects
                    <br />
                    Clean architecture
                    <br />
                    Highest security standards
                  </>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-8 md:ml-[0] mt-[125px] w-[87%] md:w-full">
                <Img
                  src="images/img_component59.svg"
                  className="h-[216px] w-[216px]"
                  alt="componentFiftyNine"
                />
                <Img
                  src="images/img_component58.svg"
                  className="h-[216px] md:ml-[0] ml-[253px] w-[216px]"
                  alt="componentFiftyEight"
                />
                <Img
                  src="images/img_component57.svg"
                  className="h-[216px] md:ml-[0] ml-[235px] w-[216px]"
                  alt="componentFiftySeven"
                />
              </div>
              <div className="flex md:flex-col flex-row font-gopher md:gap-5 items-center justify-start ml-4 md:ml-[0] mt-[25px] w-[92%] md:w-full">
                <Text
                  className="capitalize font-medium text-left text-white_A700 w-auto"
                  variant="body2"
                >
                  Premade Plugins
                </Text>
                <Text
                  className="capitalize font-medium md:ml-[0] ml-[225px] text-left text-white_A700 w-auto"
                  variant="body2"
                >
                  SEO Ready
                </Text>
                <Text
                  className="capitalize font-medium md:ml-[0] ml-[279px] text-left text-white_A700 w-auto"
                  variant="body2"
                >
                  Ongoing Support
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row font-inter md:gap-10 h-full inset-y-[0] items-center justify-between left-[1%] my-auto w-[63%]">
            <div className="flex flex-col md:gap-10 gap-[611px] items-start justify-start w-[47%] md:w-full">
              <Img
                src="images/img_component52.svg"
                className="h-[216px] w-[216px]"
                alt="componentFiftyTwo"
              />
              <Text
                className="capitalize font-normal leading-[24.00px] not-italic text-left text-white_A700 tracking-[0.20px]"
                variant="body6"
              >
                <>
                  Blog System.
                  <br />
                  Google Shopping Feed.
                  <br />
                  Automatic Related Products.
                  <br />
                  Abandoned Cart Recovery & Many More
                </>
              </Text>
            </div>
            <div className="flex flex-col md:gap-10 gap-[610px] justify-start w-[44%] md:w-full">
              <Img
                src="images/img_component61.svg"
                className="h-[216px] w-[216px]"
                alt="componentSixtyOne"
              />
              <Text
                className="capitalize font-normal leading-[24.00px] md:ml-[0] ml-[5px] not-italic text-left text-white_A700 tracking-[0.20px]"
                variant="body6"
              >
                <>
                  Structured code ready for SEO.
                  <br />
                  Websites will start to rank naturally.
                  <br />
                  High converting designIncreased traffic means increase in
                  customers and sales.
                </>
              </Text>
            </div>
          </div>
          <Img
            src="images/img_component56.svg"
            className="absolute h-[216px] right-[14%] top-[0] w-[216px]"
            alt="componentFiftySix"
          />
          <Text
            className="absolute bottom-[3%] capitalize font-inter font-normal leading-[24.00px] not-italic right-[0] text-left text-white_A700 tracking-[0.20px]"
            variant="body6"
          >
            <>
              Ongoing support packages available.
              <br />
              Make sure your security is maintained.
              <br />
              Make sure software is updated.
              <br />
              Troubleshooting and technical support.
            </>
          </Text>
        </div>
        <div className="md:h-[1666px] h-[2047px] mt-[124px] md:px-5 relative w-full">
          <Img
            src="images/img_component39_pink_a400.png"
            className="absolute h-[565px] object-cover right-[0] top-[0] w-auto"
            alt="componentThirtyNine"
          />
          <div className="absolute flex items-center justify-start left-[5%] top-[10%] w-auto">
            <Text
              className="capitalize font-bold text-left text-white_A700 w-full"
              as="h5"
              variant="h5"
            ></Text>
          </div>
          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-full">
            <div className="flex items-center justify-center max-w-[1439px] py-8 w-full">
              <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-center max-w-[1399px] w-full">
                <div className="flex md:flex-col flex-row gap-8 items-center justify-center py-4 self-stretch w-auto md:w-full">
                  <Img
                    src="images/img_image_369x635.png"
                    className="h-[369px] sm:h-auto max-w-[635px] object-cover w-[635px] md:w-full"
                    alt="image_Ten"
                  />
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto md:w-full">
                    <Text
                      className="capitalize font-inter font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                      variant="body1"
                    ></Text>
                    <Text
                      className="capitalize font-normal font-opensans text-gray_600 text-left"
                      variant="body4"
                    >
                      <>
                        We provide websites that are clearly designed and ready
                        to view on any sort of device in any screen orientation.
                        <br />
                        Although our eCommerce service means that your company’s
                        branding, logo and preferred colour scheme will always
                        be on view, the transactional part of the process will
                        be standardised to an extent.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-center py-4 self-stretch w-auto md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto md:w-full">
                      <Text
                        className="capitalize font-bold max-w-[700px] md:max-w-full text-left text-white_A700"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Text
                        className="capitalize font-normal max-w-[700px] md:max-w-full text-gray_600 text-left"
                        variant="body4"
                      >
                        We deliver innovative solutions that achieve the best
                        results for your business, regardless of your industry.
                        We provide idea validation and pre-market testing
                        services to reduce risks and build a product or service
                        to perfectly meets your needs
                      </Text>
                    </div>
                    <Img
                      src="images/img_image_3.png"
                      className="h-[369px] sm:h-auto max-w-[635px] object-cover w-[635px] md:w-full"
                      alt="image_Eleven"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-center py-4 self-stretch w-auto md:w-full">
                    <Img
                      src="images/img_image_4.png"
                      className="h-[369px] sm:h-auto max-w-[635px] object-cover w-[635px] md:w-full"
                      alt="image_Twelve"
                    />
                    <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto md:w-full">
                      <Text
                        className="capitalize font-bold max-w-[700px] md:max-w-full text-left text-white_A700"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Text
                        className="capitalize font-normal text-gray_600 text-left"
                        variant="body4"
                      >
                        <>
                          We design, build, and maintain custom software tools
                          that fit seamlessly with your current needs and
                          processes. We provide enterprise software development
                          services in every business domains and tech sector.
                          <br />
                          Although, we never skip integrating our security high
                          standars in your project to ensure seamless project
                          flow without anty interruption
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1329px] h-[677px] sm:h-[833px] mt-[157px] md:px-5 relative w-full">
          <Img
            src="images/img_ellipse13_676x628.png"
            className="absolute h-[676px] inset-y-[0] my-auto object-cover right-[0] w-[44%]"
            alt="ellipseThirteen"
          />
          <div className="absolute md:h-[1172px] h-[626px] inset-x-[0] mx-auto top-[0] w-[99%] md:w-full">
            <Img
              src="images/img_group3604.png"
              className="absolute h-[626px] inset-y-[0] my-auto object-cover right-[4%] w-auto"
              alt="group3594"
            />
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full">
              <Img
                src="images/img_ellipse13_5.png"
                className="md:flex-1 h-[119px] sm:h-auto md:mt-0 mt-[74px] object-cover w-[6%] md:w-full"
                alt="ellipseThirteen_One"
              />
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[88px] items-center justify-center md:px-10 px-16 sm:px-5 py-20 self-stretch w-auto md:w-full">
                <div className="flex flex-col gap-[50px] items-start justify-start self-stretch w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="font-opensans max-w-[491px] md:max-w-full text-left text-white_A700"
                      as="h3"
                      variant="h3"
                    >
                      Ready to start your project?
                    </Text>
                    <Text
                      className="font-inter font-normal max-w-[491px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                      variant="body5"
                    >
                      With Gerador de Devs you can do more in less time. Our
                      experienced developers and graphic designers talents are
                      eager to discuss your new successful project
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[281px] w-auto"
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
                      Talk To Us Now
                    </div>
                  </Button>
                </div>
                <div className="flex items-center justify-start w-[53%] md:w-full">
                  <Img
                    src="images/img_image_5.png"
                    className="h-[434px] md:h-auto object-cover rounded-[20px] w-full"
                    alt="image_Sixteen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1046px] md:h-[864px] mt-[184px] md:px-5 relative w-full">
          <OutsourcingPageColumnellipse165
            className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto sm:w-full"
            patterneleven="images/img_pattern11_2.png"
          />
          <Footer className="absolute bg-black_901 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-full" />
        </div>
      </div>
    </>
  );
};

export default WebServicespagePage;
