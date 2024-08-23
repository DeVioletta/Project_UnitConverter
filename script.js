const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el");
let pLength = document.getElementById("p-length")
let pVolume = document.getElementById("p-volume")
let pMass = document.getElementById("p-mass")


inputEl.addEventListener("input", ()=>{
    let inputValue = inputEl.value
    
    if (!inputValue || isNaN(inputValue)) {
        pLength.textContent = "Input a Number First";
        pVolume.textContent = "Input a Number First";
        pMass.textContent = "Input a Number First";
        return
    }

    let litersToGallons = inputValue * 0.2641720524;
    let meterToFeet = inputValue * 3.280839895;
    let kgToPounds = inputValue * 2.2046226218;

    pLength.textContent = 
        `${inputValue} meter = ${meterToFeet.toFixed(5)} feet | ${inputValue} feet = ${(1/meterToFeet).toFixed(5)} meter` 
    
    pVolume.textContent = 
        `${inputValue} liters = ${litersToGallons.toFixed(5)} gallons | ${inputValue} gallons = ${(1/litersToGallons).toFixed(5)} liters`

    pMass.textContent = 
        `${inputValue} kilogram = ${kgToPounds.toFixed(5)} pounds | ${inputValue} pounds = ${(1/kgToPounds).toFixed(5)} kilogram`

})
