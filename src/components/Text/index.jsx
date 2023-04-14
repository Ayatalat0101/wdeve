import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-8xl",
  h2: "font-semibold sm:text-5xl md:text-5xl text-[90px]",
  h3: "font-bold sm:text-5xl md:text-5xl text-[64px]",
  h4: "font-bold sm:text-[41px] md:text-[47px] text-[55px]",
  h5: "text-5xl sm:text-[38px] md:text-[44px]",
  h6: "sm:text-4xl md:text-[38px] text-[40px]",
  body1: "text-4xl sm:text-[32px] md:text-[34px]",
  body2: "md:text-3xl sm:text-[28px] text-[32px]",
  body3: "sm:text-2xl md:text-[26px] text-[28px]",
  body4: "text-2xl md:text-[22px] sm:text-xl",
  body5: "text-xl",
  body6: "text-lg",
  body7: "text-base",
  body8: "text-sm",
  body9: "font-bold sm:text-5xl md:text-5xl text-9xl",
  body10: "font-normal text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
