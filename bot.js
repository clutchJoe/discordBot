const Discord = require('discord.js');
const schedule = require('node-schedule');
const axios = require("axios");
require("dotenv").config();

const rule = new schedule.RecurrenceRule();
rule.second = 0;
rule.minute = [2, 32];
let text = "";

const fetchData = async function () {
    console.log(process.env.API_LINK);
    const res = await axios.get(process.env.API_LINK);
    const data = res.data;
    // console.log(data);
    if (data[0].head == "Updating...") {
        text = "Live links are updating...";
    } else if (data === "undefined" || data === "null") {
        text = "No updates yet...";
    } else {
        text = [];
        for (let item of data) {
            let temp = "";
            if (item == false) {
                temp = "Live links are updating...";
                text.push(temp);
            } else {
                item.forEach(i => temp += `${i.head}\n${i.link}    ( ${i.updateTime} )\n\n`);
                if (temp.length >= 2000) {
                    const textSplit = temp.split("\n\n");
                    const index = Math.ceil(textSplit.length / 2);
                    temp = [textSplit.slice(0, index).join("\n\n"), textSplit.slice(index, textSplit.length).join("\n\n")];
                    text.push(temp);
                } else {
                    text.push(temp);
                }
            }
        }
        console.log(text)
    }
}
fetchData();

const bot = new Discord.Client();
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

// [{ "head": "Dallas Mavericks vs Detroit Pistons", "updateTime": "October 9th, 2019 - 7:00 PM ET", "link": "http://the.cavaliersz.xyz/hls/phi2.m3u8" }, { "head": "Guangzhou Long-Lions vs Washington Wizards", "updateTime": "October 9th, 2019 - 7:00 PM ET", "link": "http://the.cavaliersz.xyz/hls/mia.m3u8" }, { "head": "Orlando Magic vs Atlanta Hawks", "updateTime": "October 9th, 2019 - 7:30 PM ET", "link": "http://zubacz.xyz/neinz/video/espn/d0695f6fa2f143eb95c7a41d96d581c4.m3u8" }, { "head": "Miami Heat vs Charlotte Hornets", "updateTime": "October 9th, 2019 - 7:30 PM ET", "link": "http://live2.nba4free.com/hls/phx.m3u8" }, { "head": "New Orleans Pelicans vs Chicago Bulls", "updateTime": "October 9th, 2019 - 8:00 PM ET", "link": "http://live2.nba4free.com/hls/phx.m3u8" }, { "head": "Utah Jazz vs Milwaukee Bucks", "updateTime": "October 9th, 2019 - 8:00 PM ET", "link": "http://live2.nba4free.com/hls/phx.m3u8" }, { "head": "NBA TV Live Stream", "updateTime": "October 09, 2019 - 2:08 AM", "link": "http://tekken.gmrst.xyz/hls/WGBA-GBA/playlist.m3u8" }]

bot.on('message', msg => {
    let args = msg.content;
    if (args.startsWith("!") || args.startsWith("！")) {
        let tarArgs = args.substr(1);
        switch (tarArgs) {
            case "ping":
                msg.reply('pong');
                break;
            case "help":
                msg.reply('你可以使用如下指令：\n站点一：`!site_1`\n站点二：`!site_2`\n站点三：`!site_3`\n站点四：`!site_4`\n站点五：`!site_5`\n站点六：`!site_6`\n站点七：`!site_7`\n站点八：`!site_8`\n站点九：`!site_9`\n');
                break;
            case "site_1":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[0] === "object") {
                    for (let item of text[0]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[0]);
                }
                break;
            case "site_2":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[1] === "object") {
                    for (let item of text[1]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[1]);
                }
                break;
            case "site_3":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[2] === "object") {
                    for (let item of text[2]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[2]);
                }
                break;
            case "site_4":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[3] === "object") {
                    for (let item of text[3]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[3]);
                }
                break;
            case "site_5":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[4] === "object") {
                    for (let item of text[4]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[4]);
                }
                break;
            case "site_6":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[5] === "object") {
                    for (let item of text[5]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[5]);
                }
                break;
            case "site_7":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[6] === "object") {
                    for (let item of text[6]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[6]);
                }
                break;
            case "site_8":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[7] === "object") {
                    for (let item of text[7]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[7]);
                }
                break;
            case "site_9":
                msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
                if (typeof text[8] === "object") {
                    for (let item of text[8]) {
                        msg.channel.send(item);
                    }
                } else if (typeof text === "string") {
                    msg.channel.send(text);
                } else {
                    msg.channel.send(text[8]);
                }
                break;
            // case "help":
            //     msg.channel.send("指令如下\n站点一：`!site_1`\n站点二：`!site_2`\n站点三：`!site_3`\n站点四：`!site_4`\n站点五：`!site_5`\n站点六：`!site_6`\n");
            //     break;
            // case "game":
            //     msg.channel.send("请收下你的直播链接，括号后为最后更新时间（美国时间），enjoy it ~\n\n");
            //     if (typeof text === "object") {
            //         for (let item of text) {
            //             msg.channel.send(item);
            //         }
            //     } else {
            //         msg.channel.send(text);
            //     }
            //     break;
            default:
                msg.reply("没有此指令 ！");
        }
    }
});

schedule.scheduleJob(rule, async () => {
    fetchData();
});

bot.login(process.env.TOKEN);