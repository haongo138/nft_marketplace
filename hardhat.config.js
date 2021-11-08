require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const fs = require('fs');
const {alchemyApiKey, mnemonic} = require("./secret.json");
const privateKey = "1054f38056c60671e3ddac639780e01ef26fe58d785b51c8fb6fa75938eb0390";

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      // url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      // accounts: {mnemonic: `${mnemonic}`},
      accounts: [`0x${privateKey}`],
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
