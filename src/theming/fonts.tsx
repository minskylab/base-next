import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "SFProDisplay";
        src: url("assets/fonts/SFProDisplay-RegularItalic.woff2") format("woff2"),
          url("assets/fonts/SFProDisplay-RegularItalic.woff") format("woff");
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: "SFProDisplay";
        src: url("assets/fonts/SFProDisplay-BoldItalic.woff2") format("woff2"),
          url("assets/fonts/SFProDisplay-BoldItalic.woff") format("woff");
        font-weight: bold;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: "SFProDisplay";
        src: url("assets/fonts/SFProDisplay-Regular.woff2") format("woff2"),
          url("assets/fonts/SFProDisplay-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "SFProDisplay";
        src: url("assets/fonts/SFProDisplay-Bold.woff2") format("woff2"),
          url("assets/fonts/SFProDisplay-Bold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);
export default Fonts;