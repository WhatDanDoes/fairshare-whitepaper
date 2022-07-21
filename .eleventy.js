module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/resources');
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
