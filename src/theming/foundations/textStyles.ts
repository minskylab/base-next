import { mode } from "@chakra-ui/theme-tools";

const textStyles = {
  h1: {
    fontSize: ["1.3rem", "1.32rem", "1.35rem", "1.4rem"],
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "0%",
  },
  h2: {
    fontSize: ["1rem", "1.05rem", "1.1rem", "1.16rem"],
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "0%",
  },
  h3: {
    fontSize: ["0.9rem", "0.95rem", "1rem", "1rem"],
    fontWeight: "semibold",
    lineHeight: "150%",
    letterSpacing: "0%",
  },
  button: {
    fontSize: ["0.9rem", "0.9rem", "0.92rem", "0.95rem"],
    fontWeight: "semibold",
  },
  p: {
    fontSize: ["0.95rem", "0.98rem", "0.95rem", "0.95rem"],
    fontWeight: "normal",
    lineHeight: "150%",
    letterSpacing: "0.01rem",
  },
  small: {
    fontSize: ["0.85rem", "0.85rem", "0.85rem", "0.87rem"],
    fontWeight: "normal",
    lineHeight: "150%",
  },
  field: (props: any) => ({
    fontSize: ["0.8rem", "0.8rem", "0.81rem", "0.82rem"],
    fontWeight: "normal",
    color: mode("textLight.800", "textDark.800")(props),
  }),
  label: {
    fontSize: ["0.62rem", "0.62rem", "0.62rem", "0.62rem"],
    fontWeight: "normal",
  },
};

export default textStyles;
