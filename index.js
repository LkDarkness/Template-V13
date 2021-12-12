const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;
  
//=======// VAR GLOBAL //===========//
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");

//==========// INICIALIZAÇÃO DATABASE //========//
require("./handler")(client);
const { initializeApp } = require("firebase");

const ConfigF = {
  apiKey: "AIzaSyBiuFrSYAW5ME6C8ukWNAmcD_yKYuKJ5B8",
  authDomain: "kyoto-8363b.firebaseapp.com",
  projectId: "kyoto-8363b",
  storageBucket: "kyoto-8363b.appspot.com",
  messagingSenderId: "159511518977",
  appId: "1:159511518977:web:54be397f66701d2929c500"
};

const app = initializeApp(ConfigF);

console.log(`[Sistema] - Banco de Dados conectado com a Aplicação`);

client.login(client.config.token);
