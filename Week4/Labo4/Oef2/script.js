class Screen {  
    #width;
    #height;
    #dimensions;

    constructor(width,height){
        this.#height = height;
        this.#width = width

    }

    get width(){
        return this.#width
    }

    set width(value){
        this.#width = value
    }
    
    get height(){
        return this.#height
    }

    set height(value){
        this.#height = value
    }
    get dimensions(){
        return this.#dimensions
    }

    set dimensions(value){
        this.#dimensions = value
    }



    diagonal() {          
        return Math.floor(Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)));
    }

    dimensions(definition) {
        let dimensions = definition.split('x')
        this.#width = parseInt(dimensions[0]);
        this.#height = parseInt(dimensions[1]);
        console.log(this.height + "x" + this.width)
    }
}

let screen = new Screen(0, 0);
screen.dimensions('500x300');
document.write(screen.diagonal());
console.log(screen.diagonal())
document.write("<br>")
screen.width = 400;
document.write(screen.diagonal()); // Should print 500