// const volUnitArray = ["ml", "quarterTsp", "halfTsp", "tsp", "halfTbsp", "tbsp", "fluidOz/twoTbsp", "quarterCup", "thirdCup", "halfCup", "cup", "pint", "quart", "liter", "gallon"];
// const volSmallestUnit = [1, 1.23, 2.46, 4.93, 7.37, 14.79, 29.57, 59, 78, 118, 236.6, 473.2, 946.3, 1000, 3785]

const volUnitMlArray = [["ml", 1],["quarterTsp", 1.23],["halfTsp", 2.46],["tsp", 4.93],["halfTbsp", 7.37],["tbsp", 14.79],["fluidOz/twoTbsp", 29.57],["quarterCup", 59],["thirdCup", 78],["halfCup", 118],["cup", 236.6],["pint", 473.2],["quart", 946.3],["liter", 1000],["gallon", 3785]];

function findUnit(convertedInput) {
  let unitArray = [];
  let remainder = 1;
  const arrayLength = arrayLength;
  for (let i = arrayLength; i > 0; i--) {
    if (convertedInput >= volUnitMlArray[i][1] && remainder >= 1) {
      let currentMl = volUnitMlArray[i][1];
      let currentUnit = volUnitMlArray[i][0];
      const unitOne = Math.floor(convertedInput / currentMl) + currentUnit;
      remainder = convertedInput % currentMl;
      console.log("unit one = " + unitOne);
      console.log("remainder = " + remainder);
      unitArray.push(unitOne);
      for (let j = arrayLength; j > 0; j--) {
        if (remainder < 1) {
          break;
        } else if (remainder >= volUnitMlArray[j]) {
            let currentMl = volUnitMlArray[j][1];
            let currentUnit = volUnitMlArray[j][0];
            const unitTwo = Math.floor(remainder / currentMl) + currentUnit;
            remainder = remainder % currentMl;
            console.log("unit two = " + unitTwo);
            console.log("remainder = " + remainder);
            unitArray.push(unitTwo);
            for (let l = arrayLength; l > 0; l--) {
              if (remainder < 1) {
                break;
              } else if (remainder >= volUnitMlArray[l]) {
                  let currentMl = volUnitMlArray[l][1];
                  let currentUnit = volUnitMlArray[l][0];
                  const unitThree = Math.floor(remainder / currentMl) + currentUnit;
                  remainder = remainder % currentMl;
                  console.log("unit three = " + unitThree);
                  console.log("remainder = " + remainder);
                  unitArray.push(unitThree);
                  for (let k = arrayLength; k > 0; k--) {
                    if (remainder < 1) {
                      break;
                    } else if (remainder >= volUnitMlArray[k]) {
                        let currentMl = volUnitMlArray[k][1];
                        let currentUnit = volUnitMlArray[k][0];
                        const unitFour = Math.floor(remainder / currentMl) + currentUnit;
                        remainder = remainder % currentMl;
                        console.log("unit four = " + unitFour);
                        console.log("remainder = " + remainder);
                        unitArray.push(unitFour);
              }
        }
    }
          }
        }
      }
    } else {
      console.log(unitArray);
      return unitArray;
    }
  }
}

function scaler(input, unit, scale) {
  const convertInput = input * volUnitMlArray[volUnitMlArray.indexOf(unit)] * scale;
  return findUnit(convertInput);
}