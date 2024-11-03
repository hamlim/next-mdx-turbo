let { default: loaderImpl } = require("./dist/cjs/index.cjs");

module.exports = async function loader(code) {
  let callback = this.async();
  let options = this.getOptions();

  await loaderImpl(code, callback, options);
};
