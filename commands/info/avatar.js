const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const nazwabota = require("../../config.json").nazwabota;
  module.exports = {
    name: "avatar",
    aliases : ['profilowe', 'prof'],
    description: "Shows all available bot commands.",
    run: async (client, message, args) => {
      const hembed = new MessageEmbed()
        .setTitle(`**Avatar**`)
        .setColor('0x09FF00')
        .setThumbnail(message.author.displayAvatarURL())
      message.channel.send(hembed)
  }}

