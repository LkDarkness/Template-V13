const {Client, MessageEmbed } = require('discord.js');
const ms = require("ms");

module.exports = {
name: "ping",
description: "Ver o ping atualmente da bot!",
type: 'CHAT_INPUT',

run: async (client, interaction, args) => {
let msg = await interaction.followUp({content: '> **carregando...**'})
  let time = 3*500
  setTimeout(function(){
    msg.edit({content: `> **Meu ping atual é** \`${client.ws.ping}\`**ms**`})
  }, time)
  time += 3*500
  setTimeout(function(){
    msg.edit({content: `> **Meu ping atual é** \`${client.ws.ping}\`**ms**`})
   }, time)
  time += 3*500
  setTimeout(function(){
    msg.edit({content: `> **Meu ping atual é** \`${client.ws.ping}\`**ms**`})
  }, time)
}
}
