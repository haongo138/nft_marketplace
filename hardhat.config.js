require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const fs = require('fs');
const {alchemyApiKey, mnemonic} = require("./secret.json");
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic},
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