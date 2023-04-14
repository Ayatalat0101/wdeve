import React from "react";

import { Img, Text, Button, Line, List } from "components";
import Header from "components/Header";
import DigitalMarketingPageRowellipsesix from "components/DigitalMarketingPageRowellipsesix";
import HomeScreenColumn from "components/HomeScreenColumn";
import OutsourcingPageRowsignal from "components/OutsourcingPageRowsignal";
import Footer from "components/Footer";

const DigitalMarketingPagePage = () => {
  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-black_900 flex items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="font-opensans h-[805px] md:px-5 relative w-full">
            <Img
              src="images/img_ellipse6_5.png"
              className="h-[119px] mb-[undefinedpx] mt-[110px] object-cover w-[2%] z-[1]"
              alt="ellipseSix_One"
            />
            <Header className="flex flex-col items-center justify-center mb-[-29.93px] mx-auto w-full z-[1]" />
            <DigitalMarketingPageRowellipsesix className="flex flex-row items-start justify-between mt-auto mx-auto w-full" />
          </div>
          <Text
            className="capitalize font-bold font-gopher md:ml-[0] ml-[101px] mt-[97px] text-left text-white_A700 w-auto"
            as="h5"
            variant="h5"
          >
            <>Wanna get in touch? Let&#39;s talk</>
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[235px] md:ml-[0] ml-[101px] mt-[31px] w-auto"
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
              Contact Us
            </div>
          </Button>
          <div className="flex flex-col font-opensans justify-start mt-[140px] w-full">
            <div className="flex flex-col gap-2.5 justify-start md:ml-[0] ml-[141px] md:px-5 w-[42%] md:w-full">
              <Text
                className="capitalize font-semibold mr-[21px] text-left text-white_A700 w-auto"
                as="h6"
                variant="h6"
              >
                Creating experiences through
              </Text>
              <Line className="bg-white_A700 h-[3px] md:ml-[0] ml-[116px] w-[81%]" />
            </div>
            <div className="h-[140px] md:h-[165px] md:ml-[0] ml-[121px] mt-8 md:px-5 relative w-[65%] md:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-pink_300_87 blur-[164.00px] bottom-[0] h-[133px] left-[0] rounded-[66px] w-[133px]"></div>
              <Text
                className="absolute capitalize font-bold right-[0] text-left text-white_A700 top-[0]"
                as="h5"
                variant="h5"
              ></Text>
            </div>
            <div className="font-poppins md:h-[741px] h-[822px] mt-[43px] md:px-5 relative w-full">
              <div className="absolute flex flex-col md:gap-10 gap-[372px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                <Img
                  src="images/img_ellipse12.png"
                  className="h-[162px] md:h-auto md:ml-[0] ml-[1325px] object-cover w-[8%]"
                  alt="ellipseTwelve"
                />
                <Img
                  src="images/img_ellipse11_119x71.png"
                  className="h-[119px] md:h-auto object-cover w-[5%]"
                  alt="ellipseEleven"
                />
              </div>
              <div className="absolute md:h-[698px] h-[804px] inset-[0] justify-center m-auto p-3 w-full">
                <div className="absolute flex inset-x-[0] items-center justify-start mx-auto top-[0] w-[95%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                      <div className="flex flex-col justify-start w-[65%] md:w-full">
                        <div className="flex flex-row gap-[400px] items-center justify-start ml-2.5 md:ml-[0] w-3/5 md:w-full">
                          <Text
                            className="font-semibold text-left text-pink_A400 w-auto"
                            as="h5"
                            variant="h5"
                          >
                            01
                          </Text>
                          <Text
                            className="font-semibold text-left text-pink_A400 w-auto"
                            as="h5"
                            variant="h5"
                          >
                            02
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Img
                            src="images/img_httpsapplot.png"
                            className="md:flex-1 h-[314px] sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
                            alt="httpsapplot"
                          />
                          <Img
                            src="images/img_httpsapplot_314x388.png"
                            className="md:flex-1 h-[314px] sm:h-auto object-cover rounded-[30px] w-auto md:w-full"
                            alt="httpsapplot_One"
                          />
                        </div>
                      </div>
                      <div className="h-[381px] relative w-[30%] md:w-full">
                        <Text
                          className="font-semibold mb-[-4.34px] text-left text-pink_A400 w-auto z-[1]"
                          as="h5"
                          variant="h5"
                        >
                          03
                        </Text>
                        <div className="flex items-center justify-start mt-auto mx-auto w-full">
                          <Img
                            src="images/img_httpsapplot_1.png"
                            className="h-[314px] md:h-auto object-cover rounded-[30px] w-full"
                            alt="httpsapplot_Two"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-8 items-start justify-between mt-[46px] w-full">
                      <div className="flex sm:flex-1 flex-col gap-4 h-44 md:h-auto items-center justify-start md:mt-0 mt-[5px] self-stretch w-auto sm:w-full">
                        <Text
                          className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                          variant="body1"
                        >
                          Graphic Design
                        </Text>
                        <Text
                          className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                          variant="body6"
                        >
                          Customisable Designs that time and money on the
                          initial build. From product design to branding &
                          Illustration, we offer all web design services with
                          passion that sets us apart from other agencies.
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 h-[148px] md:h-auto items-center justify-start md:mt-0 mt-[5px] self-stretch w-auto sm:w-full">
                        <Text
                          className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                          variant="body1"
                        >
                          Digital Marketing
                        </Text>
                        <Text
                          className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                          variant="body6"
                        >
                          Our expertise, as well as our passion for web design,
                          sets us apart from other agencies. Plus, our
                          experience demonstrates our ability.
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-4 h-44 md:h-auto items-center justify-start mb-[5px] self-stretch w-auto sm:w-full">
                        <Text
                          className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                          variant="body1"
                        >
                          UI /UX Designs
                        </Text>
                        <Text
                          className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                          variant="body6"
                        >
                          <>
                            Using our expertise, as well as our exceptional
                            experience in UI/UX design services, we help you
                            show off your brand&#39;s finest and exceed user
                            expectations. direct impact on today&#39;s digital
                            landscape.
                          </>
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row font-opensans md:gap-10 gap-[232px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[23px] w-[86%]"
                      orientation="horizontal"
                    >
                      <div className="flex items-center justify-center self-stretch w-auto">
                        <Button
                          className="cursor-pointer font-bold min-w-[229px] text-center text-lg text-white_A700 w-auto"
                          size="lg"
                          variant="FillPinkA400"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="flex items-center justify-center self-stretch w-auto">
                        <Button
                          className="cursor-pointer font-bold min-w-[229px] text-center text-lg text-white_A700 w-auto"
                          size="lg"
                          variant="FillPinkA400"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="flex items-center justify-center self-stretch w-auto">
                        <Button
                          className="cursor-pointer font-bold min-w-[229px] text-center text-lg text-white_A700 w-auto"
                          size="lg"
                          variant="FillPinkA400"
                        >
                          Learn More
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  src="images/img_group3.svg"
                  className="absolute bottom-[4%] h-[649px] inset-x-[0] mx-auto w-auto"
                  alt="group19050"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-opensans md:gap-10 gap-[278px] items-center justify-start mt-[200px] w-full">
            <div className="bg-pink_A400 flex flex-col gap-[35px] justify-start p-3.5 w-full">
              <div className="md:h-[494px] h-[558px] max-w-[1323px] mx-auto md:px-5 relative w-full">
                <div className="absolute font-opensans md:h-[494px] h-[505px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                  <div className="absolute md:h-[494px] h-[505px] inset-y-[0] my-auto right-[0] w-[42%] sm:w-full">
                    <div className="absolute h-[494px] inset-[0] justify-center m-auto w-[97%] sm:w-full">
                      <div className="absolute bg-pink_A200 h-[494px] inset-[0] justify-center m-auto rounded-[247px] w-[99%]"></div>
                      <div className="absolute bg-gray_900 h-[494px] inset-[0] justify-center m-auto rounded-[247px] w-[99%]"></div>
                    </div>
                    <Img
                      src="images/img_rectangle160_494x500.png"
                      className="absolute h-[494px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[95%]"
                      alt="rectangle160"
                    />
                  </div>
                  <Text
                    className="absolute capitalize font-bold left-[0] text-left text-white_A700 top-[27%]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="absolute font-opensans h-[250px] left-[0] top-[0] w-[35%] sm:w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-left text-white_A700 top-[16%] w-max"
                    as="h3"
                    variant="h3"
                  >
                    Ready to Start
                  </Text>
                  <Img
                    src="images/img_group3599_white_a700.svg"
                    className="absolute h-[250px] inset-y-[0] my-auto right-[11%] w-auto"
                    alt="group3599"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] capitalize font-inter font-normal leading-[29.00px] left-[3%] not-italic text-gray_200 text-left tracking-[0.20px] w-1/2 sm:w-full"
                  variant="body4"
                >
                  With Gerador de Devs you can do more in less time. Our team of
                  qualified and experienced digital marketers is helping
                  hundreds of clients like you draw their success marketing map
                  using focused and innovative tactics to take their business to
                  the next level
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center mb-[17px] min-w-[235px] md:ml-[0] ml-[115px] mr-[1060px] w-auto"
                rightIcon={
                  <Img
                    src="images/img_icon_feather_icon.svg"
                    className="ml-2.5"
                    alt="Icon/Feather Icon"
                  />
                }
                size="lg"
                variant="FillWhiteA700"
              >
                <div className="font-bold leading-[normal] text-center text-pink_A400 text-xl tracking-[0.46px]">
                  Contact Us
                </div>
              </Button>
            </div>
            <div className="flex flex-col font-inter md:gap-10 gap-16 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] py-20 w-full">
              <div className="flex flex-col gap-4 items-center justify-center max-w-[1200px] mx-auto w-full">
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
              <div className="flex items-center justify-start max-w-[1197px] mx-auto self-stretch w-full">
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
          <div className="flex font-opensans items-center justify-start mt-[115px] w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] py-20 w-full">
              <div className="md:h-[758px] h-[787px] max-w-[1314px] mx-auto relative w-full">
                <div className="absolute flex h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start w-full">
                    <div className="flex items-center justify-center w-full">
                      <div className="flex items-center justify-center self-stretch w-auto sm:w-full">
                        <Text
                          className="text-left text-white_A700 w-auto"
                          as="h3"
                          variant="h3"
                        >
                          Why Choosing Us
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-16 h-[607px] md:h-auto items-start justify-center self-stretch w-auto md:w-full">
                      <div className="flex flex-col gap-[42px] items-start justify-start self-stretch w-auto md:w-full">
                        <div className="flex items-center justify-start w-full">
                          <div className="h-96 relative w-full">
                            <Img
                              src="images/img_rectangle152.png"
                              className="h-96 m-auto object-cover w-full"
                              alt="rectangle152"
                            />
                            <div className="absolute bg-pink_A400_64 h-[383px] inset-[0] justify-center m-auto w-full"></div>
                          </div>
                        </div>
                        <Text
                          className="capitalize font-semibold max-w-[594px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                          variant="body4"
                        >
                          We believe that innovative marketing ideas are the
                          backbone of any successful business and we know how to
                          apply smart marketing very well
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-center self-stretch w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-4 h-[142px] md:h-auto items-start justify-start w-[595px] md:w-full">
                          <Img
                            src="images/img_settings_pink_a400_50x50.svg"
                            className="h-[50px] rounded-[10px] w-[50px]"
                            alt="settings"
                          />
                          <div className="flex flex-col gap-1 items-start justify-start self-stretch w-auto sm:w-full">
                            <div className="flex font-opensans items-start justify-start w-full">
                              <Text
                                className="capitalize font-semibold max-w-[477px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                                variant="body4"
                              >
                                Improve your ROI with scalable PPC marketing.
                              </Text>
                            </div>
                            <Text
                              className="capitalize font-inter font-normal leading-[24.00px] max-w-[477px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                              variant="body8"
                            >
                              Blending performance with exceptional customer
                              service, our GD marketing specialists are some of
                              the best in the industry with a track record for
                              growing successful businesses.
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex-col md:gap-10 gap-[65px] grid items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-1 sm:flex-col flex-row gap-4 h-[109px] md:h-auto items-start justify-start w-[595px] md:w-full">
                            <Button
                              className="flex h-[50px] items-center justify-center w-[50px]"
                              shape="icbRoundedBorder10"
                              size="mdIcn"
                              variant="icbFillPinkA40033"
                            >
                              <Img
                                src="images/img_volume.svg"
                                className="h-[27px]"
                                alt="volume"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <div className="flex font-opensans items-start justify-start w-full">
                                <Text
                                  className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                                  variant="body4"
                                >
                                  Drive more organic traffic to your website.
                                </Text>
                              </div>
                              <Text
                                className="capitalize font-inter font-normal leading-[24.00px] max-w-[529px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                                variant="body8"
                              >
                                Get more qualified traffic on the search terms
                                that matter most to your business. We achieve
                                measurable results by working on every variable
                                that impacts SERPs.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                            <Button
                              className="flex h-[50px] items-center justify-center w-[50px]"
                              shape="icbRoundedBorder10"
                              size="mdIcn"
                              variant="icbFillPinkA40033"
                            >
                              <Img
                                src="images/img_bookmark.svg"
                                className="h-6"
                                alt="bookmark"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-start justify-start w-[529px] sm:w-full">
                              <div className="flex font-opensans items-start justify-start w-full">
                                <Text
                                  className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                                  variant="body4"
                                >
                                  Scalable marketing for every stage
                                </Text>
                              </div>
                              <Text
                                className="capitalize font-inter font-normal leading-[24.00px] max-w-[529px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                                variant="body8"
                              >
                                We build an effective marketing system that
                                effect your company’s growth and transalated to
                                sales.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                            <Button
                              className="flex h-[50px] items-center justify-center w-[50px]"
                              shape="icbRoundedBorder10"
                              size="mdIcn"
                              variant="icbFillPinkA40033"
                            >
                              <Img
                                src="images/img_star_pink_a400.svg"
                                className=""
                                alt="star"
                              />
                            </Button>
                            <div className="flex flex-col gap-1 items-start justify-start w-[529px] sm:w-full">
                              <div className="flex font-opensans items-start justify-start w-full">
                                <Text
                                  className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                                  variant="body4"
                                >
                                  We make a difference
                                </Text>
                              </div>
                              <Text
                                className="capitalize font-inter font-normal leading-[24.00px] max-w-[529px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                                variant="body8"
                              >
                                We’re not just a marketing agency. We’re an
                                extension of your team that integrates
                                seamlessly with the other arms of your business,
                                driving profound impact on your bottom line
                                without creating more work.
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_group3596_pink_a400.svg"
                  className="absolute h-[257px] right-[28%] top-[0] w-auto"
                  alt="group3596"
                />
              </div>
              <div className="md:h-[53px] h-[55px] relative w-1/5">
                <div className="h-[53px] m-auto outline outline-[1px] outline-pink_A400 w-[99%]"></div>
                <Text
                  className="absolute font-bold h-max inset-[0] justify-center m-auto text-center text-pink_A400 w-max"
                  variant="body6"
                >
                  Let’s Talk
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start md:ml-[0] ml-[13px] mt-[203px] md:px-5 w-[93%] md:w-full">
            <div className="backdrop-opacity-[0.5] bg-pink_300 blur-[164.00px] h-[119px] mb-[674px] md:mt-0 mt-[92px] rounded-[59px] w-[119px]"></div>
            <div className="sm:h-[824px] md:h-[874px] h-[886px] ml-0.5 md:ml-[0] relative w-[91%] md:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-pink_300_87 blur-[164.00px] h-[119px] right-[0] rounded-[59px] top-[0] w-[119px]"></div>
              <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[95px] inset-x-[0] items-center justify-start mx-auto w-[97%]">
                <div className="flex md:flex-col flex-row gap-[19px] items-end justify-center w-3/4 md:w-full">
                  <Text
                    className="md:mt-0 mt-5 text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    What Customers Says
                  </Text>
                  <div className="h-[106px] relative w-[19%] md:w-full">
                    <div className="absolute bg-pink_A400_33 flex h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[7px] rounded-[25px] w-[75px]">
                      <Img
                        src="images/img_globe_pink_a400.svg"
                        className="h-[60px] w-[59px]"
                        alt="globe"
                      />
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_a0 blur-[164.00px] h-[106px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[106px]"></div>
                  </div>
                </div>
                <div className="h-[621px] relative w-full">
                  <div className="backdrop-opacity-[0.5] bg-pink_300_87 blur-[237.00px] h-[409px] ml-auto mr-[175px] my-auto rounded-[204px] w-[409px]"></div>
                  <OutsourcingPageRowsignal
                    className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto self-stretch w-auto sm:w-full"
                    savetimemanagin="Save Time Managing Social Media For Business"
                    descriptionFive="There are many variations passages of Lorem Ipsum available, but the majority have suffered alteratiomn in some form, by injected or randomised. words which don’t look even slightly believable if you are going to use"
                    houcinefahim="Houcine Fahim"
                    uiuxdesigner="UI/UX Designer"
                    talkToUs="Talk to Us"
                    wearefortunate={
                      <>
                        We are fortunate to work
                        <br />
                        with fantastic company
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-opensans md:h-[1221px] h-[698px] sm:h-[852px] max-w-[1405px] mt-[154px] mx-auto md:px-5 relative w-full">
            <Img
              src="images/img_group3594.png"
              className="absolute h-[698px] inset-y-[0] my-auto object-cover right-[1%] w-auto"
              alt="group3594"
            />
            <div className="absolute md:h-[1067px] h-[616px] inset-x-[0] mx-auto top-[2%] w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-pink_300 blur-[164.00px] h-[119px] left-[0] rounded-[59px] top-[12%] w-[9%]"></div>
              <div className="absolute flex md:flex-col flex-row gap-8 h-full inset-[0] items-center justify-center m-auto max-w-[1374px] py-20 w-full">
                <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                    <Text
                      className="max-w-[674px] md:max-w-full text-left text-white_A700"
                      as="h3"
                      variant="h3"
                    >
                      Ready for your Marketing campaign?
                    </Text>
                    <Text
                      className="font-normal max-w-[674px] md:max-w-full text-gray_600 text-left tracking-[0.20px]"
                      variant="body4"
                    >
                      Our skilled digital marketing and graphic designers
                      talents are eager to discuss your new successful project
                    </Text>
                  </div>
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
                <div className="flex md:flex-1 items-center justify-start w-[43%] md:w-full">
                  <Img
                    src="images/img_image_419x590.png"
                    className="h-[419px] md:h-auto object-cover rounded-[20px] w-full"
                    alt="image_TwentySeven"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-opensans md:h-[694px] h-[730px] max-w-[1404px] mt-[65px] mx-auto md:px-5 relative w-full">
            <Img
              src="images/img_ellipse13_573x429.png"
              className="absolute bottom-[0] h-[573px] object-cover right-[0] w-[31%]"
              alt="ellipseThirteen_One"
            />
            <div className="absolute md:h-[629px] h-[692px] left-[0] top-[0] w-[92%] md:w-full">
              <div className="md:h-[629px] h-[692px] m-auto w-full">
                <div className="absolute md:h-[452px] h-[529px] right-[0] top-[0] w-[46%] sm:w-full">
                  <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[63px] items-center justify-start w-full">
                      <Text
                        className="capitalize font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        About Gerador de.devs
                      </Text>
                      <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                        <Text
                          className="capitalize font-opensans font-semibold text-left text-white_A700 w-full"
                          variant="body1"
                        ></Text>
                        <Text
                          className="capitalize font-inter font-normal leading-[29.00px] not-italic text-gray_502 text-left tracking-[0.20px] w-[98%] sm:w-full"
                          variant="body4"
                        >
                          <>
                            With Gerador de Devs you can do more in less time.
                            Let&#39;s Innovate using our technologies, marketing
                            strategy and expertise that will take your business
                            to the next level. We are your new success tech
                            partner that you can depend on
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_group3596.svg"
                    className="absolute h-[328px] right-[13%] top-[0] w-auto"
                    alt="group3602"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[629px] items-start justify-start left-[0] p-[51px] md:px-10 sm:px-5 w-[76%]"
                  style={{
                    backgroundImage: "url('images/img_group3604_629x970.png')",
                  }}
                >
                  <div className="h-[166px] md:h-[519px] mb-[200px] mt-[159px] relative w-[52%] sm:w-full">
                    <Img
                      src="images/img_artboard21.png"
                      className="absolute h-40 inset-[0] justify-center m-auto object-cover w-[38%]"
                      alt="artboardTwentyOne_One"
                    />
                    <Img
                      src="images/img_artboard22.png"
                      className="absolute h-40 inset-y-[0] my-auto object-cover right-[0] w-[38%]"
                      alt="artboardTwentyTwo_Two"
                    />
                    <Img
                      src="images/img_artboard22_44x45.png"
                      className="absolute h-40 inset-y-[0] left-[0] my-auto object-cover w-[38%]"
                      alt="artboardTwentyTwo_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[6%] flex flex-row gap-8 items-center justify-center right-[18%] self-stretch w-auto">
                <Img
                  src="images/img_twitter_blue_500.svg"
                  className="common-pointer h-16 rounded-[50%] w-16"
                  onClick={handleNavigate6}
                  alt="twitter"
                />
                <Img
                  src="images/img_facebook.svg"
                  className="common-pointer h-16 w-16"
                  onClick={handleNavigate7}
                  alt="facebook"
                />
                <Img
                  src="images/img_group.png"
                  className="h-16 md:h-auto rounded-[50%] w-16"
                  alt="skilliconsinsta"
                />
                <Button
                  className="flex h-16 items-center justify-center rounded-[50%] w-16"
                  size="mdIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_mail_pink_a400.svg"
                    className="h-[42px]"
                    alt="mail"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-black_901 flex items-center justify-center mt-[209px] md:px-5 px-[120px] py-8 self-stretch w-full" />
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingPagePage;
