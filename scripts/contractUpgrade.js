// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {ethers, upgrades} = require('hardhat');
// async function main() {
//   const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
//   const nftMarket = await NFTMarket.deploy();
//   await nftMarket.deployed();
//   console.log("nftMarket deployed to:", nftMarket.address);

//   const NFT = await hre.ethers.getContractFactory("NFT");
//   const nft = await NFT.deploy(nftMarket.address);
//   await nft.deployed();
//   console.log("nft deployed to:", nft.address);
// }

async function main() {
  
  const marketContractAddress = "0xEC5C6FC1282aC5E6FEb73F0740D43F4d2c1a89eD";
  
  // Upgrading
  const UpgradedNFTMarket = await ethers.getContractFactory("UpgradedNFTMarket");
  await upgrades.upgradeProxy(marketContractAddress, UpgradedNFTMarket);
  console.log("NFTMarket upgraded");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
