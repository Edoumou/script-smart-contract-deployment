#!/bin/sh

solc --combined-json abi,bin ./contracts/Test.sol > ./abi/Test.json

node script_deploy.js