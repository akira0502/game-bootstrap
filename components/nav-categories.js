//---We will get this values from backend in the future---//
var navCategories = [
    {
        "name": ".IO",
        "link": ".io"
    }, {
        "name": "2 Player",
        "link": "2-player"
    }, {
        "name": "3D",
        "link": "3d"
    }, {
        "name": "Action",
        "link": "action"
    }, {
        "name": "Adventure",
        "link": "adventure"
    }, {
        "name": "Arcade",
        "link": "arcade"
    }, {
        "name": "Bejeweled",
        "link": "bejeweled"
    }, {
        "name": "Classics",
        "link": "classics"
    }, {
        "name": "Clicker",
        "link": "clicker"
    }, {
        "name": "Cooking",
        "link": "cooking"
    }, {
        "name": "Girls",
        "link": "girls"
    }, {
        "name": "Hypercasual",
        "link": "hypercasual"
    }, {
        "name": "InGame Purchase",
        "link": "ingame-purchase"
    }, {
        "name": "Multiplayer",
        "link": "multiplayer"
    }, {
        "name": "Puzzle",
        "link": "puzzle"
    }, {
        "name": "Puzzles",
        "link": "puzzles"
    }, {
        "name": "Racing",
        "link": "racing"
    }, {
        "name": "Shooting",
        "link": "shooting"
    }, {
        "name": "Social",
        "link": "social"
    }, {
        "name": "Sports",
        "link": "sports"
    }, {
        "name": "Stickman",
        "link": "stickman"
    }
];

var tag = "";

navCategories.map((item) => {
    tag += `
    <a href="https://demo.cloudarcade.net/category/`+ item.link +`">
        <li>`+ item.name +`</li>
    </a>
    `
})

$('#navCategories').html(
    `
    <div class="container">
        <nav class='greedy'>
            <ul class="links list-categories">
            `+ tag +`
            </ul> 
            <button>MORE</button>
            <ul class='hidden-links hidden'></ul>
        </nav>
    </div>
    `
)