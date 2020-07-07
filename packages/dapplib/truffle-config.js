require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind history hockey arctic sun giggle'; 
let testAccounts = [
"0xafa0f0aada4f7db6e3e2d4eac91ee30d2d835ec496ab35d14849ca31493ff901",
"0x6be479553473a1fee173526a8ad80b1844e0d2ad626a680b2d3e26fc4a9d1ddd",
"0x31f6016372df2c1144c84e32bdf3664c8635dcd0949e4f7e1c462159f5f7614b",
"0x1aff64aa9fa0c8869c25fce344132b9861b6f0474043fd4d26f316f35ac39b50",
"0x026d2bea57f161f05f1e64cbc04bf51d6799b3a8f2a5bde5f99a3faee885d40d",
"0xdc95c939aa0cbbdc69b03f7a7016c37e5d04c2843fd7419801deae67a4c78d8a",
"0xfd3f9527addb206d59698dd7ca23d2be9307cad2c97a3ba9186c6257020e3b70",
"0x9f779ec58fbc9c31e87714c386e745cc4690f779d9431e60a1ff52f37148fe30",
"0x1086fbfcd1a76592b7ac3bfdfd3323472d6c177ce4f7aaa9606fccf986630e53",
"0x4f2dea9781146e5a5911432d95e3ee09526a6f63ab8b2482ffb53b156a514f03"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
