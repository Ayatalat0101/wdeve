import React from "react";

import Header from "components/Header";
import { Img, Text, Line, Button, List } from "components";
import HeadHuntingPageColumnrectangle5379 from "components/HeadHuntingPageColumnrectangle5379";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import WebDevPageColumn from "components/WebDevPageColumn";
import HomeScreenColumn from "components/HomeScreenColumn";
import OutsourcingPageRowsignal from "components/OutsourcingPageRowsignal";
import WebDevPageColumnartboardtwentyoneOne from "components/WebDevPageColumnartboardtwentyoneOne";
import { useNavigate } from "react-router-dom";

const WebdevpagePage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate15() {
    window.location.href = "https://twitter.com/login/";
  }

  const webDevPageColumnPropList = [
    { clientbrief: " Client Brief", one: "01" },
    { clientbrief: "Analytics and Prototyping", one: "02" },
    { clientbrief: "Design", one: "03" },
    { clientbrief: "Launching and Support", one: "04" },
  ];
  const webDevPageColumnPropList1 = [
    { clientbrief: "High Standard", one: "01" },
    { clientbrief: "Focus on People", one: "02" },
    { clientbrief: "Different Thinking", one: "03" },
    { clientbrief: "Business Innovation", one: "04" },
  ];

  return (
    <>
      <div className="bg-black_900 flex flex-col font-opensans items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="h-[1476px] md:h-[893px] md:px-5 relative w-full">
            <div className="absolute h-[1384px] md:h-[893px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute h-[1101px] md:h-[893px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  src="images/img_whatsappimage20230330.png"
                  className="absolute h-[893px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  alt="whatsappimageTwenty"
                />
                <div className="absolute bg-pink_A400_b2 bottom-[0] flex h-[714px] md:h-auto inset-x-[0] items-end justify-start mx-auto p-[231px] md:px-10 sm:px-5 rounded-[50%] w-[714px]">
                  <div className="flex flex-col gap-1.5 items-end justify-start mb-24 mr-[101px] w-[5%] md:w-full">
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
              <div className="absolute bg-black_900 bottom-[0] flex flex-col md:gap-10 gap-[175px] inset-x-[0] items-center justify-start mx-auto p-[87px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start w-[59%] md:w-full">
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
                <div className="flex flex-col gap-1.5 justify-start mb-[27px] w-[23%] md:w-full">
                  <Text
                    className="capitalize font-semibold mr-[37px] text-left text-white_A700 w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Our services
                  </Text>
                  <Line className="bg-white_A700 h-[3px] md:ml-[0] ml-[58px] w-[79%]" />
                </div>
              </div>
            </div>
            <Img
              src="images/img_ellipse6_196x83.png"
              className="absolute h-[196px] left-[0] object-cover top-[2%] w-[6%]"
              alt="ellipseSix"
            />
            <div className="absolute backdrop-opacity-[0.5] bg-purple_A200_7f blur-[164.00px] bottom-[44%] h-[119px] right-[1%] rounded-[59px] w-[119px]"></div>
            <HeadHuntingPageColumnrectangle5379
              className="absolute bottom-[19%] flex flex-col items-center justify-start left-[0] w-auto sm:w-full"
              pattern141="images/img_pattern141_567x306.png"
            />
            <Img
              src="images/img_group_gray_905.svg"
              className="absolute bottom-[0] h-[426px] right-[4%] w-auto"
              alt="group"
            />
            <Text
              className="absolute bottom-[5%] capitalize font-bold left-[11%] text-left text-white_A700 w-[47%] sm:w-full"
              as="h5"
              variant="h5"
            ></Text>
            <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[19%] w-auto">
              <Text
                className="font-gopher mr-[250px] text-left text-white_A700 w-auto"
                as="h1"
                variant="h1"
              >
                Web and Software
              </Text>
              <Text
                className="font-gopher md:ml-[0] ml-[362px] mt-1.5 text-left text-white_A700 w-auto"
                as="h1"
                variant="h1"
              >
                Development
              </Text>
              <Text
                className="font-opensans font-semibold md:ml-[0] ml-[765px] mt-[13px] text-left text-white_A700 w-[32%] sm:w-full"
                variant="body6"
              >
                With every single one of our clients, we bring forth a deep
                passion for creative problem solving
              </Text>
            </div>
          </div>
          <div className="sm:h-[1036px] md:h-[1602px] h-[2168px] mt-[15px] md:px-5 relative w-full">
            <OutsourcingPageColumnellipse165
              className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-auto sm:w-full"
              patterneleven="images/img_pattern11_616x263.png"
            />
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 gap-16 inset-x-[0] items-center justify-start max-w-[1439px] mx-auto w-full">
              <div className="h-[783px] relative w-[53%] md:w-full">
                <Img
                  src="images/img_rectangle152_783x761.png"
                  className="absolute h-[783px] inset-[0] justify-center m-auto object-cover w-full"
                  alt="rectangle152"
                />
                <div className="absolute bg-pink_A400_64 h-[782px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
                <div className="flex flex-col gap-[5px] justify-start w-[35%] md:w-full">
                  <Text
                    className="capitalize font-semibold mr-[25px] text-left text-white_A700 w-auto"
                    variant="body4"
                  >
                    How we Work
                  </Text>
                  <Line className="bg-white_A700 h-[3px] md:ml-[0] ml-[26px] w-[86%]" />
                </div>
                <div className="flex items-center justify-center self-stretch w-auto sm:w-full">
                  <Text
                    className="font-bold max-w-[543px] md:max-w-full text-left text-white_A700"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="flex items-end justify-center self-stretch w-auto sm:w-full">
                  <List
                    className="flex-col gap-8 grid items-center w-full"
                    orientation="vertical"
                  >
                    {webDevPageColumnPropList.map((props, index) => (
                      <React.Fragment key={`WebDevPageColumn${index}`}>
                        <WebDevPageColumn
                          className="flex flex-1 flex-col items-center justify-end pr-1 py-1 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute flex font-poppins inset-x-[0] items-center justify-start mx-auto top-[0] w-[81%]">
              <div className="flex items-center justify-start w-full">
                <div className="md:gap-5 gap-[157px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        01
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter items-start justify-start w-auto md:w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        UI /UX Experiences
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] mt-1 not-italic text-left text-white_A700 tracking-[0.20px] w-full"
                        variant="body6"
                      >
                        <>
                          Using our expertise, as well as our exceptional
                          experience in UI/UX design services, we help you show
                          off your brand&#39;s finest and exceed user
                          expectations. direct impact on today&#39;s digital
                          landscape.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        02
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter items-start justify-start w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        Web development
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] mt-[3px] not-italic text-left text-white_A700 tracking-[0.20px] w-full"
                        variant="body6"
                      >
                        At Gerador de Devs, we’ve been delivering exceptional
                        eCommerce, Web Development, Mobile App Development, CRM
                        development, and Creative Design services for hundreds
                        of clients from around the globe
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        03
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter items-start justify-start w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        Software Development
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] mt-1 not-italic text-left text-white_A700 tracking-[0.20px] w-full"
                        variant="body6"
                      >
                        Software Applications are our specialty. Our goal is to
                        learn your needs, and increase your team’s efficiency. A
                        good enterprise software solution should be more than a
                        condensed version of your business, it needs to load
                        like lightning and look like a work of art which is why
                        entrepreneurs flock to Gerador de Devs Software
                        Developers
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        04
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter gap-[7px] items-start justify-start w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        software and web solutions
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] not-italic text-left text-white_A700 tracking-[0.20px] w-[94%] sm:w-full"
                        variant="body6"
                      >
                        We get it, to switch to fully customized software has
                        its own set of risks, but you need it now and when you
                        go with GD, we guarantee your business will flourish in
                        ways you never thought possible. We build anything from
                        Apps to ERP.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        05
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter gap-[15px] items-start justify-start w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        Branding and Illustration
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] not-italic text-left text-white_A700 tracking-[0.20px] w-full"
                        variant="body6"
                      >
                        At Gerador de Devs, We deliver brand strategies you can
                        grow on, create complete brand identities that thrive in
                        an omnichannel world, and set the tone for ongoing and
                        compelling customer engagements.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[27px] items-start justify-start w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h5"
                        variant="h5"
                      >
                        06
                      </Text>
                      <Line className="bg-white_A700 h-[3px] w-full" />
                    </div>
                    <div className="flex flex-col font-inter gap-[15px] items-start justify-start w-auto md:w-full">
                      <Text
                        className="capitalize font-semibold text-left text-pink_A400 tracking-[0.20px] w-auto"
                        variant="body1"
                      >
                        Product Design
                      </Text>
                      <Text
                        className="capitalize font-normal leading-[24.00px] not-italic text-left text-white_A700 tracking-[0.20px] w-full"
                        variant="body6"
                      >
                        We offer a wide range of digital products design
                        services to help your business create impactful digital
                        products and with your users in mind. We work as part of
                        your product team from an idea to the release
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[98px] justify-start max-w-[1353px] mt-[106px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start ml-14 md:ml-[0] w-auto md:w-full">
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
            <div className="md:h-[900px] h-[947px] relative w-full">
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
          </div>
          <div className="flex font-inter items-center justify-start mt-[245px] w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-center max-w-[1439px] md:px-10 sm:px-5 px-[120px] py-20 w-full">
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
                  className="capitalize font-inter font-normal max-w-[494px] md:max-w-full not-italic text-center text-gray_600 tracking-[0.20px]"
                  variant="body5"
                >
                  We bring your ideas to life by designing impactful digital
                  products that people love to use.
                </Text>
              </div>
              <div className="flex items-center justify-start max-w-[1197px] mx-auto self-stretch w-full">
                <div
                  className="common-pointer md:gap-5 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full"
                  onClick={() => navigate("/projectspage")}
                >
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
          <div className="font-opensans md:h-[1641px] h-[2067px] mt-[99px] md:px-5 relative w-full">
            <Img
              src="images/img_component39_pink_a400.png"
              className="absolute h-[565px] object-cover right-[0] top-[0] w-auto"
              alt="componentThirtyNine"
            />
            <div className="absolute flex items-center justify-start left-[5%] top-[11%] w-auto">
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
                      alt="image_Fourteen"
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
                          We provide websites that are clearly designed and
                          ready to view on any sort of device in any screen
                          orientation.
                          <br />
                          Although our eCommerce service means that your
                          company’s branding, logo and preferred colour scheme
                          will always be on view, the transactional part of the
                          process will be standardised to an extent.
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
                          results for your business, regardless of your
                          industry. We provide idea validation and pre-market
                          testing services to reduce risks and build a product
                          or service to perfectly meets your needs
                        </Text>
                      </div>
                      <Img
                        src="images/img_image_3.png"
                        className="h-[369px] sm:h-auto max-w-[635px] object-cover w-[635px] md:w-full"
                        alt="image_Fifteen"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-8 items-center justify-center py-4 self-stretch w-auto md:w-full">
                      <Img
                        src="images/img_image_4.png"
                        className="h-[369px] sm:h-auto max-w-[635px] object-cover w-[635px] md:w-full"
                        alt="image_Sixteen"
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
                            processes. We provide enterprise software
                            development services in every business domains and
                            tech sector.
                            <br />
                            Although, we never skip integrating our security
                            high standars in your project to ensure seamless
                            project flow without anty interruption
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between max-w-[1439px] mt-[246px] md:pl-10 sm:pl-5 pl-[120px] w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start self-stretch w-auto sm:w-full">
              <div className="flex flex-col gap-[5px] justify-start w-[33%] md:w-full">
                <Text
                  className="capitalize font-semibold mr-[25px] text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  How we Work
                </Text>
                <Line className="bg-white_A700 h-[3px] md:ml-[0] ml-[26px] w-[86%]" />
              </div>
              <div className="flex items-center justify-center self-stretch w-auto sm:w-full">
                <Text
                  className="font-bold max-w-[584px] md:max-w-full text-left text-white_A700"
                  as="h5"
                  variant="h5"
                ></Text>
              </div>
              <List
                className="flex-col gap-8 grid items-end self-stretch w-auto sm:w-full"
                orientation="vertical"
              >
                {webDevPageColumnPropList1.map((props, index) => (
                  <React.Fragment key={`WebDevPageColumn${index}`}>
                    <WebDevPageColumn
                      className="flex flex-col items-center justify-end my-0 pr-1 py-1 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="h-[783px] relative w-[53%] md:w-full">
              <Img
                src="images/img_rectangle152_783x694.png"
                className="absolute h-[783px] inset-[0] justify-center m-auto object-cover w-full"
                alt="rectangle152_One"
              />
              <div className="absolute bg-pink_A400_64 h-[782px] inset-[0] justify-center m-auto w-full"></div>
            </div>
          </div>
        </div>
        <div className="flex font-gopher items-end mt-56 md:pl-10 sm:pl-5 pl-[148px] w-full">
          <div className="h-[1003px] md:h-[825px] relative w-full">
            <Img
              src="images/img_component40.png"
              className="absolute bottom-[0] h-[820px] object-cover right-[0] w-auto"
              alt="componentForty"
            />
            <div className="absolute flex items-center justify-start left-[0] top-[0] w-[91%]">
              <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[22px] items-start justify-center w-3/4 md:w-full">
                  <Text
                    className="md:mt-0 mt-[18px] text-left text-white_A700 w-auto"
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
                <OutsourcingPageRowsignal
                  className="flex flex-row font-opensans items-center justify-between self-stretch w-auto md:w-full"
                  savetimemanagin="The Right Place to Finde an Amazing Team!"
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
        <div className="flex flex-col font-opensans md:gap-10 gap-[179px] items-center mt-[63px] w-full">
          <div className="md:h-[1172px] sm:h-[676px] h-[677px] md:px-5 relative w-full">
            <Img
              src="images/img_ellipse13_3.png"
              className="absolute h-[676px] inset-y-[0] my-auto object-cover right-[0] w-[46%]"
              alt="ellipseThirteen"
            />
            <div className="absolute md:h-[1172px] h-[626px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
              <Img
                src="images/img_group3604.png"
                className="absolute h-[626px] inset-y-[0] my-auto object-cover right-[4%] w-auto"
                alt="group3594"
              />
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full">
                <Img
                  src="images/img_ellipse13_4.png"
                  className="md:flex-1 h-[119px] sm:h-auto md:mt-0 mt-[74px] object-cover w-[5%] md:w-full"
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
                  <div className="flex items-center justify-start w-[53%] md:w-full">
                    <Img
                      src="images/img_image_5.png"
                      className="h-[434px] md:h-auto object-cover rounded-[20px] w-full"
                      alt="image_TwentyTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="md:h-[680px] h-[994px] relative w-full">
              <OutsourcingPageColumnellipse165
                className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-auto sm:w-full"
                patterneleven="images/img_pattern11_1.png"
              />
              <div className="absolute bg-black_901 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-auto">
                <div className="flex flex-col gap-[47px] items-center justify-center max-w-[1200px] w-full">
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start self-stretch w-auto sm:w-full">
                      <WebDevPageColumnartboardtwentyoneOne className="flex flex-col items-center justify-start w-auto md:w-full" />
                      <Text
                        className="font-medium max-w-[426px] md:max-w-full text-left text-white_A700"
                        variant="body1"
                      ></Text>
                    </div>
                    <div className="flex md:flex-1 flex-col font-opensans gap-[13px] items-start justify-start w-[24%] md:w-full">
                      <Text
                        className="font-bold text-left text-white_A700 w-auto"
                        variant="body7"
                      >
                        Contact information
                      </Text>
                      <div className="flex flex-col font-inter gap-2 items-start justify-start self-stretch w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_mail_gray_50.svg"
                            className="h-6 w-6"
                            alt="mail"
                          />
                          <div className="flex items-center justify-start w-[89%]">
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
                                variant="body8"
                              ></Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_call_gray_50.svg"
                            className="h-6 w-6"
                            alt="call"
                          />
                          <div className="flex items-start justify-start w-[89%]">
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-medium text-left text-white_A700 w-auto"
                                variant="body8"
                              >
                                (11) 9 1556-7873
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8 h-16 md:h-auto items-center justify-center w-[352px]">
                      <Img
                        src="images/img_twitter_blue_500.svg"
                        className="common-pointer h-12 rounded-[50%] w-12"
                        onClick={handleNavigate15}
                        alt="twitter"
                      />
                      <Img
                        src="images/img_facebook.svg"
                        className="common-pointer h-12 w-12"
                        onClick={handleNavigate5}
                        alt="facebook"
                      />
                      <Img
                        src="images/img_group.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="group_One"
                      />
                      <Button
                        className="flex h-12 items-center justify-center rounded-[50%] w-12"
                        size="smIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_mail_pink_a400.svg"
                          className="h-[31px]"
                          alt="mail_One"
                        />
                      </Button>
                    </div>
                  </div>
                  <Line className="bg-white_A700_5f h-px outline outline-[0.5px] outline-white_A700_5f w-full" />
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1142px] w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start self-stretch w-auto md:w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start self-stretch w-auto">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Our Services
                        </Text>
                        <div className="flex flex-col gap-[13px] items-start justify-start self-stretch w-auto">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Software and Web Development
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Digital Marketing
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Outsourcing
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Head Hunting
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[159px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Company
                        </Text>
                        <div className="flex flex-col gap-3 h-[115px] md:h-auto items-start justify-start w-[159px]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            About US
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Our Mission
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700_99 w-auto"
                            variant="body7"
                          >
                            Our Vision
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex flex-col gap-8 items-start justify-start self-stretch w-auto">
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            Join Us
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            Contact Information
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            About US
                          </Text>
                          <Text
                            className="font-bold text-left text-white_A700 w-auto"
                            variant="body7"
                          >
                            Privacy Policy
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-pink_A400 flex sm:flex-1 items-start justify-start md:px-10 sm:px-5 px-[42px] py-[30px] w-[435px] sm:w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-[369px]">
                        <Text
                          className="font-bold text-left text-white_A700 w-auto"
                          variant="body7"
                        >
                          Subscribe
                        </Text>
                        <div className="bg-white_A700 border border-bluegray_101 border-solid flex flex-row gap-14 items-center justify-start pl-[15px] rounded-[20px] w-[345px]">
                          <Text
                            className="flex-1 font-normal not-italic text-gray_800_90 text-left w-auto"
                            variant="body8"
                          >
                            Email address
                          </Text>
                          <div className="bg-black_900 flex items-center justify-center p-[13px] rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md w-[50px]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-6 w-6"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                        <Text
                          className="leading-[20.00px] max-w-[345px] md:max-w-full not-italic text-left text-white_A700_99"
                          variant="body10"
                        >
                          Lorem ipsum dolor sit amet et delectus accommodare his
                          consul copiosae legendos at vix ad putent delectus
                          delicata usu. Vidit dissentiet eos cu eum an
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-white_A700_5f h-px outline outline-[0.5px] outline-white_A700_5f w-full" />
                  <Text
                    className="font-normal font-opensans text-center text-white_A700 w-auto"
                    variant="body8"
                  >
                    Copyright © 2023 - Todos os direitos reservados - É proibida
                    a reprodução total ou parcial
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default WebdevpagePage;
