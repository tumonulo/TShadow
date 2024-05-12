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
    window.location.href = "https://tumonulo.github.io/TShadow/commands";
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

tshadow.addEventListener("mouseenter", colorChangeFontLightBlue);
tshadow.addEventListener("mouseleave", colorChangeFontWhite);
invite.addEventListener("mouseenter", colorChangeFontLightBlue);
invite.addEventListener("mouseleave", colorChangeFontWhite);
commands.addEventListener("mouseenter", colorChangeFontLightBlue);
commands.addEventListener("mouseleave", colorChangeFontWhite);
support.addEventListener("mouseenter", colorChangeFontLightBlue);
support.addEventListener("mouseleave", colorChangeFontWhite);
premium.addEventListener("mouseenter", colorChangeFontLightBlue);
premium.addEventListener("mouseleave", colorChangeFontWhite);
partners.addEventListener("mouseenter", colorChangeFontLightBlue);
partners.addEventListener("mouseleave", colorChangeFontWhite);
dashboard.addEventListener("mouseenter", colorChangeBackgroundBlackBlue);
dashboard.addEventListener("mouseleave", colorChangeBackgorundBlue);


function colorChangeFontLightBlue(event) {
    event.target.style.color = "rgb(104, 175, 250)";
}
function colorChangeFontWhite(event) {
    event.target.style.color = "white";
}
function colorChangeBackgroundBlackBlue(event) {
    event.target.style.backgroundColor = "rgba(1, 66, 136, 0.4)";
}
function colorChangeBackgorundBlue(event) {
    event.target.style.backgroundColor = "rgba(1, 52, 107, 0.4)";
}