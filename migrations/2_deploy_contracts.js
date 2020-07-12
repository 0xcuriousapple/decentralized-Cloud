var SimpleStorage = artifacts.require("./cloud.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
