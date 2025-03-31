// might not have every1 on the database... i swear it's 11:32 PM i want to sleep... 2nd try-out E8 from english tomorrow... imma post it on github but i just want to finish it a bit... at least 2007...
// give me a break bro...
// 30.03.2025 - to Dued1, please. then continue

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
];

const pickContainer = document.querySelector(".pick-container");
const submitButton = document.querySelector(".Submitting");
const resultText = document.querySelector(".hiddenshown");
let selected = null;
let choice1, choice2;

function getRandomAccounts() {
    let shuffled;
    do {
        shuffled = [...accounts].sort(() => 0.5 - Math.random());
    } while (shuffled[0].date.getTime() === shuffled[1].date.getTime());
    return [shuffled[0], shuffled[1]];
}

function flashBackground(color) {
    const body = document.body;
    body.style.backgroundColor = color; // Instantly change color
    setTimeout(() => {
        body.style.transition = "background-color 1.5s ease";
        body.style.backgroundColor = "";
    }, 50); // Delay to ensure instant change before fading
}


function updateUI() {
    [choice1, choice2] = getRandomAccounts();
    const picks = document.querySelectorAll(".pick");
    picks[0].querySelector(".Image").src = `Images/${choice1.name}.webp`;
    picks[0].querySelector(".Nickname").textContent = choice1.name;
    picks[1].querySelector(".Image").src = `Images/${choice2.name}.webp`;
    picks[1].querySelector(".Nickname").textContent = choice2.name;
    selected = null;
    resultText.style.display = "none";
    document.querySelectorAll(".pick").forEach(p => {
        p.classList.remove("chosen");
        p.style.border = "1px solid white";
	p.style.transition = "all 0.05s";
        p.style.transform = "none";
    });
    submitButton.disabled = false; // Enable the submit button after reset
}

document.querySelectorAll(".pick").forEach((pick, index) => {
    pick.addEventListener("click", () => {
        document.querySelectorAll(".pick").forEach(p => {
            p.classList.remove("chosen");
	    p.style.transform = "none";
            p.style.border = "1px solid white";
        });
        pick.classList.add("chosen");
	pick.style.transform = "rotate(-5deg) scale(1.04)";
        pick.style.border = "2px solid white";
        selected = index === 0 ? choice1 : choice2;
    });
});

submitButton.addEventListener("click", () => {
    if (!selected) return;
    submitButton.disabled = true; // Disable the submit button after click
    const correct = choice1.date.getTime() < choice2.date.getTime() ? choice1 : choice2;
    if (selected.name === correct.name) {
        resultText.textContent = `Correct! ${correct.name} was created on ${correct.date.toDateString()}!`;
	flashBackground("darkgreen");
    } else {
        resultText.textContent = `Wrong! The correct answer is ${correct.name}, created on ${correct.date.toDateString()}.`;
	flashBackground("darkred");
    }
    resultText.style.display = "block";
    setTimeout(updateUI, 3000);
});

updateUI();
