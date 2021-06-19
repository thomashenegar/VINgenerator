// This algo generates a Vehicle ID Number (VIN) using the following format: 17-digit number; the first digit is a 1 to represent manufacture in a NAFTA country (Canada, Mexico, and USA); the second digit is the fuel type (D=diesel; E=electric; G=gas; H=hybrid); the third and fourth digits are random numbers; the fifth and sixth digits are the country code where it was built (CD=Canada; MX=Mexico; US=United States); the seventh and eighth digits are random numbers; the ninth and tenth digits are the two-digit model year; the eleventh digit is the type of vehicle (C=car; M=motorcycle; S=SUV; T=truck; V=van); and the final six digits are random numbers. For example, 1G35US9221T459752 would be a gas-powered truck manufactured in the United States during the 2021 model year.
function generateVIN(country, fuel, type, year){
    nation=[];
    fuelType=[];
    vehicleType=[];
    prodYear=[];
    
    if(country.toLowerCase()=="us" || country.toLowerCase()=="usa" || country.toLowerCase()=="united states"){
        nation.push("US");
    }else if(country.toLowerCase()=="canada"){
        nation.push("CD");
    }else if(country.toLowerCase()=="mexico"){
        nation.push("MX");
    }else{
        console.log("Invalid country.");
        return;
    }
    if(fuel.toLowerCase()=="gas"){
        fuelType.push("G");
    }else if(fuel.toLowerCase()=="diesel"){
        fuelType.push("D");
    }else if(fuel.toLowerCase()=="electric"){
        fuelType.push("E");
    }else if(fuel.toLowerCase()=="hybrid"){
        fuelType.push("H");
    }else{
        console.log("Invalid fuel type.");
        return;
    }
    if(type.toLowerCase()=="car"){
        vehicleType.push("C");
    }else if(type.toLowerCase()=="motorcycle" || type.toLowerCase()=="bike"){
        vehicleType.push("M");
    }else if(type.toLowerCase()=="SUV"){
        vehicleType.push("S");
    }else if(type.toLowerCase()=="truck"){
        vehicleType.push("T");
    }else if(type.toLowerCase()=="van"){
        vehicleType.push("V");
    }else{
        console.log("Invalid vehicle type.");
        return;
    }
    if(year.length==2){
        prodYear.push(year);
    }else if(year.length==3){
        console.log("Invalid year. Year should be either four digits or two. For example, both '2009' or '09' are both acceptable.");
        return;
    }else if(year.length==4){
    prodYear.push(year.slice(2,4));
    }
    randNum1 = Math.random()*(99-10)+10;
    randNum2 = Math.random()*(99-10)+10;
    bigRandNum = Math.random()*(999999-111111)+111111;

    return `Your verified-available VIN is: 1${fuelType}${Math.floor(randNum1)}${nation}${Math.floor(randNum2)}${prodYear}${vehicleType}${Math.floor(bigRandNum)}`;
}
console.log(generateVIN("CaNada", "GAS", "MotoRcyCle", "2009"));