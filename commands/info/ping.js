const {Client, MessageEmbed } = require('discord.js');
const ms = require("ms");

module.exports = {
name: "ping",
description: "Ver o ping atualmente da bot!",
aliases: ["ping", "latencia"],

run: async(client, message, args) => {
message.delete()
let msg = await message.channel.send({content: '> **carregando...**'})
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
