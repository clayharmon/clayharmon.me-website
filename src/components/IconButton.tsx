import * as React from "react";
import { IconButtonProps } from "../types";
import IconAndText from "./IconAndText";

const IconButton: React.FC<IconButtonProps> = ({
  url,
  isExternal,
  label,
  siIcon,
  bgColor = "white",
  iconColor = "white",
  iconBgColor = "black",
  children,
  ...remainingProps
}) => (
  <a
    href={url}
    style={{ backgroundColor: bgColor }}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noreferrer" : ""}
    {...remainingProps}
  >
    <IconAndText
      label={label}
      siIcon={siIcon}
      iconColor={iconColor}
      iconBgColor={iconBgColor}
    />
  </a>
);
export default IconButton;
