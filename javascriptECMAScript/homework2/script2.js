console.log(Roomba.model);
console.log(Roomba.isFull);

Roomba.isUVLampOn = true;
Roomba.startCleaning.call(Roomba);
Roomba.switchUVLamp();

Roomba.goCharge();