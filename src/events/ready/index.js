import { Events } from 'discord.js'

export const event = {
    name: Events.ClientReady,
    once: true,
}

export const action = (bot) =>{
    console.log(`Ready! Logged in as ${bot.user.tag}`)
}