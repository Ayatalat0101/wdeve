import React from "react";

import { Text, Line } from "components";

const WebServicesPageColumnmenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[7px] items-end justify-between w-full">
          <Text
            className="font-normal font-opensans text-left text-white_A700 w-auto"
            variant="body5"
          >
            {props?.menu}
          </Text>
          <div className="flex flex-col items-center justify-start my-[5px] w-auto">
            <Line className="bg-white_A700 h-[3px] w-full" />
            <Line className="bg-white_A700 h-[3px] mt-1 w-full" />
            <Line className="bg-white_A700 h-[3px] mt-1 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

WebServicesPageColumnmenu.defaultProps = { menu: "Menu" };

export default WebServicesPageColumnmenu;
