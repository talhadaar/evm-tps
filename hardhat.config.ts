import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const optimizerSettings = {
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    outputSelection: {
      "*": {
        "*": ["devdoc", "userdoc", "metadata"],
        "": [],
      },
    },
  },
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        ...optimizerSettings
      }
    ]
  },
  defaultNetwork: "local",
  networks: {
    local: {
      url: "",
      accounts: [
        "0x6e26f3ed3e362f1edb359f77a83641787934a73426089f861a1a03d930feac5b",
      ],
    },
  },
};

export default config;
