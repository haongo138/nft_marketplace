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
  
  // Deploying
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const instance = await upgrades.deployProxy(NFTMarket);
  await instance.deployed();
  console.log("NFTMarket is deployed to:", instance.address);

  const NFT = await ethers.getContractFactory("NFT");
  const nftInstance = await upgrades.deployProxy(NFT, [instance.address]);
  await nftInstance.deployed();
  console.log("NFT contract is deployed to:", nftInstance.address);

  // Upgrading
  const UpgradedNFTMarket = await ethers.getContractFactory("UpgradedNFTMarket");
  const upgraded = await upgrades.upgradeProxy(instance.address, UpgradedNFTMarket);
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
