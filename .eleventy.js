export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Slugify filter for form field names (handles Lithuanian chars & spaces)
  eleventyConfig.addFilter("slug", str =>
    String(str)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"]
  };
}

