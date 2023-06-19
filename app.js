let calculatetemp = () => {
  // Defining variables
  let tempvalue = document.getElementById("temp").value;
  tempvalue = Number(tempvalue);

  let selectedtemp = document.getElementById("diff_temp").value;
  let result = document.getElementById("result");

  //   Temperature functions
  let celtofahr = (cel) => {
    let fahr = Math.round((cel * 9) / 5 + 32);
    return fahr;
  };

  let celtokel = (cel) => {
    let kel = cel + 273.15;
    return kel;
  };

  let fahrtocel = (fahr) => {
    let cel = Math.round(((fahr - 32) * 5) / 9);
    return cel;
  };

  let fahrtokel = (fahr) => {
    let kel = ((fahr - 32) * 5) / 9 + 273.15;
    let fix_kel = kel.toFixed(2);
    return fix_kel;
  };

  let keltocel = (kel) => {
    let cel = kel - 273.15;
    let fix_cel = cel.toFixed(2);
    return fix_cel;
  };

  let keltofahr = (kel) => {
    let fahr = ((kel - 273.15) * 9) / 5 + 32;
    let fix_fahr = fahr.toFixed(2);
    return fix_fahr;
  };

  //   Displaying result
  let result1;
  let result2;

  if (selectedtemp == "cel") {
    result1 = celtofahr(tempvalue);
    result2 = celtokel(tempvalue);

    result.innerHTML = `<p>${result1} °Fahrenheit <br /> ${result2} Kelvin`;
  } else if (selectedtemp == "fahr") {
    result1 = fahrtocel(tempvalue);
    result2 = fahrtokel(tempvalue);

    result.innerHTML = `<p>${result1} °Celsius <br /> ${result2} Kelvin`;
  } else {
    result1 = keltocel(tempvalue);
    result2 = keltofahr(tempvalue);

    result.innerHTML = `<p>${result1} °Celsius <br /> ${result2} °Fahrenheit`;
  }
  result.classList.remove("clear");
};

//   Clear Button

let clearbtn = document.getElementById("clear");

clearbtn.addEventListener("click", () => {
  let result = document.getElementById("result");
  let tempvalue = document.getElementById("temp");

  tempvalue.value = "";
  result.innerText = "";
});
