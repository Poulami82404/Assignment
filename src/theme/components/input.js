import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  field: {
    color: "gray.500",
    fontSize: "13px",
    gap: "12px",
    borderColor: "blue.50",
    borderWidth: "1px",
    bg: "white.A700",
    flexGrow: 1,
    borderRadius: "10px",
  },
});

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "13px",
      height: "40px",
      px: "20px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        field: {
          bg: "white.A700",
          color: "gray.500",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Input;
