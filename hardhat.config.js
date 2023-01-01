/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("./scripts/deploy.js");
require("./scripts/mint.js");

const { ACCOUNT_PRIVATE_KEY, ALCHEMY_ARBI_MAINNET, ARBISCAN_API_KEY } = process.env;

module.exports = {
   solidity: "0.8.2",
   defaultNetwork: "arbitrumGoerli",
   networks: {
    hardhat: {},
    // ethereum: {
    //   chainId: 1,
    //   url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ETH_MAINNET}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // },
    // ethereumGoerli: {
    //   chainId: 5,
    //   url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ETH_TESTNET}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // },
    arbitrum: {
      chainId: 42161,
      url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_ARBI_MAINNET}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    // arbitrumGoerli: {
    //   chainId: 421613,
    //   url: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_ARBI_TESTNET}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // },
  },
  etherscan: {
    apiKey: `${ARBISCAN_API_KEY}`
  }
}