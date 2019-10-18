const test = async () => {
    const lists = [
        {
            "head": "Dallas Mavericks vs Detroit Pistons",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/phi2.m3u8"
        },
        {
            "head": "Guangzhou Long-Lions vs Washington Wizards",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/mia.m3u8"
        },
        {
            "head": "Orlando Magic vs Atlanta Hawks",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://zubacz.xyz/neinz/video/espn/d0695f6fa2f143eb95c7a41d96d581c4.m3u8"
        },
        {
            "head": "Miami Heat vs Charlotte Hornets",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        },
        {
            "head": "New Orleans Pelicans vs Chicago Bulls",
            "updateTime": "October 9th, 2019 - 8:00 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        },
        {
            "head": "Utah Jazz vs Milwaukee Bucks",
            "updateTime": "October 9th, 2019 - 8:00 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        },
        {
            "head": "NBA TV Live Stream",
            "updateTime": "October 09, 2019 - 2:08 AM",
            "link": "http://tekken.gmrst.xyz/hls/WGBA-GBA/playlist.m3u8"
        },
        {
            "head": "Dallas Mavericks vs Detroit Pistons",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/phi2.m3u8"
        },
        {
            "head": "Guangzhou Long-Lions vs Washington Wizards",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/mia.m3u8"
        },
        {
            "head": "Orlando Magic vs Atlanta Hawks",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://zubacz.xyz/neinz/video/espn/d0695f6fa2f143eb95c7a41d96d581c4.m3u8"
        },
        {
            "head": "Miami Heat vs Charlotte Hornets",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        },
        {
            "head": "Dallas Mavericks vs Detroit Pistons",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/phi2.m3u8"
        },
        {
            "head": "Guangzhou Long-Lions vs Washington Wizards",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/mia.m3u8"
        },
        {
            "head": "Orlando Magic vs Atlanta Hawks",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://zubacz.xyz/neinz/video/espn/d0695f6fa2f143eb95c7a41d96d581c4.m3u8"
        },
        {
            "head": "Miami Heat vs Charlotte Hornets",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        },
        {
            "head": "Dallas Mavericks vs Detroit Pistons",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/phi2.m3u8"
        },
        {
            "head": "Guangzhou Long-Lions vs Washington Wizards",
            "updateTime": "October 9th, 2019 - 7:00 PM ET",
            "link": "http://the.cavaliersz.xyz/hls/mia.m3u8"
        },
        {
            "head": "Orlando Magic vs Atlanta Hawks",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://zubacz.xyz/neinz/video/espn/d0695f6fa2f143eb95c7a41d96d581c4.m3u8"
        },
        {
            "head": "Miami Heat vs Charlotte Hornets",
            "updateTime": "October 9th, 2019 - 7:30 PM ET",
            "link": "http://live2.nba4free.com/hls/phx.m3u8"
        }
    ];
    text = "";
    lists.forEach(list => text += `${list.head}\n${list.link}    ( ${list.updateTime} )\n\n`);
    if (text.length >= 2000) {
        const textSplit = text.split("\n\n");
        const index = Math.ceil(textSplit.length / 2);
        text = [textSplit.slice(0, index).join("\n\n") + ("\n\n"), textSplit.slice(index, textSplit.length).join("\n\n")];
    }
    console.log(text.length);
}
test();