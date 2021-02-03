const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
const nazwabota = require("../../config.json").nazwabota;
  module.exports = {
    name: "help",
    aliases : ['h', 'pomoc'],
    description: "Shows all available bot commands.",
    run: async (client, message, args) => {
      const hembed = new MessageEmbed()
        .setTitle(`**POMOC | ${nazwabota}** Mój prefix to "${prefix}".`)
        .setColor('0x09FF00')
      message.channel.send(hembed)
  }}
