const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy("src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("src/assets/js/");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            style: "compressed",
            sourceMap: false
        },
        postcss: postcss([autoprefixer])
    });

    return {
        dir: {
            input: 'src',
            data: "_data",
            layouts: '_layouts',
            output: '_site',
        },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"]
    }
}