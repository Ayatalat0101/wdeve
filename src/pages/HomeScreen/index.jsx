import React from "react";

import Header from "components/Header";
import HomeScreenStackOne from "components/HomeScreenStackOne";
import { Img, Text, Button, List } from "components";
import HomeScreenColumn from "components/HomeScreenColumn";
import HomeScreenColumnOne from "components/HomeScreenColumnOne";
import Footer from "components/Footer";

const HomeScreenPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start mx-auto w-full">
            <div className="flex flex-col relative w-full">
              <HomeScreenStackOne
                className="h-[748px] mx-auto w-full"
                language="Software and Web Development "
                geradorededevs="Geradore Dev. Devs"
                description="Gerador de Devs offer a variety of services from web development to marketing and outsourcing for the tech industry Talk to us today to discuss your new project."
              />
              <Img
                src="images/img_ellipse6_119x21.png"
                className="h-[119px] mt-[-NaNpx] object-cover w-[2%] z-[1]"
                alt="ellipseSix_One"
              />
              <Img
                src="images/img_group19049.png"
                className="h-[807px] mt-[-3.21px] mx-auto object-cover w-auto md:w-full z-[1]"
                alt="group19049"
              />
            </div>
            <Img
              src="images/img_ellipse11.png"
              className="h-[119px] md:h-auto object-cover w-[2%]"
              alt="ellipseEleven"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[63px] justify-start mb-auto mt-[-NaNpx] mx-auto w-full z-[1]">
            <Text
              className="capitalize md:ml-[0] ml-[463px] text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            >
              Our partners
            </Text>
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center max-w-[1440px] w-full">
                <Img
                  src="images/img_capture1removebgpreview.png"
                  className="sm:flex-1 h-[111px] md:h-auto object-cover w-[196px] sm:w-full"
                  alt="capture1removeb"
                />
                <Img
                  src="images/img_edclogowitht.png"
                  className="sm:flex-1 h-[122px] md:h-auto object-cover w-[178px] sm:w-full"
                  alt="edclogowitht"
                />
                <Img
                  src="images/img_aasermediafacebook01.png"
                  className="sm:flex-1 h-[155px] md:h-auto object-cover w-[159px] sm:w-full"
                  alt="aasermediafaceb"
                />
                <Img
                  src="images/img_atyd5kffmh653mw.png"
                  className="sm:flex-1 h-[111px] md:h-auto object-cover w-[195px] sm:w-full"
                  alt="atyd5kffmh653mw"
                />
                <Img
                  src="images/img_download2.png"
                  className="h-[155px] md:h-auto object-cover w-[155px]"
                  alt="downloadTwo"
                />
                <Img
                  src="images/img_javalogoremovebgpreview.png"
                  className="sm:flex-1 h-[111px] md:h-auto object-cover w-[197px] sm:w-full"
                  alt="javalogoremoveb"
                />
                <Img
                  src="images/img_adclogoidentit.png"
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  alt="adclogoidentit"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-[-345.9px] mx-auto w-[97%] z-[1]">
            <div className="md:h-[593px] h-[732px] mt-[5px] relative w-[95%] md:w-full">
              <Text
                className="absolute font-bold left-[1%] text-left text-white_A700 top-[0] w-[68%] sm:w-full"
                as="h5"
                variant="h5"
              >
                Helping more and more businesses around the world!
              </Text>
              <div className="absolute bottom-[0] md:h-[588px] h-[618px] inset-x-[0] mx-auto w-full">
                <Img
                  src="images/img_component50.svg"
                  className="absolute bottom-[0] h-[588px] inset-x-[0] mx-auto w-auto"
                  alt="componentFifty"
                />
                <div className="absolute bottom-[8%] flex items-center justify-start left-[0] w-[31%]">
                  <div className="flex flex-col gap-2 justify-start w-full">
                    <div className="flex flex-row gap-[26px] items-center justify-start w-[79%] md:w-full">
                      <Text
                        className="font-bold text-left text-pink_A400 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        +300
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Talents
                      </Text>
                    </div>
                    <Text
                      className="font-bold ml-2.5 md:ml-[0] text-left text-white_A700 w-[98%] sm:w-full"
                      variant="body4"
                    >
                      Talents training on the expertise of GD and ready upon
                      request in different IT segments
                    </Text>
                  </div>
                </div>
                <div className="absolute h-[120px] md:h-[60px] right-[0] top-[0] w-[30%] sm:w-full">
                  <Text
                    className="absolute font-bold left-[0] text-left text-pink_A400 top-[0] w-auto"
                    as="h5"
                    variant="h5"
                  >
                    +100
                  </Text>
                  <Text
                    className="absolute font-bold right-[0] text-left text-white_A700 top-[3%] w-auto"
                    as="h6"
                    variant="h6"
                  >
                    collaborators
                  </Text>
                  <Text
                    className="absolute bottom-[0] font-bold left-[2%] text-left text-white_A700 w-[77%] sm:w-full"
                    variant="body4"
                  >
                    working from around the world
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2119px] sm:h-[2139px] md:h-[3047px] mt-[53px] md:px-5 relative w-full">
          <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] h-[162px] right-[0] rounded-[50%] top-[0] w-[162px]"></div>
          <div className="absolute h-[2085px] sm:h-[2086px] md:h-[2994px] inset-[0] justify-center m-auto w-full">
            <Img
              src="images/img_group3599.svg"
              className="h-[194px] ml-auto mr-[382px] mt-[21px] w-auto"
              alt="group3599"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[72px] h-full inset-[0] items-center justify-center m-auto max-w-[1440px] md:px-10 sm:px-5 px-[120px] py-8 w-full">
              <div className="flex flex-col gap-4 items-center justify-center max-w-[1262px] w-full">
                <div className="flex font-opensans items-center justify-center self-stretch w-auto md:w-full">
                  <Text
                    className="text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Our Company Facts
                  </Text>
                </div>
                <Text
                  className="capitalize font-inter font-normal max-w-[594px] md:max-w-full not-italic text-center text-gray_600 tracking-[0.20px]"
                  variant="body5"
                >
                  Gerador de Devs strives to transform the lives of people in
                  the world using Technology.
                </Text>
              </div>
              <div className="flex flex-col font-inter md:gap-10 gap-16 items-start justify-start self-stretch w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center self-stretch w-auto md:w-full">
                  <Img
                    src="images/img_image.png"
                    className="h-[369px] md:h-auto object-cover w-[451px] sm:w-full"
                    alt="image_ThirtyEight"
                  />
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="capitalize font-semibold max-w-[429px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                      variant="body1"
                    >
                      More Than 200 Porjects Around The World
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                      variant="body6"
                    >
                      Gerador de Devs accomplished hunderds of succesful
                      projects for clients from around the globe
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="capitalize font-semibold max-w-[429px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                      variant="body1"
                    >
                      more than 100 collaborators
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                      variant="body6"
                    >
                      We have hired more than hunderd of talented employees from
                      around the globe for Gerador de Devs and for other
                      businesses
                    </Text>
                  </div>
                  <Img
                    src="images/img_image_369x451.png"
                    className="h-[369px] md:h-auto object-cover w-[451px] sm:w-full"
                    alt="image_ThirtyNine"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center self-stretch w-auto md:w-full">
                  <Img
                    src="images/img_image_1.png"
                    className="h-[369px] md:h-auto object-cover w-[451px] sm:w-full"
                    alt="image_Forty"
                  />
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="capitalize font-semibold max-w-[429px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                      variant="body1"
                    >
                      4 years of market experience
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                      variant="body6"
                    >
                      We have been in the tech market more than four years
                      although our experience and quality of work exceeding 15
                      years of creativity and success
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center self-stretch w-auto md:w-full">
                  <div className="flex flex-col gap-8 items-center justify-start self-stretch w-auto sm:w-full">
                    <Text
                      className="capitalize font-semibold max-w-[429px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                      variant="body1"
                    >
                      more than 200 graduates to the IT market
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[24.00px] max-w-[429px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                      variant="body6"
                    >
                      As Gerador de Devs supporting other tech businesses in
                      outsourcing and headhunting, we are training hundreds of
                      talents and developers to be part of the success and
                      challenges in the IT business
                    </Text>
                  </div>
                  <Img
                    src="images/img_image_2.png"
                    className="h-[369px] md:h-auto object-cover w-[451px] sm:w-full"
                    alt="image_FortyOne"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[225px] w-auto"
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
                  Talk to Us
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-center max-w-[1440px] mt-[139px] md:px-10 sm:px-5 px-[120px] py-20 w-full">
          <div className="h-[227px] max-w-[1200px] mx-auto relative w-full">
            <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-center max-w-[1200px] mx-auto top-[10%] w-full">
              <div className="flex font-opensans items-center justify-center self-stretch w-auto sm:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Clients Projects
                </Text>
              </div>
              <Text
                className="capitalize font-inter font-normal max-w-[594px] md:max-w-full not-italic text-center text-gray_600 tracking-[0.20px]"
                variant="body5"
              >
                We bring your ideas to life by designing impactful digital
                products that people love to use.
              </Text>
            </div>
            <Img
              src="images/img_group3598.svg"
              className="absolute h-[227px] inset-y-[0] my-auto right-[30%] w-auto"
              alt="group3598"
            />
          </div>
          <div className="flex items-center justify-center self-stretch w-auto md:w-full">
            <div className="md:gap-5 gap-[127px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {new Array(4).fill({}).map((props, index) => (
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
        <div className="font-opensans md:h-[1409px] sm:h-[2589px] h-[741px] mt-[61px] md:px-5 relative w-full">
          <div className="backdrop-opacity-[0.5] bg-pink_300 blur-[164.00px] h-[119px] ml-2.5 mt-[105px] rounded-[59px] w-[119px]"></div>
          <div className="absolute flex flex-col md:gap-10 gap-16 h-full inset-[0] items-center justify-center m-auto max-w-[1440px] overflow-auto w-full">
            <div className="flex flex-col gap-8 h-[178px] md:h-auto items-center justify-center w-full">
              <div className="flex font-opensans items-center justify-center self-stretch w-auto sm:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Our Work Pillars
                </Text>
              </div>
              <Text
                className="capitalize font-inter font-normal max-w-[563px] md:max-w-full not-italic text-center text-gray_600 tracking-[0.20px]"
                variant="body5"
              >
                Gerador de Devs is fostering three standard pillars for easing
                companies through its day to day operations
              </Text>
            </div>
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center min-h-[auto] self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-[22px] h-[273px] md:h-auto items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-end p-[21px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[70px] w-[70px]"
                    alt="clock"
                  />
                </div>
                <div className="flex h-[139px] md:h-auto items-center justify-start w-[330px]">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[255px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    <>Agile methodsin all project&#39;s phases</>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] h-[273px] md:h-auto items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[25px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_call.svg"
                    className="h-[60px] w-[60px]"
                    alt="call"
                  />
                </div>
                <div className="flex items-start justify-center w-full">
                  <Text
                    className="capitalize font-semibold text-center text-white_A700 tracking-[0.20px] w-auto"
                    variant="body5"
                  >
                    Strong partners in related areas
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-center justify-start self-stretch w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[25px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_computer.svg"
                    className="h-[60px] w-[60px]"
                    alt="computer"
                  />
                </div>
                <div className="flex items-start justify-start self-stretch w-auto">
                  <Text
                    className="capitalize font-semibold max-w-[351px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    Applying Best Web Development and Software Technology to All
                    Projects
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] h-[273px] md:h-auto items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[25px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_carboncloudmonitoring.svg"
                    className="h-[60px] w-[60px]"
                    alt="carboncloudmoni"
                  />
                </div>
                <div className="flex h-[139px] md:h-auto items-center justify-start w-[334px]">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[334px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    Your Own Tools for increasing and monitoring your buisness
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-center justify-start self-stretch w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[26px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_calculator.svg"
                    className="h-[60px] w-[60px]"
                    alt="calculator"
                  />
                </div>
                <div className="flex items-center justify-center self-stretch w-auto">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[316px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    Softwares for small, medium and big companies
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-end p-[21px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_file.svg"
                    className="h-[70px] w-[70px]"
                    alt="file"
                  />
                </div>
                <div className="flex items-center justify-center w-[328px]">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[328px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    High Performance APIs,with the best technologies in the
                    market
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] h-[209px] md:h-auto items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[25px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_iconoirdesignnib.svg"
                    className="h-[60px] w-[60px]"
                    alt="iconoirdesignni"
                  />
                </div>
                <div className="flex items-center justify-center self-stretch w-auto">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[306px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    Projects with dedicated UX and UI Design
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] h-[209px] md:h-auto items-center justify-start w-full">
                <div className="bg-pink_A400 flex h-28 items-center justify-start p-[25px] sm:px-5 rounded-[30px] w-28">
                  <Img
                    src="images/img_computer_gray_50.svg"
                    className="h-[60px] w-[60px]"
                    alt="computer"
                  />
                </div>
                <div className="flex items-center justify-center self-stretch w-auto">
                  <Text
                    className="capitalize font-semibold leading-[122.52%] max-w-[306px] md:max-w-full text-center text-white_A700 tracking-[0.20px]"
                    variant="body5"
                  >
                    Web and Mobile Apps with all powerfull and needed resourced
                    for your clients
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-opensans items-center justify-start mt-[119px] w-full">
          <div className="flex flex-col gap-8 items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] py-20 w-full">
            <div className="md:h-[615px] h-[646px] relative w-full">
              <div className="absolute bottom-[0] flex items-center justify-start right-[0] w-[95%]">
                <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                  <div className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center self-stretch w-auto sm:w-full">
                      <Text
                        className="text-left text-white_A700 w-auto"
                        as="h3"
                        variant="h3"
                      >
                        Why Choose Us
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-32 items-center justify-between self-stretch w-auto md:w-full">
                    <div className="flex flex-col gap-[42px] items-start justify-start self-stretch w-auto md:w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="md:h-96 h-[383px] relative w-full">
                          <Img
                            src="images/img_rectangle152.png"
                            className="absolute h-96 inset-[0] justify-center m-auto object-cover w-full"
                            alt="rectangle152"
                          />
                          <div className="absolute bg-pink_A400_64 h-[383px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                      </div>
                      <Text
                        className="capitalize font-semibold max-w-[594px] md:max-w-full text-left text-white_A700 tracking-[0.20px]"
                        variant="body4"
                      >
                        <>
                          Let&#39;s start Innovating using our technologies that
                          will take your business to the next level
                        </>
                      </Text>
                    </div>
                    <List
                      className="flex-col gap-10 grid h-[496px] items-center w-[512px] md:w-full"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row gap-4 h-full items-start justify-start my-0 w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="icbRoundedBorder10"
                          size="mdIcn"
                          variant="icbFillPinkA40033"
                        >
                          <Img
                            src="images/img_avatar.svg"
                            className=""
                            alt="avatar"
                          />
                        </Button>
                        <div className="flex flex-1 flex-col gap-4 h-[117px] md:h-auto items-start justify-start w-full">
                          <div className="flex font-opensans items-start justify-start w-full">
                            <Text
                              className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                              variant="body4"
                            >
                              Security
                            </Text>
                          </div>
                          <Text
                            className="capitalize font-inter font-normal leading-[24.00px] max-w-[446px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                            variant="body7"
                          >
                            Total focus on authentication methods that brings
                            customer data security to its max
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 h-full items-start justify-start my-0 w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="icbRoundedBorder10"
                          size="mdIcn"
                          variant="icbFillPinkA40033"
                        >
                          <Img
                            src="images/img_dashboard.svg"
                            className=""
                            alt="dashboard"
                          />
                        </Button>
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <div className="flex font-opensans items-start justify-start w-full">
                            <Text
                              className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                              variant="body4"
                            >
                              Performance
                            </Text>
                          </div>
                          <Text
                            className="capitalize font-inter font-normal leading-[24.00px] max-w-[446px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                            variant="body7"
                          >
                            Customized solutions for any needs with total
                            agility and acurracy while usingon latest web
                            technology in projects for best performance
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 h-full items-start justify-start my-0 w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="icbRoundedBorder10"
                          size="mdIcn"
                          variant="icbFillPinkA40033"
                        >
                          <Img
                            src="images/img_settings.svg"
                            className="h-8"
                            alt="settings"
                          />
                        </Button>
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <div className="flex font-opensans items-start justify-start w-full">
                            <Text
                              className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                              variant="body4"
                            >
                              Acurracy
                            </Text>
                          </div>
                          <Text
                            className="capitalize font-inter font-normal leading-[24.00px] max-w-[446px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                            variant="body7"
                          >
                            We are accurate on delivering projects according to
                            projected schedules
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 h-full items-start justify-start my-0 w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center w-[50px]"
                          shape="icbRoundedBorder10"
                          size="mdIcn"
                          variant="icbFillPinkA40033"
                        >
                          <Img
                            src="images/img_twitter.svg"
                            className="h-[33px]"
                            alt="twitter"
                          />
                        </Button>
                        <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                          <div className="flex font-opensans items-start justify-start w-full">
                            <Text
                              className="capitalize font-semibold text-left text-white_A700 tracking-[0.20px] w-auto"
                              variant="body4"
                            >
                              Customer Service 24/7
                            </Text>
                          </div>
                          <Text
                            className="capitalize font-inter font-normal leading-[24.00px] max-w-[446px] md:max-w-full not-italic text-gray_600 text-left tracking-[0.20px]"
                            variant="body7"
                          >
                            24/7 Customer Service Our operations team is located
                            around the clock To Help You and Answer Your
                            inquiries
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group3596.svg"
                className="absolute h-[248px] right-[27%] top-[0] w-auto"
                alt="group3596"
              />
              <div className="absolute backdrop-opacity-[0.5] bg-pink_300 blur-[164.00px] h-[119px] left-[0] rounded-[59px] top-[28%] w-[119px]"></div>
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
        <div className="font-opensans sm:h-[10286px] md:h-[1346px] h-[1704px] mt-[186px] md:px-5 relative w-full">
          <div className="absolute sm:h-[10100px] md:h-[1160px] h-[1360px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="sm:h-[10100px] md:h-[1160px] h-[1360px] my-auto overflow-auto w-full">
              <List
                className="absolute sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-9 grid-cols-[repeat(17,minmax(0,1fr))] justify-center max-w-[7690px] right-[0] top-[22%] w-full"
                orientation="horizontal"
              >
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Gerlanio Nogueira
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      PO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_564x422.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Filipe Chiconello
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Dev Backend
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_1.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Gabriel Soares
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Líder de PO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_2.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Gabriela Santos
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      UX
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_3.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Claudio Batista
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Dev Android
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_4.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Tabata Souza
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Scrum Master
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_5.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Giuliano Massarelli{" "}
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Dev Backend
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_6.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-3.5 w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Mário Henrique
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[50px] mt-1 text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Dev Backend
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_7.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto p-3 w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Renato Naumann
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[52px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_8.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[7px] inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Ivonir Neto
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[52px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      CTO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_9.png"
                    className="absolute h-[564px] inset-[0] justify-center m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Mohamed Emara
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      CSO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_10.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Vinicius Martins{" "}
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      QA
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_11.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Laryssa Moreno{" "}
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Dev Frontend _ UX
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_12.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Dennys Cattani
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Analista de Cloud
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_13.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Leticia Moreno{" "}
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      COO
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_14.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Emanuelly Mathias
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      {" "}
                      Scrum Master
                    </Text>
                  </div>
                </div>
                <div className="h-[564px] relative w-full">
                  <Img
                    src="images/img_rectangle153_15.png"
                    className="h-[564px] m-auto object-cover w-full"
                    alt="rectangle153"
                  />
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-[11px] w-full">
                    <Text
                      className="capitalize font-bold text-black_900 text-center tracking-[0.20px] w-auto"
                      variant="body4"
                    >
                      Eduardo Cerato
                    </Text>
                    <Text
                      className="capitalize font-bold mb-[54px] text-center text-pink_A400 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      Tech Lead Word Press
                    </Text>
                  </div>
                </div>
              </List>
              <div className="absolute flex flex-col md:gap-10 gap-[467px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[32%] md:w-full">
                <div className="h-[339px] relative w-full">
                  <div className="h-[339px] m-auto w-full">
                    <div className="h-[339px] m-auto w-full">
                      <Img
                        src="images/img_ellipse19.png"
                        className="h-[339px] m-auto object-cover w-full"
                        alt="ellipseNineteen"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-left text-white_A700 w-max"
                        as="h3"
                        variant="h3"
                      >
                        Our Awesome Team
                      </Text>
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-pink_A400_4c blur-[164.00px] bottom-[18%] h-[162px] right-1/4 rounded-[50%] w-[162px]"></div>
                  </div>
                  <Img
                    src="images/img_group3597.svg"
                    className="absolute bottom-[5%] h-[168px] right-[28%] w-auto"
                    alt="group3597"
                  />
                </div>
                <Img
                  src="images/img_ellipse20.png"
                  className="h-[553px] sm:h-auto object-cover w-full"
                  alt="ellipseTwenty"
                />
              </div>
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-pink_300 blur-[164.00px] bottom-[35%] h-[119px] left-[3%] rounded-[59px] w-[119px]"></div>
          </div>
          <div className="absolute bottom-[0] md:h-[1094px] h-[698px] inset-x-[0] mx-auto w-[93%] md:w-full">
            <Img
              src="images/img_group3594.png"
              className="absolute h-[698px] inset-y-[0] my-auto object-cover right-[0] w-auto"
              alt="group3594"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-10 gap-28 h-max inset-[0] items-center justify-center m-auto md:px-10 px-16 sm:px-5 py-20 self-stretch w-auto">
              <div className="flex flex-col gap-[50px] items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto sm:w-full">
                  <Text
                    className="font-opensans max-w-[491px] md:max-w-full text-left text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    Ready for your project?
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
              <div className="flex items-center justify-start w-1/2 md:w-full">
                <Img
                  src="images/img_image_495x590.png"
                  className="h-[495px] md:h-auto object-cover rounded-[20px] w-full"
                  alt="image_FortyNine"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-opensans md:h-[912px] h-[917px] max-w-[1269px] mt-[88px] mx-auto md:px-5 relative w-full">
          <Text
            className="absolute left-[0] text-left text-white_A700 top-[0] w-[39%] sm:w-full"
            as="h3"
            variant="h3"
          ></Text>
          <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
              <List
                className="flex-col gap-[51px] grid items-center w-full"
                orientation="vertical"
              >
                <div className="flex h-[394px] justify-end my-0 relative w-full">
                  <div className="flex flex-col h-full items-start justify-start mb-[19px] mt-auto w-[47%]">
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
                  <div className="absolute flex flex-col gap-[30px] h-full inset-[0] items-end justify-center m-auto w-full">
                    <Text
                      className="font-normal leading-[38.00px] text-bluegray_100 text-left w-full"
                      variant="body3"
                    >
                      We offer exceptional services tailored to a wide range of
                      businesses that want to improve the effectiveness of their
                      digital marketing activities with discernible returns on
                      investment. We aim to get back to all enquiries rapidly.
                    </Text>
                    <div className="flex items-center justify-start w-[44%] md:w-full">
                      <Img
                        src="images/img_rectangle5370.png"
                        className="h-[250px] md:h-auto object-cover w-full"
                        alt="rectangle5370"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mr-0.5 my-0 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
                    <Text
                      className="font-normal text-bluegray_300 text-left w-auto"
                      variant="body7"
                    >
                      March 22, 2023
                    </Text>
                    <Text
                      className="font-semibold leading-[38.00px] mt-[18px] text-bluegray_100 text-left w-full"
                      variant="body3"
                    >
                      Your Guide to Awesome Automated Marketing Campaigns
                    </Text>
                    <HomeScreenColumnOne
                      className="flex flex-col font-poppins items-center justify-start mt-4 w-auto md:w-full"
                      readmore="Read More"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 h-[250px] items-center justify-start w-[44%] md:w-full"
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
        </div>
        <Footer className="bg-black_901 flex items-center justify-center mt-40 md:px-5 px-[120px] py-8 self-stretch w-full" />
      </div>
    </>
  );
};

export default HomeScreenPage;
