import React from "react";
import { TextArea } from "components";

export default {
  title: "aya_s_application1/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder10",
  variant: "OutlineGray4007f",
  size: "sm",
  placeholder: "placeholder",
};
