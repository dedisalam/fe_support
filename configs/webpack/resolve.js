const { resolve } = require("path");

const Resolve = () => {
  const Alias = {
    "@assets": resolve(__dirname, "../../src/assets"),
    "@atoms": resolve(__dirname, "../../src/components/atoms"),
    "@molecules": resolve(__dirname, "../../src/components/molecules"),
    "@organisms": resolve(__dirname, "../../src/components/organisms"),
    "@templates": resolve(__dirname, "../../src/components/templates"),
    "@constants": resolve(__dirname, "../../src/constants"),
    "@helpers": resolve(__dirname, "../../src/helpers"),
    "@hooks": resolve(__dirname, "../../src/hooks"),
    "@props": resolve(__dirname, "../../src/interfaces/components"),
    "@args": resolve(__dirname, "../../src/interfaces/hooks"),
    "@pages": resolve(__dirname, "../../src/pages"),
    "@routes": resolve(__dirname, "../../src/routes"),
    "@services": resolve(__dirname, "../../src/services"),
    "@validations": resolve(__dirname, "../../src/validations"),
  };
  const Extensions = [".js", ".jsx", ".ts", ".tsx"];

  return {
    alias: Alias,
    extensions: Extensions,
  };
};

module.exports = Resolve;
