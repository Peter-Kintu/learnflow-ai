// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LearnFlowToken is ERC20, Ownable {
    // Constructor: Initializes the token with a name and symbol.
    // Mints an initial supply to the deployer (owner).
    constructor() ERC20("LearnFlow Token", "LFT") Ownable(msg.sender) {
        // Mint an initial supply to the contract deployer (owner)
        // This initial supply can be used by the owner to mint tokens for students.
        _mint(msg.sender, 1000000 * (10 ** decimals())); // 1,000,000 LFT
    }

    // Function for the owner to mint new tokens and send them to a specific address.
    // This will be called by your Django backend when a student earns tokens.
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // You can add other functions here if needed, e.g., burning tokens, pausing.
}
