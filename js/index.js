const createDiv = document.querySelector("#create-monster");
const monsterContainer = document.querySelector("#monster-container");
const backButton = document.querySelector("#back");
const forwardButton = document.querySelector("#forward");

let page = 1;

document.addEventListener("DOMContentLoaded", () => {
    MonsterAPI.getMonsters(50, page)
})

backButton.addEventListener("click", () => {
    page --;
    MonsterAPI.getMonsters(50, page)
})

forwardButton.addEventListener("click", () => {
    page ++;
    MonsterAPI.getMonsters(50, page)
})

createDiv.innerHTML = `
    <form>
        <input type="text" id="name-input" placeholder="name..."></input>
        <input type="text" id="age-input" placeholder="age..."></input>
        <input type="text" id="description-input" placeholder="description..."></input>
        <input type="submit" value="Create"></input
    </form>
`

createDiv.addEventListener("submit", (e) => {
    e.preventDefault();
    MonsterAPI.create({
        name: document.querySelector("#name-input").value,
        age: document.querySelector("#age-input").value,
        description: document.querySelector("#description-input").value,
    });
    e.target.reset();
})