const { RESTDataSource } = require("apollo-datasource-rest");
// Import RESTDataSource from apollo-datasource-rest

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
// Define constant eth_address with Vitalik's address

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api"; // Set base URL for Etherscan API
  }

  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    ); // Get account balance for defined address
  }

  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    ); // Get total ETH supply
  }

  //Paste Code Here For New API Endpoints
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    ); // Get latest ETH price
  }

  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    ); // Get estimated block confirmation time
  }
}

module.exports = EtherDataSource; // Export EtherDataSource class

