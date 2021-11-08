// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {ethers, upgrades} = require('hardhat');

async function main() {

  const AVPToken = await ethers.getContractFactory("AVPToken");
  const avpInstance = await upgrades.deployProxy(AVPToken, ['AmazingVerse Protocol', 'AVP']);
  await avpInstance.deployed();
  console.log(`AVP contract is deployed to https://rinkeby.etherscan.io/address/${avpInstance.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
