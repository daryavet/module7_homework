class ElectronicDevice {
  
    constructor(name,power)
    {
    this.name = name;
    this.power = power;
    this.isSwitchOn = false;
    }
    switchOn(){
       console.log(this.name + " is ON!");
       this.isSwitchOn = true;
    }
    getPower(){
      return this.isSwitchOn ? this.power : 0;
    }
   
  
  }
  class BedroomDevice extends ElectronicDevice {
   
  
   makeNoize(){ 
    if (this.isSwitchOn){
    console.log(`*Фоновая музыка*`)
     }
  }
  }
  
    
  
  
  const laptop = new ElectronicDevice("laptop",80),
        lamp = new ElectronicDevice("lamp",10),
        tv = new ElectronicDevice("tv",120),
        dishWasher = new ElectronicDevice("dishWasher", 100);
  
  const radio = new BedroomDevice("radio",40);
  
  
  radio.switchOn()
  radio.makeNoize()
  
  lamp.switchOn()
  
  tv.switchOn()
  
  
  let getTotalPower = function(){
    console.log(`Сейчас потребляется ${laptop.getPower()+lamp.getPower() + tv.getPower()+ dishWasher.getPower() + radio.getPower()} Ватт`)
  };
  
  
  getTotalPower()
  
  