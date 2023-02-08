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
  class RoomDevice extends ElectronicDevice {
   constructor(name,power,room){
     super(name,power);
     this.room = room;
   }
  
   makeNoize(){ 
    if (this.isSwitchOn){
    console.log(`*Фоновая музыка*`)
     }
  }
  }
  
  class KitchenDevice extends RoomDevice{
    constructor(name, power, room, needWater)
    {
      super(name,power,room);
      this.isNeedWater = needWater;
    }
    
    giveWater(){
      if (this.isSwitchOn && this.isNeedWater ){
  
        console.log (`${this.name} -  готовит ваш напиток`);
      } else if (this.isSwitchOn && !this.isNeedWater){
        console.log(`Лучше не заливать воду в ${this.name} `)
      }
    } 
  }
  
  
  const lamp = new ElectronicDevice("lamp",10),
        hoover = new ElectronicDevice("tv",120);
        
  
  const radio = new RoomDevice("radio",40,"bedroom"),
        laptop = new RoomDevice("laptop",80,"bedroom"),
        tv = new  RoomDevice("TV",80,"bedroom");
  
  const  coffeMachine = new KitchenDevice("coffemachine", 80, "kitchen", true),
         mixer = new KitchenDevice("cocktail's maker", 85, "kitchen", true),
         fridge = new KitchenDevice("fridge", 50, "kitchen", false);
  
  radio.switchOn()
  radio.makeNoize()
  
  lamp.switchOn()
  
  coffeMachine.switchOn()
  coffeMachine.giveWater()
  
  fridge.switchOn()
  fridge.giveWater()
  
  
  let getTotalPower = function(){
    console.log(`Сейчас потребляется ${laptop.getPower()+lamp.getPower() + tv.getPower()+ hoover.getPower() + radio.getPower()+ coffeMachine.getPower()+ fridge.getPower() + mixer.getPower()} Ватт`)
  };
  
  
  getTotalPower()
  
  
  
  