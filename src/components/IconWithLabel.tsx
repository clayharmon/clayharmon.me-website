import * as React from "react";
import { IconWithLabelProps } from "../types";
import IconAndText from "./IconAndText";

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  label,
  siIcon,
  bgColor = "white",
  iconColor = "white",
  iconBgColor = "black",
  children,
  ...remainingProps
}) => (
  <span style={{ backgroundColor: bgColor }} {...remainingProps}>
    <IconAndText
      label={label}
      siIcon={siIcon}
      iconColor={iconColor}
      iconBgColor={iconBgColor}
    />
  </span>
);
export default IconWithLabel;
