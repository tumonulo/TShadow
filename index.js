const tshadow = document.getElementById("TShadow");
const invite = document.getElementById("Invite");
const commands = document.getElementById("Commands");
const support = document.getElementById("Support");
const premium = document.getElementById("Premium");
const partners = document.getElementById("Partners");
const dashboard = document.getElementById("Dashboard");

function TShadow() {
    if (!window.location.href === "https://tumonulo.github.io/TShadow/") {
        window.location.href = "https://tumonulo.github.io/TShadow/";
    }
}
function Invite() {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1226276748677873675&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fchannels%2F%40me%2F1226292854624751699&scope=bot";
}
function Commands() {
    
}
function Support() {
    window.location.href = "https://discord.gg/FZYM3SEFb6";
}
function Premium() {
    window.location.href = "https://patreon.com/TShadowPatreons";
}
function Partners() {
    
}
function Dashboard() {

}

tshadow.addEventListener("mouseenter", colorChangeLightBlue);
tshadow.addEventListener("mouseleave", colorChangeWhite);


function colorChangeLightBlue(event) {
    event.target.style.color = "rgb(148, 252, 252)";
}
function colorChangeWhite(event) {
    event.target.style.color = "white";
}