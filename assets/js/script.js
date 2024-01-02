class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    showStats() {
        return `${this.name}, ${this.age} years - class: ${this.type}.`;
    }
    attack() {
        let outputAttack = document.querySelector(".outputAttack");
        let response;
        if (this.type === "sorcerer" || this.type === "Sorcerer") {
            response = `${this.name} uses magic!`;
        } else if (this.type === "knight" || this.type === "Knight") {
            response = `${this.name} uses the master sword!`;
        } else if (this.type === "monk" || this.type === "Monk") {
            response = `${this.name} uses ancient martial art`;
        } else if (this.type == "ninja" || this.type == "ninja") {
            response = `${this.name} uses shuriken`;
        } else {
            response = `${this.name} doesn't attack!`
        }
        outputAttack.innerHTML = `<br>${response}`;
    }
}

function begin () {
    let output = document.querySelector(".output");

    let name = window.prompt("What's your name?");
    let age = window.prompt("What's your age?");
    let type = window.prompt("What's your type / class (sorcerer, knight, monk or ninja)?");

    ourHero = new Hero(name, age, type);
    output.innerHTML = `<h3>${ourHero.showStats()}</h3><br><button onclick='ourHero.attack()'>Attack!!!</button>`;
}