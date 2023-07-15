const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const temperatureInput = document.getElementById("temperature").value;
  const unitSelect = document.getElementById("unit");
  const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

  if (!temperatureInput) {
    alert("Please enter a temperature!");
    return;
  }

  const temperature = parseFloat(temperatureInput);

  if (isNaN(temperature)) {
    alert("Please enter a valid number!");
    return;
  }

  let convertedTemperature;
  let convertedUnit;

  if (selectedUnit === "celsius") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedUnit = "F";
  } else if (selectedUnit === "fahrenheit") {
    convertedTemperature = ((temperature - 32) * 5) / 9;
    convertedUnit = "C";
  }

  result.innerHTML = `${convertedTemperature.toFixed(2)} &deg;${convertedUnit}`;
});
