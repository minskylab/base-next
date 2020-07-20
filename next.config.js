const withCSS = require("@zeit/next-css");

module.exports = withCSS({
    webpack(config) {
        // retrieve the rule without knowing its order
        const jsLoaderRule = config.module.rules.find(
            (rule) => rule.test instanceof RegExp && rule.test.test('.js')
        );
        const linariaLoader = {
            loader: 'linaria/loader',
            options: {
                sourceMap: process.env.NODE_ENV !== 'production',
            },
        };
        if (Array.isArray(jsLoaderRule.use)) {
            jsLoaderRule.use.push(linariaLoader);
        } else {
            jsLoaderRule.use = [jsLoaderRule.use, linariaLoader];
        }
        return config;
    },
});
