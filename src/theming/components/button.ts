const Button = {
  baseStyle: {
    fontWeight: "semibold",
  },
  sizes: {
    sm: {
      fontSize: "0.85rem",
      px: "0.8rem",
    },
    md: {
      fontSize: "0.95rem",
      px: "0.8rem",
    },
  },
  variants: {
    outline: (props: any) => ({
      border: "1px solid",
      borderColor: props.colorMode === "dark" ? "textBaseDark" : "textBaseLight",
      color: props.colorMode === "dark" ? "textBaseDark" : "textBaseLight",
      _active: {
        bg: props.colorMode === "dark" ? "backgroundDark.200" : "backgroundLight.200",
        boxShadow: "none",
      },
      _focus: {
        boxShadow: "none",
      },
      _hover: {
        bg: props.colorMode === "dark" ? "backgroundDark.200" : "backgroundLight.200",
      },
    }),
    solid: {
      bg: "primary",
      color: "buttonText",
      _active: {
        boxShadow: "none",
      },
      _focus: {
        boxShadow: "none",
      },
      _hover: {},
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
};

export default Button;
