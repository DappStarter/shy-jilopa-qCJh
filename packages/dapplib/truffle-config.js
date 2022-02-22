require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure state nothing dash screen champion coral light army gather'; 
let testAccounts = [
"0x60ec5a1bb65fd4ff0424e140546c9ba09cd644cdb7cf7b91bed1466d599fc975",
"0xbb71b6756485dd080fb51a92af19cca2874495092b3bd446914aa93a05ca2216",
"0x209fff81e0d9e2c48cd83bec13f881d4fcd0450321fa89c9463bd72651d93ba9",
"0x6919c75c138523ea0303deb3073d7a95517cd2684056bd8690a8cac6eec4af8f",
"0xc8537a22a7f1280897c34af85c68c86c98b443711acc3dcff3b4ac435d4753cd",
"0xd2ef6a6e3c4d31c7a3c44cd24953e8bc8b0e0ab8ef9387109c41c3680c026a0f",
"0x86fa48d8b8f16f932d085f738b2d30967c0c6a295973c696a6904fe39ca5dd40",
"0x0e4f71f02784f9ed9214e36f090d799e9b09f00665d516d29301184ae211e0a2",
"0x7f8e2ba7604cadac041cbc503d63cb71cdda6355824fb8bad5e2aedd174598ee",
"0x42ff69b335889ff8d7221a186838c37902cf63eaa13d5a2a72e815ead3b4d8c5"
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
            version: '^0.8.0'
        }
    }
};

