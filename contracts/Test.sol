// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Test {
    uint256 public age;
    string public name;

    constructor(uint256 _age, string memory _name) {
        age = _age;
        name = _name;
    }

    function setAge(uint256 _age) public {
        age = _age;
    }

    function setName(string memory _name) public {
        name = _name;
    }
}