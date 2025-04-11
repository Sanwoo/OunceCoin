// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {OunceCoin} from "../src/OunceCoin.sol";

contract OunceCoinTest is Test{
    OunceCoin public oc;
    address owner = makeAddr("owner");
    address user = makeAddr("user");

    function setUp() public {
        oc = new OunceCoin(owner);
        // vm.deal(owner, 10 ether);
    }

    function testSuccessIfOwnerMint() public {
        vm.prank(owner);
        oc.mint(10 ether);
        assert(oc.balanceOf(owner) == 10 ether);
    }

    function testRevertIfUserMint() public {
        vm.prank(user);
        vm.expectRevert();
        oc.mint(10 ether);

        assert(oc.balanceOf(user) == 0 ether);
    }

    function testSuccessIfOwnerBurn() public {
        vm.prank(owner);
        oc.mint(10 ether);
        assert(oc.balanceOf(owner) == 10 ether);
        vm.prank(owner);
        oc.burn(5 ether);
        assert(oc.balanceOf(owner) == 5 ether);
    }

    function testRevertIfUserBurn() public {
        vm.prank(owner);
        oc.mint(10 ether);
        assert(oc.balanceOf(owner) == 10 ether);

        vm.prank(user);
        vm.expectRevert();
        oc.burn(5 ether);
        

        assert(oc.balanceOf(owner) == 10 ether);
        assert(oc.balanceOf(user) == 0 ether);
    }
}

