function recept(titel){
    this.titel = titel
    this.ingredienten = []
    this.log = function(){
        console.log("De ingredienten voor " + this.titel + " te maken zijn: " + this.ingredienten)
    }
    this.voegToe = function(ingredient){
        this.ingredienten.push(ingredient)
    }

}


let vol_au_vent = new recept("vol-au-vent");
vol_au_vent.voegToe("Kip")
vol_au_vent.voegToe("Room")
vol_au_vent.voegToe("gehakt")
vol_au_vent.voegToe("melk")
vol_au_vent.voegToe("bloem")

vol_au_vent.log("")

// nu als een object litteral

let mijnRecept = {
    titel:"Lasagna",
    ingredienten : [],
    log: function(){
        console.log(this.ingredienten)
    },
    voegtoe: function(ingredient){
        this.ingredienten.push(ingredient)
    }

}

mijnRecept.voegtoe("tomaat")
mijnRecept.voegtoe("kaas")
mijnRecept.voegtoe("saus")
mijnRecept.log()

//class recept

class recept1{
    constructor(t){
        this.titel = t
        this.ingredienten = []
    }

    Log(){
        console.log(this.ingredienten)
    }
    voegToe(ingredient){
        this.ingredienten.push(ingredient)
    }
}

let appelflap = new recept1("appelflap")
appelflap.voegToe("appels")
appelflap.voegToe("deeg")
appelflap.Log()





