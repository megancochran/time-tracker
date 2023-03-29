import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")

  // example styles for a primary button varient : change styling to match primary in figma and add the secondary
  variants: {
    primary: {
      bg: "greyscale.900",
      color: "greyscale.100",
      borderRadius: ".25rem",
      _hover: { bg: "greyscale.800", _disabled: { bg: "greyscale.900" } },
      _disabled: { opacity: "40%" },
      height: "3.375rem",
      fontWeight: "700",
      fontSize: "1.125rem",
    },
  },
};
