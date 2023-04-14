import React from "react";

import AboutUsPageHeaderartboardtwentyone from "components/AboutUsPageHeaderartboardtwentyone";
import { Img, Text, Line, List, Button, Input, TextArea } from "components";
import OutsourcingPageColumnellipse165 from "components/OutsourcingPageColumnellipse165";
import WebDevPageColumnartboardtwentyoneOne from "components/WebDevPageColumnartboardtwentyoneOne";

const AboutUspagePage = () => {
  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate9() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-black_900 flex font-opensans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <AboutUsPageHeaderartboardtwentyone className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[1108px] h-[1388px] sm:h-[893px] mx-auto w-full">
              <div className="absolute md:h-[1108px] h-[1388px] sm:h-[893px] inset-[0] justify-center m-auto w-full">
                <div className="absolute h-[1211px] md:h-[893px] inset-x-[0] mx-auto top-[0] w-full">
                  <Img
                    src="images/img_whatsappimage20230330_1.png"
                    className="absolute h-[893px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    alt="whatsappimageTwenty"
                  />
                  <div className="absolute bg-pink_A400_a3 bottom-[0] flex flex-col gap-[34px] h-[811px] md:h-auto inset-x-[0] items-center justify-start mx-auto p-[13px] rounded-[405px] w-[811px]">
                    <Text
                      className="text-left text-white_A700 w-auto"
                      variant="body9"
                    >
                      About Us
                    </Text>
                    <div className="flex flex-col gap-1.5 items-end justify-start mb-[419px] w-[2%] md:w-full">
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
                <div className="absolute bg-black_900 bottom-[0] flex md:flex-col flex-row gap-11 inset-x-[0] items-start justify-start mx-auto p-9 sm:px-5 w-full">
                  <div className="flex md:flex-1 items-center justify-start mb-[321px] md:ml-[0] ml-[76px] w-auto md:w-full">
                    <Text
                      className="capitalize font-semibold text-justify text-white_A700 w-full"
                      variant="body4"
                    >
                      Gerador de Devs helped global businesses just like yours
                      for over 5 years succeed with custom web and software
                      development, graphic design, marketing and outsourcing
                      services. Our company relies on a proven dedicated team
                      model to help you grow, and our R&D lab means you get the
                      latest technology and smart ideas to drive your business.
                    </Text>
                  </div>
                  <div className="bg-pink_A400 flex md:flex-1 items-center justify-start mb-[329px] md:mt-0 mt-[79px] p-[18px] shadow-bs4 w-1/5 md:w-full">
                    <div className="flex flex-col items-center justify-start mb-[5px] w-auto md:w-full">
                      <Text
                        className="capitalize font-bold text-center text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        100+
                      </Text>
                      <Text
                        className="capitalize font-bold text-center text-white_A700 w-auto"
                        variant="body4"
                      >
                        collaborators
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_ellipse6_7.png"
                className="absolute h-[196px] left-[0] object-cover top-[2%] w-[6%]"
                alt="ellipseSix"
              />
              <Img
                src="images/img_ellipse7_339x172.png"
                className="absolute bottom-[32%] h-[339px] object-cover right-[0] w-[12%]"
                alt="ellipseSeven"
              />
            </div>
            <div className="flex flex-col gap-[27px] items-end justify-start mb-[575px] ml-auto mr-14 mt-[-NaNpx] w-[39%] z-[1]">
              <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                <div className="bg-pink_A400 flex sm:flex-1 items-center justify-start p-[18px] shadow-bs4 w-[48%] sm:w-full">
                  <div className="flex flex-col items-center justify-start mb-0.5 w-auto md:w-full">
                    <Text
                      className="capitalize font-bold text-center text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      40+
                    </Text>
                    <Text
                      className="capitalize font-bold text-center text-white_A700 w-auto"
                      variant="body4"
                    >
                      projects
                    </Text>
                  </div>
                </div>
                <div className="bg-pink_A400 flex sm:flex-1 items-center justify-start p-[11px] shadow-bs4 w-[48%] sm:w-full">
                  <div className="flex flex-col items-center justify-start mb-3 mt-[7px] w-auto md:w-full">
                    <Text
                      className="capitalize font-bold text-center text-white_A700 w-auto"
                      as="h6"
                      variant="h6"
                    >
                      05+
                    </Text>
                    <Text
                      className="capitalize font-bold text-center text-white_A700 w-auto"
                      variant="body4"
                    >
                      years in the market
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-pink_A400 flex items-center justify-start p-[15px] shadow-bs4 w-[48%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-2 mt-0.5 w-auto md:w-full">
                  <Text
                    className="capitalize font-bold text-center text-white_A700 w-auto"
                    as="h6"
                    variant="h6"
                  >
                    5
                  </Text>
                  <Text
                    className="capitalize font-bold text-center text-white_A700 w-auto"
                    variant="body4"
                  >
                    different countries
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[63px] justify-start mt-[-97.43px] mx-auto w-full z-[1]">
              <Text
                className="capitalize md:ml-[0] ml-[476px] text-left text-white_A700 w-auto"
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
          </div>
          <div className="flex flex-col gap-[41px] items-center justify-start max-w-[1354px] mt-[267px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            ></Text>
            <Text
              className="capitalize font-semibold text-center text-white_A700"
              variant="body4"
            >
              <>
                As a software development company, our mission is to create the
                conditions for solving our customers&#39; business challenges,
                regardless of frontiers and distances, by providing the demanded
                products and top-notch service.
                <br />
                <br />
                As a global web and software development and marketing company,
                we will promote our clients’ innovative products, create jobs
                for the talented minds, and open foreign offices to boost
                interaction.
              </>
            </Text>
          </div>
          <Text
            className="capitalize mt-[66px] text-left text-white_A700 w-auto"
            as="h3"
            variant="h3"
          ></Text>
          <List
            className="sm:flex-col flex-row font-gopher md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1310px] mt-[66px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-start md:ml-[0] ml-[45px] mr-[59px] p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_lockprotectse.svg"
                  className="h-[120px] w-[120px]"
                  alt="lockprotectse"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-full"
                variant="body5"
              >
                Security Total focus on authentication methods that brings
                customer data security to its max
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-end ml-11 md:ml-[0] mr-[60px] p-7 sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_performanceinq.svg"
                  className="h-[120px] w-[120px]"
                  alt="performanceinq"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-full"
                variant="body5"
              >
                Applying latest technology while suing customized unique design
                in each project
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-end md:ml-[0] ml-[45px] mr-[59px] p-7 sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_accuracyaimco.svg"
                  className="h-[120px] w-[120px]"
                  alt="accuracyaimco"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-full"
                variant="body5"
              >
                Performance Customized solutions for any needs with total
                agility and accuracy
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-start md:ml-[0] ml-[29px] mr-[45px] p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_mdisupport_pink_a400.svg"
                  className="h-[120px] w-[120px]"
                  alt="mdisupport"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-full"
                variant="body5"
              >
                Customer Services 24/7 operations Our team is located around the
                world
              </Text>
            </div>
          </List>
          <div className="font-opensans h-[619px] md:h-[795px] max-w-[1341px] mt-[207px] mx-auto md:px-5 relative w-full">
            <Img
              src="images/img_component50.svg"
              className="absolute h-[588px] right-[0] top-[0] w-auto"
              alt="componentFifty"
            />
            <div className="absolute bottom-[0] flex flex-col justify-start left-[0] w-[39%]">
              <div className="flex items-center justify-start w-auto md:w-full">
                <Text
                  className="capitalize font-bold text-left text-white_A700 w-full"
                  as="h5"
                  variant="h5"
                ></Text>
              </div>
              <div className="flex items-center justify-start ml-5 md:ml-[0] w-auto md:w-full">
                <Text
                  className="capitalize font-normal leading-[161.18%] text-left text-white_A700 tracking-[0.20px]"
                  variant="body5"
                >
                  <>
                    Companies that need to innovate
                    <br />
                    Enterprises undergoing digital transformation
                    <br />
                    Financial institutions
                    <br />
                    Non-profit and government organizations
                    <br />
                    IT solutions providers and software vendors
                    <br />
                    Software product companies
                    <br />
                    Govermental institutions
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-opensans gap-[34px] items-center justify-start max-w-[1079px] mt-[102px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize text-left text-white_A700 w-auto"
              as="h3"
              variant="h3"
            ></Text>
            <Text
              className="capitalize font-semibold text-center text-white_A700 w-full"
              variant="body4"
            >
              <>
                With Gerador de Devs deep expertise, we’ve partnered with top
                corporations in every industry to boost their business with
                custom solutions in web and software development, marketing ,
                graphic design and IT sector&#39;s outsourcing and we bring that
                in-depth industry knowledge to bear on every project, no matter
                how big or small.
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-gopher md:gap-10 items-center justify-between max-w-[1271px] mt-[97px] mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[163px] grid sm:grid-cols-1 grid-cols-2 w-[41%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[51px] justify-start w-full">
                <div className="bg-pink_A400_33 flex h-[178px] items-center justify-end p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                  <Img
                    src="images/img_financemarktin.svg"
                    className="h-[120px] w-[120px]"
                    alt="financemarktin"
                  />
                </div>
                <Text
                  className="capitalize font-medium md:ml-[0] ml-[37px] text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  fintech
                </Text>
              </div>
              <div className="flex flex-col gap-[51px] justify-start w-full">
                <div className="bg-pink_A400_33 flex h-[178px] items-center justify-end p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                  <Img
                    src="images/img_retailapisvgrepocom.svg"
                    className="h-[120px] w-[120px]"
                    alt="retailapisvgrep"
                  />
                </div>
                <Text
                  className="capitalize font-medium md:ml-[0] ml-[52px] text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Retail
                </Text>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col gap-[51px] justify-start w-[15%] md:w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-end mr-[5px] p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_healthcarehosp.svg"
                  className="h-[120px] w-[120px]"
                  alt="healthcarehosp"
                />
              </div>
              <Text
                className="capitalize font-medium ml-2 md:ml-[0] text-center text-white_A700 w-auto"
                variant="body2"
              >
                healthcare
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[54px] justify-start w-[17%] md:w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-start md:ml-[0] ml-[11px] mr-6 p-7 sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_mdicompany.svg"
                  className="h-[120px] w-[120px]"
                  alt="mdicompany"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-auto"
                variant="body2"
              >
                IT companies
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-gopher sm:gap-10 gap-[139px] items-center justify-center mt-[53px] md:px-5 w-[41%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start sm:mt-0 mt-[9px] w-[35%] sm:w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-start ml-1 md:ml-[0] p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_govermentbuild.svg"
                  className="h-[120px] w-[120px]"
                  alt="govermentbuild"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700"
                variant="body2"
              >
                <>
                  Govermental
                  <br />
                  sector
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-8 justify-start mb-[9px] w-[43%] sm:w-full">
              <div className="bg-pink_A400_33 flex h-[178px] items-center justify-start ml-7 md:ml-[0] mr-[41px] p-[29px] sm:px-5 rounded-[30px] w-[178px]">
                <Img
                  src="images/img_publictranspor.svg"
                  className="h-[120px] w-[120px]"
                  alt="publictranspor"
                />
              </div>
              <Text
                className="capitalize font-medium text-center text-white_A700 w-full"
                variant="body2"
              >
                logistics & transportation
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[388px] sm:min-w-full mt-[74px] w-auto"
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
              Let’s Discuss Your Project
            </div>
          </Button>
          <div className="font-opensans sm:h-[1035px] h-[1892px] md:h-[914px] mt-[105px] md:px-5 relative w-full">
            <div className="absolute h-[1450px] md:h-[809px] sm:h-[930px] left-[0] top-[0] w-[84%] md:w-full">
              <div className="absolute flex flex-col md:gap-10 gap-16 items-center justify-start right-[0] self-stretch top-[0] w-auto">
                <Text
                  className="capitalize text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Contact Us
                </Text>
                <div className="flex flex-col font-inter gap-8 items-center justify-start w-full">
                  <Input
                    wrapClassName="w-full"
                    className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                    type="text"
                    name="email"
                    placeholder="Full Name"
                    shape="RoundedBorder10"
                    size="md"
                    variant="OutlineGray4007f"
                  ></Input>
                  <Input
                    wrapClassName="flex w-full"
                    className="font-medium leading-[normal] md:h-auto p-0 placeholder:text-gray_602 sm:h-auto text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                    type="email"
                    name="language"
                    placeholder="Email "
                    prefix={
                      <Img
                        src="images/img_mail_gray_602.svg"
                        className="mr-2.5 my-px"
                        alt="mail"
                      />
                    }
                    shape="RoundedBorder10"
                    size="md"
                    variant="OutlineGray4007f"
                  ></Input>
                  <TextArea
                    className="font-medium gap-2.5 h-[360px] leading-[normal] max-w-[971px] placeholder:text-gray_602 text-gray_602 text-left text-xl tracking-[0.20px] w-full"
                    name="email_One"
                    placeholder="Your Message"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="OutlineGray4007f"
                  ></TextArea>
                </div>
                <div className="flex sm:flex-col flex-row font-opensans sm:gap-10 items-center justify-between w-[98%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start w-auto sm:w-full">
                    <Img
                      src="images/img_computer_white_a700.svg"
                      className="h-[33px] w-8"
                      alt="computer"
                    />
                    <Text
                      className="font-semibold mt-1 text-left text-white_A700 tracking-[0.20px] w-auto"
                      variant="body5"
                    >
                      I aacept your privacy policy
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[256px] w-auto"
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
                      Submit Form
                    </div>
                  </Button>
                </div>
              </div>
              <OutsourcingPageColumnellipse165
                className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-auto sm:w-full"
                patterneleven="images/img_pattern11_2.png"
              />
            </div>
            <footer className="absolute bg-black_901 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[120px] py-8 self-stretch w-full">
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
                      onClick={handleNavigate8}
                      alt="twitter"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      className="common-pointer h-12 w-12"
                      onClick={handleNavigate9}
                      alt="facebook"
                    />
                    <Img
                      src="images/img_group.png"
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      alt="group"
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
                  Copyright © 2023 - Todos os direitos reservados - É proibida a
                  reprodução total ou parcial
                </Text>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUspagePage;
