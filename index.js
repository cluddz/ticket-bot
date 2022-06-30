const Discord= require("discord.js");
const client = new Discord.Client({intents: 32767 });

client.on("ready", () => {
    console.log("Bot is online!")
    client.user.setActivity("Tutorial bot!", { type: "STREAMING", url: "https://www.twitch.tv/lookinsomething" })

})

client.on("messageCreate", () => {
    const prefix ="$"
    if (!Message.content.startsWith(prefix)) return;

    if (Message.content === `${prefix}balls` ) {
        Message.channel.send("Your test has worked!")
    }


})

client.login("OTkxMzg5NDIyNzQ4NzA0ODI4.G2WKpX.zsrD6N4R2Fnrsc45dI7nTJDrDiCVKZGoIXxI18")