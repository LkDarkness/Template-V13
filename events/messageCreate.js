const client = require("../index");
const firebase = require("firebase");
const database = firebase.database();
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

client.on("messageCreate", async (message) => {

    let prefixo = client.config.prefix;
    
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefixo)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefixo.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});

client.on("messageCreate", async (message) => {

    const actionRow = new MessageActionRow()
      .addComponents(
        [
          new MessageButton().setStyle('LINK').setURL('https://discord.gg/YNJV8UGtuh').setLabel('Support').setEmoji('<:ruby:891841708264914964>'),
          new MessageButton().setStyle('LINK').setURL('https://discord.com/api/oauth2/authorize?client_id=902109262602436619&permissions=8&scope=bot%20applications.commands').setLabel('Invite Me').setEmoji('<:not:876816217107750912>'),
          new MessageButton().setStyle('LINK').setURL('https://www.kyoto-bot.com/').setLabel('WebSite').setEmoji('<:ruby:891841708264914964>')
        ]
      );
    
      const embedbb = new MessageEmbed()
      .setDescription(`> <a:4743_pink_flame:877173850939465739> **| Ohayo, ${message.author} ! OwO**\n\n > Meu nome é **Kyoto**\n> Meu prefixo é: [\`ky.\`]\n> Caso precise de suporte clique nos botões! Ou use \`ky.help\``)
      .setImage('https://cdn.discordapp.com/attachments/903255778109059115/903412915699347477/standard.gif')
      .setColor("#DDA0DD")
          
      if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) { return message.reply({ embeds: [embedbb], components: [actionRow]})
    }
    });
