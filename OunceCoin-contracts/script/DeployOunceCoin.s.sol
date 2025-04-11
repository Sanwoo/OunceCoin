// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {OunceCoin} from "../src/OunceCoin.sol";
import {Script} from "forge-std/Script.sol";

contract DeployOunceCoin is Script {
    OunceCoin public ounceCoin;
    address private immutable i_initialOwner;

    constructor(address initialOwner) {
        i_initialOwner = initialOwner;
    }

    function run() external {
        vm.startBroadcast();
        ounceCoin = new OunceCoin(i_initialOwner);
        vm.stopBroadcast();
    }
}