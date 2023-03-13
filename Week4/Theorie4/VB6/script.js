
/*
class Cat{
    #name;
    #sound = "meows";
    constructor(name){
        this.#name = name;
    }
    makeSound(){
        alert(this.#name + " " + this.#sound);
    }

}

const mycat = new Cat("Tom");
mycat.makeSound();

*/
class Animal{
    #name;
    #sound;
    constructor(name,sound){
        this.#name = name;
        this.#sound = sound
    }
    makeSound(){
        alert(this.#name + " " + this.#sound);
    }

}

class Cat extends Animal{
    constructor(name){
        super(name,"meows");
    }
}
class Vis extends Animal{
    constructor(name){
        super(name,"blub");
    }
}

const poes = new Cat("Ernie")
poes.makeSound();