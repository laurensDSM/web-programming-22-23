  
  function createPersoon(vr,ac,le){
  this.voornaam= vr
  this.achternaam=ac
  this.leeftijd=le

  }

  let persoon1 = new createPersoon("laurens","Koen",20)

  let persoon2 = new createPersoon("tom","kalf3",0)

  console.log(persoon1.achternaam)
  console.log(Object.keys(persoon1)) // lijst van alle propteries
  console.log(persoon2)
  console.log(typeof(persoon1.leeftijd)) // het type 


  //object literals

  let persoon3= {
    voornaam: "Pieter",
    achternaam : "Oei",
    leeftijd: 20,
    print : function(){
        console.log(this.voornaam + " " + this.achternaam)
    }
  }
persoon3.print() 