let vehicleInfo = [];

logVehicle = () =>{
    let vehicleType = document.getElementById("vehicleType").value;
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let registrationNumber = +document.getElementById("registrationNumber").value;
    let conditionOfVehicle = document.getElementById("conditionOfVehicle").value;

    vehicleInfo.push({vehicleType, make, model, registrationNumber, conditionOfVehicle});

    console.log(vehicleInfo)
    document.getElementById("vehicleLogForm").reset();
}