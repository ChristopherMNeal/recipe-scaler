const volUnitArray = ["ml", "quarterTsp", "halfTsp", "tsp", "halfTbsp", "tbsp", "fluidOz/twoTbsp", "quarterCup", "thirdCup", "halfCup", "cup", "pint", "quart", "liter", "gallon"];
const volSmallestUnit = [1, 1.23, 2.46, 4.93, 7.37, 14.79, 29.57, 59, 78, 118, 236.6, 473.2, 946.3, 1000, 3785]

// I think this is working except for the breaks.  I think there needs to be only a break 
//at the end and in the if remainder < 1 statements.

function findUnit(convertedInput) {
  let remainder = 0;
  for (let i = volSmallestUnit.length; i > 0; i--) {
    if (convertedInput >= volSmallestUnit[i]) {
      const unitOne = Math.floor(convertedInput / volSmallestUnit[i]) + volUnitArray[i];
      remainder = convertedInput % volSmallestUnit[i];
      console.log(unitOne);
      break;
    }
    for (let k = volSmallestUnit.length; k > 0; k--) {
      if (remainder < 1) {
        break;
      } else if (remainder >= volSmallestUnit[i]) {
          const unitTwo = Math.floor(remainder / volSmallestUnit[j]) + volUnitArray[j];
          remainder = remainder % volSmallestUnit[j];
          console.log(unitTwo);
          break;
      }
      for (let k = volSmallestUnit.length; k > 0; k--) {
        if (remainder < 1) {
          break;
        } else if (remainder >= volSmallestUnit[k]) {
            const unitThree = Math.floor(remainder / volSmallestUnit[k]) + volUnitArray[k];
            remainder = remainder % volSmallestUnit[k];
            console.log(unitThree);
            break;
        }
      }
    }
  }
}

function scaler(input, unit, scale) {
  const convertInput = input * volSmallestUnit[indexOf(unit)] * scale;
  return findUnit(convertInput);
}

/*
input one volume amount and unit
input scale amount to 2 decimals
convert original amount to smallest unit
multiply by scale amount
convert to best option for units:
  largest unit that fits, next unit, next unit, fraction of last unit

eventually support: mass units
multi-unit input options
different output option:
  one measurement/best option
  to desired decimal place
  

*/