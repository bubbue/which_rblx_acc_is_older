// there might not be every1... it's pretty tiring...
// for 2007 users i tried to save everyone
// for 2008 users... there's 300+ users, so i'm going to save only these, that are active, are pretty important to ROBLOX history or are just very important (not trying to hurt anyone, fr)
// according to ROBLOX wiki page
// there's small amount of terminated accounts. i just found the way to get their creation date. a few, because now imagine searching for every single terminated one...
const accounts = [
    { name: "Admin", date: new Date("2004-06-30") },
    { name: "david.baszucki", date: new Date("2004-07-01") },
    { name: "qa", date: new Date("2004-06-30") },
    { name: "Toolbox", date: new Date("2004-07-07") },
    { name: "erik.cassel", date: new Date("2004-07-02") },
    { name: "Todd", date: new Date("2004-07-13") },
    { name: "Keith", date: new Date("2004-07-20") },
    { name: "loduha", date: new Date("2004-07-21") },
    { name: "greg", date: new Date("2004-07-23") },
	{ name: "Matt", date: new Date("2004-07-23") },
	{ name: "Rich", date: new Date("2004-08-17") },
	{ name: "Cuyler", date: new Date("2005-02-23") },
	{ name: "Scott", date: new Date("2005-02-23") },
	{ name: "John Doe", date: new Date("2005-06-25") },
	{ name: "Jane Doe", date: new Date("2005-06-25") },
	{ name: "morgan", date: new Date("2005-02-23") },
	{ name: "nueva1", date: new Date("2005-02-18") },
	{ name: "sean", date: new Date("2005-06-02") },
	{ name: "test", date: new Date("2005-05-16") },
	{ name: "Abyss", date: new Date("2006-08-20") },
	{ name: "amanda", date: new Date("2006-11-21") },
	{ name: "Anamius", date: new Date("2006-11-29") },
	{ name: "are14", date: new Date("2006-11-30") },
	{ name: "are92", date: new Date("2006-11-30") },
	{ name: "Bob", date: new Date("2006-07-21") },
	{ name: "brickmason", date: new Date("2006-03-17") },
	{ name: "Drwaffles", date: new Date("2006-12-23") },
	{ name: "FFJosh", date: new Date("2006-08-16") },
	{ name: "nueva_3", date: new Date("2006-08-16") },
	{ name: "Kanaju", date: new Date("2006-09-12") },
	{ name: "Kirigi", date: new Date("2006-07-31") },
	{ name: "Koopa", date: new Date("2006-11-07") },
	{ name: "Leeav", date: new Date("2006-09-07") },
	{ name: "Matt Dusek", date: new Date("2006-08-02") },
	{ name: "PokerGod", date: new Date("2006-10-21") },
	{ name: "Rebreb97", date: new Date("2006-08-18") },
	{ name: "Reverse_Polarity", date: new Date("2006-08-18") },
	{ name: "Robloxopolis", date: new Date("2006-11-20") },
	{ name: "Rocks25", date: new Date("2006-09-03") },
	{ name: "Rombom", date: new Date("2006-12-11") },
	{ name: "Rombom", date: new Date("2006-12-11") },
	{ name: "Shedletsky", date: new Date("2006-06-22") },
	{ name: "tie it up", date: new Date("2006-11-08") },
	{ name: "Vexedly", date: new Date("2006-11-08") },
	{ name: "alexnewtron", date: new Date("2007-12-15") },
	{ name: "Are31", date: new Date("2007-11-10") },
	{ name: "brayden99", date: new Date("2007-09-30") },
	{ name: "Bandites", date: new Date("2007-09-22") },
	{ name: "bunnybunn263", date: new Date("2007-09-13") },
	{ name: "callmehbob", date: new Date("2007-06-12") },
	{ name: "CaptainKF", date: new Date("2007-09-03") },
	{ name: "cheeseandcakejuice", date: new Date("2007-09-28") },
	{ name: "ChadTheCreator", date: new Date("2007-12-10") },
	{ name: "cheesypop", date: new Date("2007-07-13") },
	{ name: "cheese20", date: new Date("2007-11-16") },
	{ name: "clockwork", date: new Date("2007-04-01") },
	{ name: "der4", date: new Date("2007-11-23") },
	{ name: "Django136", date: new Date("2007-07-28") },
	{ name: "docstrange", date: new Date("2007-11-29") },
	{ name: "Dued1", date: new Date("2007-10-27") },
	{ name: "earth100", date: new Date("2007-12-13") },
	{ name: "EnviousSlayer", date: new Date("2007-12-03") },
	{ name: "Faave", date: new Date("2007-04-19") },
	{ name: "Fleskhjerta", date: new Date("2007-02-24") },
	{ name: "Zora560", date: new Date("2007-02-25") },
	{ name: "Hicup789", date: new Date("2007-07-05") },
	{ name: "HolyMac", date: new Date("2007-06-16") },
	{ name: "hoshpup", date: new Date("2007-12-20") },
	{ name: "Ice7", date: new Date("2007-06-26") },
	{ name: "Irvin", date: new Date("2007-07-30") },
	{ name: "JJ5x5", date: new Date("2007-05-15") },
	{ name: "JoshJosh117", date: new Date("2007-07-22") },
	{ name: "Justgoaway1", date: new Date("2007-06-21") },
	{ name: "marinusss", date: new Date("2007-07-06") },
	{ name: "mathchamp", date: new Date("2007-10-22") },
	{ name: "maxxz", date: new Date("2007-11-28") },
	{ name: "Megaman766", date: new Date("2007-05-13") },
	{ name: "memi", date: new Date("2007-05-20") },
	{ name: "Minish", date: new Date("2007-12-27") },
	{ name: "Murteenee", date: new Date("2007-09-02") },
	{ name: "Muscle_God", date: new Date("2007-05-17") },
	{ name: "myrkrwarrior", date: new Date("2007-05-26") },
	{ name: "Naxic", date: new Date("2007-10-25") },
	{ name: "NERF", date: new Date("2007-10-05") },
	{ name: "NintendoZACHERY", date: new Date("2007-06-18") },
	{ name: "noob007", date: new Date("2007-12-04") },
	{ name: "Noobertuber", date: new Date("2007-01-17") },
	{ name: "NWSpacek", date: new Date("2007-10-20") },
	{ name: "Papasmurf", date: new Date("2007-09-03") },
	{ name: "PeerPants", date: new Date("2007-11-09") },
	{ name: "PeZsmistic", date: new Date("2007-12-14") },
	{ name: "Pheedy", date: new Date("2007-08-05") },
	{ name: "pixelpenguin", date: new Date("2007-05-07") },
	{ name: "Playrobot", date: new Date("2007-12-22") },
	{ name: "Polyhex", date: new Date("2007-07-07") },
	{ name: "PRG", date: new Date("2007-06-19") },
	{ name: "Ravenshield", date: new Date("2007-11-21") },
	{ name: "ReeseMcBlox", date: new Date("2007-09-04") },
	{ name: "Roebot56", date: new Date("2007-12-21") },
	{ name: "sharpTH", date: new Date("2007-04-29") },
	{ name: "SilentSwords", date: new Date("2007-06-22") },
	{ name: "sparttan", date: new Date("2007-12-26") },
	{ name: "Stickmasterluke", date: new Date("2007-10-23") },
	{ name: "stoecker", date: new Date("2007-03-23") },
	{ name: "stravant", date: new Date("2007-10-23") },
	{ name: "SuperSy", date: new Date("2007-08-12") },
	{ name: "taymaster", date: new Date("2007-09-12") },
	{ name: "Telamon", date: new Date("2007-01-31") },
	{ name: "TMNT", date: new Date("2007-09-16") },
	{ name: "ttt1107", date: new Date("2007-12-21") },
	{ name: "uglybad", date: new Date("2007-08-30") },
	{ name: "Vocal", date: new Date("2007-01-17") },
	{ name: "wierdoking", date: new Date("2007-09-16") },
	{ name: "Woof67", date: new Date("2007-12-22") },
	{ name: "wookong", date: new Date("2007-05-01") },
	{ name: "zshakoblah", date: new Date("2007-12-01") },
	{ name: "Zuka", date: new Date("2007-11-02") },
	{ name: "0Military0", date: new Date("2008-02-09") },
	{ name: "1billybob1", date: new Date("2008-06-15") },
	{ name: "34vlekje34", date: new Date("2008-07-29") },
	{ name: "Acejut", date: new Date("2008-02-09") },
	{ name: "AgentBloxxer", date: new Date("2008-02-22") },
	{ name: "Aidan12345", date: new Date("2008-03-10") },
	{ name: "Ajedi32", date: new Date("2008-05-21") },
	{ name: "ajhockeyfan", date: new Date("2008-11-30") },
	{ name: "Alberts", date: new Date("2008-07-28") },
	{ name: "andymewborn", date: new Date("2008-10-07") },
	{ name: "Aotrou", date: new Date("2008-04-27") },
	{ name: "arbirator", date: new Date("2008-08-07") },
	{ name: "Asleum", date: new Date("2008-11-07") },
	{ name: "Aurarus", date: new Date("2008-12-23") },
	{ name: "AxisAngles", date: new Date("2008-06-16") },
	{ name: "B0BBA", date: new Date("2008-08-04") },
	{ name: "Beebleblox", date: new Date("2008-08-30") },
	{ name: "benblue9", date: new Date("2008-08-12") },
	{ name: "BL00XER", date: new Date("2008-10-25") },
	{ name: "BlazerC", date: new Date("2008-03-13") },
	{ name: "XiaoXiaoMan", date: new Date("2008-01-17") },
	{ name: "Blotnik", date: new Date("2008-03-26") },
	{ name: "BOF", date: new Date("2008-06-07") },
	{ name: "Boopbot", date: new Date("2008-07-11") },
	{ name: "BrickBuilder74", date: new Date("2008-06-24") },
	{ name: "BrightEyes", date: new Date("2008-06-11") },
	{ name: "buildthomas", date: new Date("2008-12-05") },
	{ name: "Carbon131", date: new Date("2008-08-09") },
	{ name: "charcle", date: new Date("2008-10-24") },
	{ name: "Christina8787", date: new Date("2008-08-28") },
	{ name: "ClanAtlas", date: new Date("2008-08-09") },
	{ name: "CocoaWarrior", date: new Date("2008-10-10") },
	{ name: "CoderQwerty", date: new Date("2008-09-20") },
	{ name: "Collect1ve", date: new Date("2008-12-24") },
	{ name: "ColonelGraff", date: new Date("2008-09-28") },
	{ name: "ColourTheory", date: new Date("2008-04-15") },
	{ name: "conix", date: new Date("2008-04-05") },
	{ name: "coolbulls", date: new Date("2008-07-05") },
	{ name: "cowbear16", date: new Date("2008-08-04") },
	{ name: "Crazyblox", date: new Date("2008-03-16") },
	{ name: "Crykee", date: new Date("2008-10-21") },
	{ name: "culprits1", date: new Date("2008-05-10") },
	{ name: "Danedude34", date: new Date("2008-12-24") },
	{ name: "Defaultio", date: new Date("2008-10-23") },
	{ name: "Dayren", date: new Date("2008-08-28") },
	{ name: "dom2d2", date: new Date("2008-04-12") },
	{ name: "dominator42", date: new Date("2008-06-15") },
	{ name: "doneyes", date: new Date("2008-03-21") },
	{ name: "Edd_E", date: new Date("2008-10-25") },
	{ name: "EricThePianoGuy", date: new Date("2008-06-10") },
	{ name: "Excelerate", date: new Date("2008-04-04") },
	{ name: "Films", date: new Date("2008-11-01") },
	{ name: "ForeverDev", date: new Date("2008-11-01") },
	{ name: "Fractality", date: new Date("2008-11-18") },
	{ name: "FrankieTheDino", date: new Date("2008-07-27") },
	{ name: "Gusmanak", date: new Date("2008-04-02") },
	{ name: "GPR3", date: new Date("2008-05-27") },
	{ name: "Gordonrox24", date: new Date("2008-01-05") },
	{ name: "GollyGreg", date: new Date("2008-05-22") },
	{ name: "gkku", date: new Date("2008-05-03") },
	{ name: "GigsD4X", date: new Date("2008-06-07") },
	{ name: "Haggie125", date: new Date("2008-04-03") },
	{ name: "HenryDev", date: new Date("2008-12-20") },
	{ name: "hoontee", date: new Date("2008-05-29") },
	{ name: "InfiniteEffect", date: new Date("2008-10-18") },
	{ name: "Intrance", date: new Date("2008-12-04") },
	{ name: "Iceman629", date: new Date("2008-06-24") },
	{ name: "IronInforcer", date: new Date("2008-03-08") },
	{ name: "InkBleed", date: new Date("2008-11-13") },
	{ name: "jackintheblox", date: new Date("2008-06-20") },
	{ name: "jaredvaldez4", date: new Date("2008-07-06") },
	{ name: "JohnDrinkin", date: new Date("2008-07-04") },
	{ name: "JustJoshingYa", date: new Date("2008-11-30") },
	{ name: "lando64000", date: new Date("2008-09-22") },
	{ name: "lineridermasterman", date: new Date("2008-02-02") },
	{ name: "madattak", date: new Date("2008-08-07") },
	{ name: "Maelstronomer", date: new Date("2008-06-07") },
	{ name: "magic277", date: new Date("2008-09-10") },
	{ name: "MajorTom4321", date: new Date("2008-09-21") },
	{ name: "MarioMario54321", date: new Date("2008-06-24") },
	{ name: "masterBlock", date: new Date("2008-02-19") },
	{ name: "MasterDaniel", date: new Date("2008-11-28") },
	{ name: "MAXfirebrand", date: new Date("2008-05-30") },
	{ name: "Samjjj", date: new Date("2008-04-22") },
	{ name: "Stormcell", date: new Date("2008-09-28") },
	{ name: "Simbuilder", date: new Date("2008-09-19") },
	{ name: "smoothblockmodel", date: new Date("2008-09-27") },
	{ name: "sleitnick", date: new Date("2008-04-13") },
	{ name: "streetrida", date: new Date("2008-10-19") },
	{ name: "StuntDesigner", date: new Date("2008-12-21") },
	{ name: "QuintinityZero", date: new Date("2008-10-01") },
	{ name: "RBLXLucky", date: new Date("2008-04-20") },
	{ name: "RobloTim", date: new Date("2008-09-30") },
	{ name: "RiddlingSkull", date: new Date("2008-10-04") },
	{ name: "renderman", date: new Date("2008-09-23") },
	{ name: "MSE6", date: new Date("2008-03-07") }, 
	{ name: "mygame43", date: new Date("2008-08-24") }, 
	{ name: "Nexx", date: new Date("2008-07-20") }, 
	{ name: "Nicolas77", date: new Date("2008-07-29") }, 
	{ name: "Nikilis", date: new Date("2008-12-25") }, 
	{ name: "NoAlias", date: new Date("2008-04-25") }, 
	{ name: "opplo", date: new Date("2008-12-09") }, 
	{ name: "Orange12345", date: new Date("2008-10-14") },  
	{ name: "orange451", date: new Date("2008-08-22") }, 
	{ name: "Ozzypig", date: new Date("2008-03-27") }, 
	{ name: "PlanarTheorem", date: new Date("2008-01-03") }, 
	{ name: "Wsly", date: new Date("2008-12-26") }, 
	{ name: "TwentyTwoPilots", date: new Date("2008-08-07") }, 
	// i dont want to add more today... LET ME DO SOMETHING ELSE! IT'S ALREADY BEEN 7H!
];

const pickContainer = document.querySelector(".pick-container");
const submitButton = document.querySelector(".Submitting");
const resultText = document.querySelector(".hiddenshown");
let selected = null;
let choice1, choice2;

const sounds = {
    click: new Audio('Sounds/SWITCH3.ogg'),
    correct: new Audio('Sounds/victory.ogg'),
    wrong: new Audio('Sounds/collide.ogg')
};

function getRandomAccounts() {
    let shuffled = [...accounts];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    while (shuffled[0].date.getTime() === shuffled[1].date.getTime()) {
        let j = 2 + Math.floor(Math.random() * (shuffled.length - 2));
        [shuffled[1], shuffled[j]] = [shuffled[j], shuffled[1]];
    }
    return [shuffled[0], shuffled[1]];
}

function flashBackground(color) {
    const body = document.body;
    body.style.transition = "none";
    body.style.backgroundColor = color;
    body.offsetHeight;
    setTimeout(() => {
        body.style.transition = "background-color 1.5s ease";
        body.style.backgroundColor = "";
    }, 50);
}

function updateUI() {
    [choice1, choice2] = getRandomAccounts();
    const picks = document.querySelectorAll(".pick");
    picks.forEach((pick, index) => {
        const choice = index === 0 ? choice1 : choice2;
        pick.querySelector(".Image").src = `Images/${choice.name}.webp`;
        pick.querySelector(".Nickname").textContent = choice.name;
        // Ukrywamy datę, bo domyślnie ma być niewidoczna, nya~
        const dateElem = pick.querySelector(".date");
        dateElem.textContent = "";
        dateElem.style.display = "none";
        pick.classList.remove("chosen");
        pick.style.border = "1px solid white";
        pick.style.transition = "all 0.05s";
        pick.style.transform = "none";
    });
    resultText.style.display = "none";
    submitButton.disabled = false;
    selected = null;
}

document.querySelectorAll(".pick").forEach((pick, index) => {
    pick.addEventListener("click", () => {
		sounds.click.play()
		
        document.querySelectorAll(".pick").forEach(p => {
            p.classList.remove("chosen");
            p.style.transform = "none";
            p.style.border = "1px solid white";
        });
        pick.classList.add("chosen");
        pick.style.transform = "rotate(-5deg) scale(1.04) translateY(-1.1rem)";
        pick.style.border = "2px solid white";
        selected = index === 0 ? choice1 : choice2;
    });
});

submitButton.addEventListener("click", () => {
    if (!selected) return;
    submitButton.disabled = true;
    const correct = choice1.date < choice2.date ? choice1 : choice2;
    
    const picks = document.querySelectorAll(".pick");
    const selectedPick = selected.name === choice1.name ? picks[0] : picks[1];
    const correctPick = correct.name === choice1.name ? picks[0] : picks[1];
    const wrongPick = selectedPick !== correctPick ? selectedPick : null;
    
    picks.forEach((pick, index) => {
        const acc = index === 0 ? choice1 : choice2;
        const dateElem = pick.querySelector(".date");
        dateElem.textContent = acc.date.toDateString();
        dateElem.style.display = "block";
    });
    
    if (selected.name === correct.name) {
        sounds.correct.play();
        resultText.textContent = `Correct! ${correct.name} was created on ${correct.date.toDateString()}!`;
        flashBackground("darkgreen");
        correctPick.style.transform = "rotate(-4deg) scale(1.1) translateY(-1.1rem)";
        correctPick.style.border = "2px solid white";
    } else {
        sounds.wrong.play();
        resultText.textContent = `Wrong! The correct answer is ${correct.name}, created on ${correct.date.toDateString()}.`;
        flashBackground("darkred");
        correctPick.style.transform = "rotate(-3deg) scale(1.1) translateY(-1.1rem)";
        correctPick.style.border = "2px solid white";
        correctPick.classList.add("chosen");
        if (wrongPick) {
            wrongPick.classList.remove("chosen");
            wrongPick.style.transform = "none";
            wrongPick.style.border = "1px solid white";
        }
    }
    resultText.style.display = "block";
    
    setTimeout(updateUI, 3000);
});
updateUI();
