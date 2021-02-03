const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "kick",
    aliases: ["k"],
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply("Nie mam permisi!")
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś osoby którą chcesz wyrzucić!')
            .setTimestamp()
        if(!member) return message.channel.send(kembed2)
        await Member.kick({reason: args.slice(1).join(" ")})
        const kembed = new MessageEmbed()
        .setTitle('**Wyrzucono!**')
        .setColor('0x09FF00')
        .addFields(
            {name: "Moderator:", value:`${message.author}`, inline: false},
            {name: "Wyrzucony:", value:`${Member.user.tag}`, inline: false},
            {name: "Powód:", value:`${args.slice(1).join(" ")}`, inline: false},
        )
        .setTimestamp()
        message.channel.send(kembed)
    }
}