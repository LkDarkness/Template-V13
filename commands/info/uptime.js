const Discord = require("discord.js");

module.exports = {
    name: "uptime",
    description: "Ver quanto tempo eu estou online",
run: async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `> <a:estrela:905916572684656660> **|** **${days.toFixed()}** dias **${hours.toFixed()}** horas **${minutes.toFixed()}** minutos **${seconds.toFixed()}** segundos`;

  message.reply(`> **__~~Tempo de Atividade~~__** <a:uptime:905915820041981973>
  > <a:mih_seta_esquerda:903320549864923146> Estou online há: \n${uptime}`);
}
}
