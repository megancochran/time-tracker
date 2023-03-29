import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { ButtonStyles as Button } from "./components/Button.styles";
import { HeadingStyles as Heading } from "./components/Heading.styles";
import { TextStyles as Text } from "./components/Text.styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  fonts,
  colors,
  components: {
    Heading,
    Text,
    Button,
  },
  config,
});
