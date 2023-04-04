const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "black");
const motorcycle = createVehicle("motorcycle", 2, "blue");
const truck = createVehicle("truck", 4, "grey");

const myVehicles = [car, motorcycle, truck];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

motorcycle.needsRepair = true;
truck.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";

  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some love. <br>It has ${vehicle.numWheels} wheels and is ${vehicle.color}.`;
    repairList.append(li);
  }
});
