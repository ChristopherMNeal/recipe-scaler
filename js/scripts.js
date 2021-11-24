const volUnitArray = ["ml", "quarterTsp", "halfTsp", "tsp", "halfTbsp", "tbsp", "fluidOz/twoTbsp", "quarterCup", "thirdCup", "halfCup", "cup", "pint", "quart", "liter", "gallon"];
const volSmallestUnit = [1, 1.23, 2.46, 4.93, 7.37, 14.79, 29.57, 59, 78, 118, 236.6, 473.2, 946.3, 1000, 3785]

// I think this is working except for the breaks.  I think there needs to be only a break 
//at the end and in the if remainder < 1 statements.

function findUnit(convertedInput) {
  let unitArray = [];
  let remainder = 1;
  for (let i = volSmallestUnit.length; i > 0; i--) {
    if (convertedInput >= volSmallestUnit[i] && remainder > 1) {
      const unitOne = Math.floor(convertedInput / volSmallestUnit[i]) + volUnitArray[i];
      remainder = convertedInput % volSmallestUnit[i];
      console.log("unit one = " + unitOne);
      console.log("remainder = " + remainder);
      unitArray.push(unitOne);
      for (let j = volSmallestUnit.length; j > 0; j--) {
        if (remainder < 1) {
          break;
        } else if (remainder >= volSmallestUnit[j]) {
            const unitTwo = Math.floor(remainder / volSmallestUnit[j]) + volUnitArray[j];
            remainder = remainder % volSmallestUnit[j];
            console.log("unit two = " + unitTwo);
            console.log("remainder = " + remainder);
            unitArray.push(unitTwo);
            for (let l = volSmallestUnit.length; l > 0; l--) {
              if (remainder < 1) {
                break;
              } else if (remainder >= volSmallestUnit[l]) {
                  const unitThree = Math.floor(remainder / volSmallestUnit[l]) + volUnitArray[l];
                  remainder = remainder % volSmallestUnit[l];
                  console.log("unit three = " + unitThree);
                  console.log("remainder = " + remainder);
                  unitArray.push(unitThree);
                  for (let k = volSmallestUnit.length; k > 0; k--) {
                    if (remainder < 1) {
                      break;
                    } else if (remainder >= volSmallestUnit[k]) {
                        const unitFour = Math.floor(remainder / volSmallestUnit[k]) + volUnitArray[k];
                        remainder = remainder % volSmallestUnit[k];
                        console.log("unit four = " + unitFour);
                        console.log("remainder = " + remainder);
                        unitArray.push(unitFour);
              }
        }
    }
          }
        }
      }
    }
  }
}

function scaler(input, unit, scale) {
  const convertInput = input * volSmallestUnit[volUnitArray.indexOf(unit)] * scale;
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