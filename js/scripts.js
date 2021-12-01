function unitLogic(iterator, remainder, measurementArray, unitArray, smallestUnitArray) {
  const unit = Math.floor(" " + remainder / smallestUnitArray[iterator]) + " " + unitArray[iterator];
  remainder = remainder % smallestUnitArray[iterator];
  measurementArray.push(unit);
  return remainder;
}


function smallestUnit(convertedInput, unitArray, smallestUnitArray) {
  let measurementArray = [];
  let remainder = convertedInput;
  for (let i = smallestUnitArray.length; i > 0; i--) {
    if (remainder >= smallestUnitArray[i] && remainder >= 1) {
      remainder = unitLogic(i, remainder, measurementArray, unitArray, smallestUnitArray);
      for (let j = smallestUnitArray.length; j > 0; j--) {
        if (remainder < 1 ) {
          return measurementArray;
        } else if (remainder >= smallestUnitArray[j]) {
          remainder = unitLogic(j, remainder, measurementArray, unitArray, smallestUnitArray);
          for (let l = smallestUnitArray.length; l > 0; l--) {
            if (remainder < 1) {
              return measurementArray;
            } else if (remainder >= smallestUnitArray[l]) {
              remainder = unitLogic(l, remainder, measurementArray, unitArray, smallestUnitArray);
              for (let k = smallestUnitArray.length; k > 0; k--) {
                if (remainder < 1) {
                  return measurementArray;
                } else if (remainder >= smallestUnitArray[k]) {
                  remainder = unitLogic(k, remainder, measurementArray, unitArray, smallestUnitArray);
                  return measurementArray;
                }
              }
            }
          }
        }
      }
    }
  }
}

function scalerLogic(input, unit, scale) {
  const volSmallestUnit = [0, 1, 1.23, 2.46, 4.93, 14.79, 59, 78, 118, 236.6, 473.2, 946.3, 1000, 3785];
  const volUnitArray = ["zero", "ml", "quarter tsp", "half tsp", "teaspoon", "tablespoon", "quarter cup", "third cup", "half cup", "cup", "pint", "quart", "liter", "gallon", "ton"];
  const massSmallestUnit = [0, 1, 28.35, 453.59, 1000, 907185];
  const massUnitArray = ["zero", "gram", "ounce", "pound", "kilogram", "ton"];
  let convertInput = 0;
  if (volUnitArray.indexOf(unit) != -1) {
    convertInput = input * volSmallestUnit[volUnitArray.indexOf(unit)] * scale;
    return smallestUnit(convertInput, volUnitArray, volSmallestUnit);
  } else if (massUnitArray.indexOf(unit) != -1) {
    convertInput = input * massSmallestUnit[massUnitArray.indexOf(unit)] * scale;
    return smallestUnit(convertInput, massUnitArray, massSmallestUnit);
  } else if (unit === null) {
    return "";
  } else {
    return input * scale + " " + unit;
  }
}