module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 9050,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/css",
      js: "./src/js",
      img: "./src/img",
      svg: "./src/svg",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      svg: "./dist/svg",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      svg: "./build/svg",
    },
  },
};
