require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const fs = require('fs');
// const {alchemyApiKey, mnemonic} = require("./secret.json");

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      // url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.evn.ALCHEMY_API_KEY}`,
      accounts: {mnemonic: `${process.evn.MNEMONIC}`,
      chainId: 4,
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
