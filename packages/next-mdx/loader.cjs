module.exports = async function loader(code) {
  let callback = this.async();
  let options = this.getOptions();

  console.log(options);

  let loaderImpl = await import("./dist/index.js");

  await loaderImpl.default(code, callback, options);
};
