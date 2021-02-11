class Monster {
    static all = [];

    constructor({name, age, description, id}) {
        this.name = name;
        this.age = age;
        this.description = description;
        this.id = id;

        this.element = document.createElement("div");
        Monster.all.push(this);
    }

    render() {
        this.element.innerHTML = `
            <h3>${this.name}</h3>
            <p>Age: ${this.age}</p>
            <p>Description: ${this.description}</p>
        `;
        return this.element;
    }

    addToDOM() {
        monsterContainer.appendChild(this.render());
    }
}

function buildMonsters(monsters) {
    monsters.forEach(monster => {
        const m = new Monster(monster)
        m.addToDOM();
    });
}