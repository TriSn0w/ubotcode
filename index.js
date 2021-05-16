const Discord = require('discord.js')
const client = new Discord.Client;
const token = process.env.TOKEN;
const prefix = '!';
const botowner = 'FireyAPI#7685';
function keepAlive() {
  require('./server.js');
}
const ytdl = require('discord-ytdl-core');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('dnd');
  client.user.setActivity('!help | Guilds: ' + client.guilds.cache.size);
});

client.on('message', message => {
	if (message.content === '!help') {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor('FireyAPI#7685')
	.setDescription('Catagories:' + '\n' + '```' + 'Moderation' + '```' + '\n' + '\n' + '!help' + '```' + '[category]' + '```')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(exampleEmbed);
	}
});

client.on('message', message => {
	if (message.content === '!help moderation') {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor('FireyAPI#7685', 'https://cole.needs.rest/korm0zu8i9a.svg', 'https://github.com/sharknix')
	.setDescription('```' + '!kick - Kicks a user mentioned.' + '```' + '\n' + '```' + '!ban - Bans a person mentioned.' + '```')
	.setThumbnail('https://cole.needs.rest/korm0zu8i9a.svg')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(exampleEmbed);
	}
});

client.on('message', message => {
// If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Successfully kicked ${user.tag}`);
            const args = message.content.slice(prefix.length).trim().split(' ');
            const user = client.users.cache.get(message.mentions.first);
             user.send('You have beem kicked from ' + message.guild.name + 'for the reason' + args.splice(2));
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       
        message.channel.send("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("You didn't mention the user to kick!");
    }
}
});

client.on('message', message => {
// If the message content starts with "!kick"
  if (message.content.startsWith('!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
         guild.members.ban(user);
        member

          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
       
        message.channel.send("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("You didn't mention the user to ban!");
    }
}
});

client.on('message', message => {
if (message.content.startsWith('!dm')) {
    const prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(' ');
    const target = message.mentions.users.first()
if(!target) return message.channel.send("You didnt state the user to send the DM to!")

const msgs = args.splice(2).join(" ")
if(!msgs) return message.channel.send('You Didnt State the Message you want to send the user')

if(message.attachments.size > 0){
    var Attachment = message.attachments.array();
    var OurAttachment = Attachment[0];
    const attachment = new MessageAttachment(OurAttachment.url);

    target.send(msgs);
    target.send(attachment);
    const user = message.author;
    message.channel.send('<@' + user.id + '>,' + ' I Sent a DM to ' + target.username)

  } else {
     target.send(msgs);
     const user = message.author;
     message.channel.send('<@' +user.id + '>' + ' sent a dm to ' + target.username)
  }
}
});

client.on('message', (message) => {
  // if the message doesn't start with the prefix or the author is a bot, exit early
  const prefix = '!';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // create an args variable that slices off the prefix and splits it into an array
  const args = message.content.slice(prefix.length).split(/ +/);
  // create a command variable by taking the first element in the array
  // and removing it from args
  const command = args.shift().toLowerCase();

  if (command === 'status') {
    // if the message author has no permission, send a message and exit
    if (!message.author === botowner)
      return message.channel.send('Your not the Admin of the server or bot!');
      else {

    // if there are more than one words as the status, join them again
    const activity = args.join(' ');
    client.user.setStatus(activity);
  }
}
});

client.on("message", (message) => {
    if (message.content.startsWith("!play")) {
       const ytdl = require("discord-ytdl-core");

        message.member.voice.channel.join().then((connection) => {
            const stream = ytdl(args[1], { filter: "audioonly",opusEncoded: true });
            const dispatcher = connection.play(stream, { type: "opus" }).on("finish", () => voiceChannel.leave());
        });
    }
});

client.on('message', (message) => {
if (message.content.startsWith('!serverinfo')) {
  const serverinfoEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('AIO - Server Info')
	.setAuthor('FireyAPI#7685', 'http://aiomobility.com/wp-content/uploads/2019/02/NUEVO-AIO-02.png', 'https://github.com/sharknix')
	.setDescription('Server name: ' + message.guild.name + `\n Total members: ` + message.guild.memberCount)
	.setThumbnail('http://aiomobility.com/wp-content/uploads/2019/02/NUEVO-AIO-02.png')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');
  message.channel.send(serverinfoEmbed);
}
});

client.on('message', message => {
  if (message.content.startsWith('!poll')) {
    const prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(' ');
   
   message.channel.send(args.splice(1).join(" ")).then(message => {
    message.react("<:upvote:843572083493568512>")
    message.react("<:upvote:843572083266813992>")
   })
}
});

client.on('message', (message) => {
if (message.content.startsWith('!invite')) {
message.channel.send('Invite our bot to your server! \n https://discord.com/oauth2/authorize?client_id=842062905905250364&permissions=8&scope=bot')
}
});

client.on("message", (message) => {
  if (message.content.startsWith("!play")) {
const args = message.content.trim().split(' ');

    message.member.voice.channel.join().then((connection) => {
      const stream = ytdl(
        args[1],
        { filter: "audioonly", opusEncoded: true }
      );
      const dispatcher = connection
        .play(stream, { type: "opus" })
        .on("finish", () => connection.disconnect());
    });
  }
});

client.on('guildMemberAdd', member => {
  if (member.guild.name === 'U-Bot Support Server') return member.guild.channels.get('843245146182254603').send('Welcome ' + member.id + ' to ' + member.guild.name); 
});

client.login(token);
console.log('AIO is online!');
keepAlive();