require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/OmTvsyn2ZNZbxSSJ4Z_yZGtsHOEdjUp8",
      accounts: [
        "4d168dd0f4d58e8a05abf81c7dd846eb2ac86a8d3d8f1a87db92180ca85afb45",
      ],
    },
  },
};
