function ElectronicDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isSwitchOn = false;
    this.switchOn = function(){
      console.log(this.name + " is ON!");
      this.isSwitchOn = true;
    }
    this.getPower =function (){
     return this.isSwitchOn ? this.power : 0; 
    }
  } 
  
  
  const tv = new ElectronicDevice("tv", 100);
  tv.room = "bedroom";
  
  const kitchenTv = Object.create(tv);
  kitchenTv.power = 70;
  kitchenTv.name = "TV on kitchen";
  kitchenTv.size = "small";
  kitchenTv.room = "kitchen";
  
  const radio = new ElectronicDevice("radio", 20);
  radio.makeNoize = function (){
  radio.room = "kitchen"
    if (this.switchOn){
      console.log(`*Фоновая музыка*`)
    }
  }
  const coffeMachine  = new ElectronicDevice("coffe machine", 80);
   coffeMachine.makeCoffe = function(){
     if (this.switchOn) {
       console.log(`${this.name} -  готовит кофе`)
     }
   }
  
  tv.switchOn()
  
  kitchenTv.switchOn()
  
  radio.switchOn()
  radio.makeNoize()
  
  let getTotalPower = function(){
    console.log(`Сейчас потребляется ${tv.getPower() + kitchenTv.getPower()+radio.getPower() + coffeMachine.getPower()} Ватт`)
  }
  
  
  getTotalPower()