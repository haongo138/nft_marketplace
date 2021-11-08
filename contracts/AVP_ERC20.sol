// contracts/NFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "./ERC20Upgradable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract AVPToken is ERC20Upgradeable {
  function initialize(string memory name, string memory symbol) public virtual initializer {
    __ERC20_init(name, symbol);
    _mint(_msgSender(), 138000000 * 10 ** 18);
  }
}