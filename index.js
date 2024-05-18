const elementinvitethebot = document.getElementById("invitethebot");
const elementsupportserver = document.getElementById("supportserver");

function TShadow() {
    if (!window.location.href === "https://tumonulo.github.io/TShadow/") {
        window.location.href = "https://tumonulo.github.io/TShadow/";
    }
}
function invitethebot() {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1226276748677873675&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fchannels%2F%40me%2F1226292854624751699&scope=bot";
}
function supportserver() {
    window.location.href = "https://discord.gg/HGZTRa3TMf";
}
function Dashboard() {
    window.location.href = "https://tumonulo.github.io/TShadow/dashboard";
}

elementinvitethebot.addEventListener("mouseenter", elementinvitethebotenter);
elementinvitethebot.addEventListener("mouseleave", elementinvitethebotleave);
elementsupportserver.addEventListener("mouseenter", elementsupportserverenter);
elementsupportserver.addEventListener("mouseleave", elementsupportserverleave);

function elementinvitethebotenter() {
    elementinvitethebot.style.backgroundColor = "rgb(35, 40, 43)";
    elementinvitethebot.style.color = "transparent";
}
function elementinvitethebotleave() {
    elementinvitethebot.style.backgroundColor = "rgb(2, 77, 151)";
    elementinvitethebot.style.color = "white";
}
function elementsupportserverenter() {
    elementsupportserver.style.backgroundColor = "white";
    elementsupportserver.style.color = "rgb(2, 77, 151)";
}
function elementsupportserverleave() {
    elementsupportserver.style.backgroundColor = "transparent";
    elementsupportserver.style.color = "white";
}