import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  md: defineStyle({
    h: "40px",
    px: "12px",
  }),
  sm: defineStyle({
    h: "30px",
    fontSize: "13px",
    px: "10px",
  }),
  xs: defineStyle({
    h: "24px",
    fontSize: "13px",
    px: "10px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_A200: {
        bg: "blue.A200",
      },
      gray_50_02: {
        bg: "gray.50_02",
        color: "blue.A200",
      },
      gray_100_01: {
        bg: "gray.100_01",
        color: "gray.600",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_100_01"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
