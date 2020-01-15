
module.exports = function(eleventyConfig) {

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/css");

  return  {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true
  };

};
