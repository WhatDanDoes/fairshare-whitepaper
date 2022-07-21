module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/resources');
  eleventyConfig.addPassthroughCopy('src/favicon');
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
