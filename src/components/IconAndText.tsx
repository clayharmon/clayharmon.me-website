import * as React from "react";
import * as Icon from "react-icons/si";
import { IconType } from "react-icons";

import { IconAndTextProps } from "../types";

const IconAndText: React.FC<IconAndTextProps> = ({
  label,
  siIcon,
  iconColor = "white",
  iconBgColor = "black",
}) => {
  let IconComponent =
    typeof siIcon === "string" ? ((Icon as any)[siIcon] as IconType) : siIcon;
  return (
    <>
      <span
        className="icon"
        style={{ backgroundColor: iconBgColor, color: iconColor }}
      >
        <IconComponent />
      </span>
      <span>{label}</span>
    </>
  );
};

export default IconAndText;
