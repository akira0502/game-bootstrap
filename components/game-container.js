var container = [
    {
        title: "NEW GAMES",
        icon: "fa fa-plus",
        items: [
            {
                link: "./game.html",
                image: "drop-it-thumb_2_small.jpg",
                star: 4,
                name: "Drop It ( Leaderboard demo )"
            },
            {
                link: "./game.html",
                image: "antivirus-thumb_2_small.jpeg",
                star: 4,
                name: "Anti Virus"
            },
            {
                link: "./game.html",
                image: "kill-the-coronavirus-kill-the-coronavirus-d2a2209a95ea4d55a933c68683e25e94-512x512_small.jpeg",
                star: 4,
                name: "Kill The Coronavirus"
            },
            {
                link: "./game.html",
                image: "skydom-skydom-ae10263247c44278b33c845ff1c2df80-512x512_small.jpeg",
                star: 4,
                name: "Skydom"
            },
            {
                link: "./game.html",
                image: "escape-out-escape-out-1a8a9cbaed0f4fd58cbaf8a68656b6fa-512x512_small.jpeg",
                star: 4,
                name: "Escape Out"
            },
            {
                link: "./game.html",
                image: "color-eggs-color-eggs-c697cbd02d1c4f01b52be737ca8c7792-512x512_small.jpeg",
                star: 4,
                name: "Color Eggs"
            },
            {
                link: "./game.html",
                image: "sugar-heroes-sugar-heroes-b24567e39b5248eabe77a704dbb555a9-512x512_small.jpeg",
                star: 4,
                name: "Sugar Heroes"
            },
            {
                link: "./game.html",
                image: "road-crash-road-crash-d90788593d164b7bb1498508089d634f-512x512_small.jpeg",
                star: 4,
                name: "Road Crash"
            },
            {
                link: "./game.html",
                image: "pool-8-pool-8-c088871ffdcd4e8393e4775371629d21-512x512_small.jpeg",
                star: 3,
                name: "Pool 8"
            },
        ]
    },
    {
        title: "RANDOM GAMES",
        icon: "fa fa-gamepad",
        items: [
            {
                link: "./game.html",
                image: "drop-it-thumb_2_small.jpg",
                star: 4,
                name: "Drop It ( Leaderboard demo )"
            },
            {
                link: "./game.html",
                image: "antivirus-thumb_2_small.jpeg",
                star: 4,
                name: "Anti Virus"
            },
            {
                link: "./game.html",
                image: "kill-the-coronavirus-kill-the-coronavirus-d2a2209a95ea4d55a933c68683e25e94-512x512_small.jpeg",
                star: 4,
                name: "Kill The Coronavirus"
            },
            {
                link: "./game.html",
                image: "skydom-skydom-ae10263247c44278b33c845ff1c2df80-512x512_small.jpeg",
                star: 4,
                name: "Skydom"
            },
            {
                link: "./game.html",
                image: "escape-out-escape-out-1a8a9cbaed0f4fd58cbaf8a68656b6fa-512x512_small.jpeg",
                star: 4,
                name: "Escape Out"
            },
            {
                link: "./game.html",
                image: "color-eggs-color-eggs-c697cbd02d1c4f01b52be737ca8c7792-512x512_small.jpeg",
                star: 4,
                name: "Color Eggs"
            },
            {
                link: "./game.html",
                image: "sugar-heroes-sugar-heroes-b24567e39b5248eabe77a704dbb555a9-512x512_small.jpeg",
                star: 4,
                name: "Sugar Heroes"
            },
            {
                link: "./game.html",
                image: "road-crash-road-crash-d90788593d164b7bb1498508089d634f-512x512_small.jpeg",
                star: 4,
                name: "Road Crash"
            },
            {
                link: "./game.html",
                image: "pool-8-pool-8-c088871ffdcd4e8393e4775371629d21-512x512_small.jpeg",
                star: 3,
                name: "Pool 8"
            }
        ]
    },
    {
        title: "SIMILAR GAMES",
        icon: "fa fa-thumbs-up",
        items: [
            {
                link: "./game.html",
                image: "drop-it-thumb_2_small.jpg",
                star: 4,
                name: "Drop It ( Leaderboard demo )"
            },
            {
                link: "./game.html",
                image: "antivirus-thumb_2_small.jpeg",
                star: 4,
                name: "Anti Virus"
            },
            {
                link: "./game.html",
                image: "kill-the-coronavirus-kill-the-coronavirus-d2a2209a95ea4d55a933c68683e25e94-512x512_small.jpeg",
                star: 4,
                name: "Kill The Coronavirus"
            },
            {
                link: "./game.html",
                image: "skydom-skydom-ae10263247c44278b33c845ff1c2df80-512x512_small.jpeg",
                star: 4,
                name: "Skydom"
            }
        ]
    },
]

var game = {
    link: "https://html5.gamedistribution.com/2a5a33c2bf0f4d77a7b1b1e647cd0537/",
    name: "Meme Miner",
    played_times: 1334,
    total_vote: 10,
    up_vote: 8,
    description: "Mine for some Doge coins in this funny meme game. Try to get rich off cryptocurrency.",
    instructions: "Click or tap to mine",
    categories: "Clicker",
    comments: ""
}


var tag = "";

tag += `
        <div class="game-container">
			<div class="content-wrapper">
				<div class="row">
					<div class="col-md-9 game-content">
						<div class="game-iframe-container">
							<iframe class="game-iframe" id="game-area"
								src="` + game.link + `" width="800"
								height="600" scrolling="none" frameborder="0" allowfullscreen></iframe>
						</div>
						<div class="single-info-container">
							<div class="header-left">
								<h1 class="single-title">` + game.name + `</h1>
								<p>Played ` + game.played_times + ` times.</p>
							</div>
							<div class="header-right">
								<div class="stats-vote">
									<div class="txt-stats"><b class="text-success">` + game.up_vote * 100 / game.total_vote +`%</b> (` + game.up_vote + `/` + game.total_vote + `)</div>
									<i class="icon-vote fa fa-thumbs-up" id="upvote" data-id="28"></i>
									<i class="icon-vote fa fa-thumbs-down" id="downvote" data-id="28"></i>
									<div class="vote-status"></div>
								</div>
							</div>
							<div class="action-btn">
								<div class="single-icon"><i class="fa fa-external-link-square" aria-hidden="true"></i><a
										href="https://demo.cloudarcade.net/full/meme-miner" target="_blank">Open in new
										window</a></div>
								<div class="single-icon"><i class="fa fa-expand" aria-hidden="true"></i><a href="#"
										onclick="open_fullscreen()">Fullscreen</a></div>
								<div class="social-share"><a
										href="https://www.facebook.com/sharer/sharer.php?u=https://demo.cloudarcade.net/game/meme-miner"
										target="_blank">
										<img src="https://demo.cloudarcade.net/content/themes/default/images/facebook.png"
											alt="share" class="social-icon">
									</a></div>
								<div class="social-share"><a
										href="https://twitter.com/intent/tweet?url=https://demo.cloudarcade.net/game/meme-miner"
										target="_blank">
										<img src="https://demo.cloudarcade.net/content/themes/default/images/twitter.png"
											alt="share" class="social-icon">
									</a></div>
							</div>
						</div>
						<b>Description:</b>
						<div class="single-description">
							` + game.description + ` </div>
						<br>
						<b>Instructions:</b>
						<div class="single-instructions">
							` + game.instructions + ` </div>
						<br>
						<div class="single-leaderboard">
							<div id="content-leaderboard" class="table-responsive"></div>
						</div>
						<br>
						<b>Categories:</b>
						<p class="cat-list">
							<a href="https://demo.cloudarcade.net/category/clicker" class="cat-link">` + game.categories + `</a>
						</p>
					</div>
`

tag += `
                    <div class="col-md-3">
						<div class="sidebar">
`

container.map((item, i) => {
    if(item.title == "NEW GAMES" || item.title == "RANDOM GAMES") {
        tag += `
            <div class="widget">
                <h4 class="widget-title"><i class="`+item.title+`" aria-hidden="true"></i>`+item.title+`</h4>
                <div class="row">
        `
        item.items.map((subItem) => {
            tag += `
                    <div class="col-4 list-tile">
                        <a href="` + subItem.link +`">
                            <div class="list-game">
                                <div class="list-thumbnail"><img
                                        src="./assets/image/game/` + subItem.image +`"
                                        class="small-thumb" alt="` + subItem.name +`"></div>
                                <div class="list-content">
                                    <div class="list-title">` + subItem.name +`</div>
                                </div>
                            </div>
                        </a>
                    </div>
            `
        })
        tag += `</div></div>`;
    }
})

tag += `
						</div>
					</div>
				</div>
			</div>
		</div>
`
var bottomContainer = container.find((item) => {return item.title == "SIMILAR GAMES"});
tag += `<div class="bottom-container">
    <h3 class="item-title"><i class="` + bottomContainer.icon + `" aria-hidden="true"></i>` + bottomContainer.title + `</h3>
    <div class="row">
`;

bottomContainer.items.map((item) => {
    tag += `
        <div class="col-md-2 col-sm-3 col-4 item-grid">
            <a href="` + item.link +`">
                <div class="list-game">
                    <div class="list-thumbnail"><img
                            src="./assets/image/game/` + item.image + `"
                            class="small-thumb" alt="` + item.name + `"></div>
                    <div class="list-content">
                        <div class="star-rating text-center"><img
                                src="./assets/image/star/` + item.star + `.png"
                                alt="rating"></div>
                        <div class="list-title">` + item.name + `</div>
                    </div>
                </div>
            </a>
        </div>
    `
})

tag += `	
			</div>
		</div>
`

$('#game-container').html(tag);