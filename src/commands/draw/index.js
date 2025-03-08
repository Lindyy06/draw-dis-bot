import {SlashCommandBuilder} from 'discord.js'


export const command = new SlashCommandBuilder().setName('Draw').setDescription('choose one')


export const action = async (ctx) => {
    ctx.reply('hello')
}
