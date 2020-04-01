const withCSS = require("@zeit/next-css");

module.exports = withCSS({
    webpack(config, { isServer }) {
        config.module.rules[0].use = [
            config.module.rules[0].use,
            {
                loader: "linaria/loader",
                options: {
                    sourceMap: process.env.NODE_ENV !== "production"
                }
            }
        ];
        return config;
    }
});
