import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray4007f: "bg-white_A700 outline outline-[2px] outline-gray_400_7f",
};
const shapes = { RoundedBorder10: "rounded-[10px]" };
const sizes = { sm: "sm:px-5 px-8 py-[34px]" };

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["OutlineGray4007f"]),
  size: PropTypes.oneOf(["sm"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "",
  variant: "",
  size: "",
};
export { TextArea };
