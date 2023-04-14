import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder20: "rounded-[20px]",
  CircleBorder23: "rounded-[23px]",
  icbRoundedBorder10: "rounded-[10px]",
  icbCircleBorder32: "rounded-[32px]",
  icbRoundedBorder20: "rounded-[20px]",
  icbCircleBorder24: "rounded-[24px]",
};
const variants = {
  FillPinkA400: "bg-pink_A400 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-pink_A400",
  OutlineBlack9003f: "bg-black_900 shadow-bs text-pink_A400",
  OutlineWhiteA700: "outline outline-[1px] outline-white_A700 text-white_A700",
  FillPinkA40033: "bg-pink_A400_33 text-pink_A400",
  OutlineBlack9003f_1: "bg-gray_900 shadow-bs text-pink_A401",
  icbFillPinkA40033: "bg-pink_A400_33",
  icbFillWhiteA700: "bg-white_A700",
  icbFillPinkA400: "bg-pink_A400",
  icbOutlinePinkA400: "border border-pink_A400 border-solid",
};
const sizes = {
  sm: "p-[9px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "p-[22px] sm:px-5",
  "2xl": "sm:px-5 px-[21px] py-[25px]",
  smIcn: "p-1.5",
  mdIcn: "p-2.5",
  lgIcn: "p-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder20",
    "CircleBorder23",
    "icbRoundedBorder10",
    "icbCircleBorder32",
    "icbRoundedBorder20",
    "icbCircleBorder24",
  ]),
  variant: PropTypes.oneOf([
    "FillPinkA400",
    "FillWhiteA700",
    "OutlineBlack9003f",
    "OutlineWhiteA700",
    "FillPinkA40033",
    "OutlineBlack9003f_1",
    "icbFillPinkA40033",
    "icbFillWhiteA700",
    "icbFillPinkA400",
    "icbOutlinePinkA400",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
