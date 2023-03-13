class Summer{
    #sum;

    constructor(){
        this.#sum = 0;
    }
    add(getal){
        this.#sum +=  getal;

    }

    getCurrentSum(){
        return this.#sum;
    }
}

const s1 = new Summer();
const s2 = new Summer();

s1.add(10);
s1.add(20);
s1.add(10);


s2.add(10);
s2.add(80);
s2.add(10);


document.write("Answer 1 = " + s1.getCurrentSum());
document.write("<br>");
document.write("Answer 2 = " + s2.getCurrentSum());