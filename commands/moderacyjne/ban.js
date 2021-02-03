const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ban",
    aliases: ["b"],
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('ban_MEMBERS')) return message.reply("Nie mam permisi!")
        const Member = message.mentions.members.first()
        const member = message.mentions.members.first()
        const kembed2 = new MessageEmbed()
            .setTitle('Oznacz!')
            .setColor('0xFF0000')
            .setDescription('Nie moge wykonać polecenia, ponieważ nie oznaczyłeś osoby którą chcesz zbanować!')
            .setTimestamp()
        if(!member) return message.channel.send(kembed2)
        await Member.ban({reason: args.slice(1).join(" ")})
        const bembed = new MessageEmbed()
        .setTitle('**Zbanowano!**')
        .setColor('0x09FF00')
        .addFields(
            {name: "Moderator:", value:`${message.author}`, inline: false},
            {name: "Zbanowany:", value:`${Member.user.tag}`, inline: false},
            {name: "Powód:", value:`${args.slice(1).join(" ")}`, inline: false},    
        )
        .setTimestamp()
        message.channel.send(bembed)
    }
}