const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
	bot.user.setGame("PsyBot ,.help");
	console.log("Le bot a bien ete connecte");
});

bot.login("NDc3MjAwOTE0MjY0ODgzMjEx.Dk4ssQ.G7aGK4cQm90kkos6VVXKRYQitcI");
