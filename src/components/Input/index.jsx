import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray4007f: "bg-white_A700 outline outline-[2px] outline-gray_400_7f",
  FillWhiteA700: "bg-white_A700",
  srcOutlinePinkA400: "border border-pink_A400 border-solid shadow-bs1",
};
const shapes = {
  RoundedBorder10: "rounded-[10px]",
  srcRoundedBorder17: "rounded-[17px]",
};
const sizes = {
  sm: "px-[15px] py-4",
  md: "p-[25px] sm:px-5",
  smSrc: "p-[7px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10", "srcRoundedBorder17"]),
  variant: PropTypes.oneOf([
    "OutlineGray4007f",
    "FillWhiteA700",
    "srcOutlinePinkA400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
