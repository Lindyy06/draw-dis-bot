import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('drawing').setDescription('choose one')


export const action = async (ctx) => {
    ctx.reply('caught')
}
