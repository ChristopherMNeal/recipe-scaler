function unitLogic(iterator, remainder, measurementArray, unitArray, smallestUnitArray) {
  const unit = Math.floor(remainder / smallestUnitArray[iterator]) + " " + unitArray[iterator];
  remainder = (remainder % smallestUnitArray[iterator]).toFixed(2);
  measurementArray.push(unit);
  return remainder;
}


function smallestUnit(convertedInput, unitArray, smallestUnitArray) {
  let measurementArray = [];
  let remainder = convertedInput;
  // console.log(" = " + );
  // console.log(" = " + );

  for (let i = smallestUnitArray.length; i >= 0; i--) {
    if (remainder >= smallestUnitArray[i] && remainder >= smallestUnitArray[0]) {
      remainder = unitLogic(i, remainder, measurementArray, unitArray, smallestUnitArray);
      for (let j = smallestUnitArray.length; j >= 0; j--) {
        if (remainder < smallestUnitArray[0]) {
          return measurementArray;
        } else if (remainder >= smallestUnitArray[j]) {
          remainder = unitLogic(j, remainder, measurementArray, unitArray, smallestUnitArray);
          for (let l = smallestUnitArray.length; l >= 0; l--) {
            if (remainder < smallestUnitArray[0]) {
              return measurementArray;
            } else if (remainder >= smallestUnitArray[l]) {
              remainder = unitLogic(l, remainder, measurementArray, unitArray, smallestUnitArray);
              for (let k = smallestUnitArray.length; k >= 0; k--) {
                if (remainder < smallestUnitArray[0]) {
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

function convertUtility(input, unit, scale, measureArray, multiplyArray) {
  convertInput = input * multiplyArray[measureArray.indexOf(unit)] * scale;
  if (convertInput < multiplyArray[0]) {
    return `${convertInput} ${measureArray[0]}`;
  } else {
    return smallestUnit(convertInput, measureArray, multiplyArray);
  }
}

function joinCheck(result) {
  if (typeof result === 'object') {
    return result.join(", ");
  } else {
    return result;
  }
}

function scalerLogic(input, unit, scale) {
  const volMetricMultiply = [1, 1000];
  const volMetricMeasure = ["ml", "liter"];
  const massMetricMultiply = [1, 1000, 1000000];
  const massMetricMeasure = ["gram", "kilogram", "metric ton"];
  const volUsMultiply = [0.62, 1.23, 2.46, 4.93, 14.79, 59, 78, 118, 236.6, 473.2, 946.3, 3785];
  const volUsMeasure = ["pinch", "quarter tsp", "half tsp", "teaspoon", "tablespoon", "quarter cup", "third cup", "half cup", "cup", "pint", "quart", "gallon", "ton"];
  const massUsMultiply = [3.54, 7.09, 14.17, 28.35, 453.59, 907185];
  const massUsMeasure = ["eighth ounce", "quarter ounce", "half ounce", "ounce", "pound", "ton"];
  let result = 0;
  if (volMetricMeasure.indexOf(unit) != -1) {
    result = convertUtility(input, unit, scale, volMetricMeasure, volMetricMultiply)
  } else if (volUsMeasure.indexOf(unit) != -1) {
    result = convertUtility(input, unit, scale, volUsMeasure, volUsMultiply)
  } else if (massMetricMeasure.indexOf(unit) != -1) {
    result = convertUtility(input, unit, scale, massMetricMeasure, massMetricMultiply)
  } else if (massUsMeasure.indexOf(unit) != -1) {
    result = convertUtility(input, unit, scale, massUsMeasure, massUsMultiply)
  } else if (unit === null) {
    result = "";
  } else {
    result = (input * scale) + " " + unit;
  }
  return joinCheck(result);
}