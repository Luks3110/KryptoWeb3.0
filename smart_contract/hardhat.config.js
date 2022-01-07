//https://eth-ropsten.alchemyapi.io/v2/IIK_2AYGH4BtjkgO2cINLyCwaDvONW-M

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/IIK_2AYGH4BtjkgO2cINLyCwaDvONW-M',
      accounts: ['2f2d3c6d20293f31d3b40d75d7e6d71b787afe91d5688b00de69fa577c2cf1e9']
    }
  }
}