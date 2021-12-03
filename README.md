# _Recipe Scaler_

#### By _**Christopher Neal**_

#### _An app to scale a recipe_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

## Description

_This page will scale a recipe by any desired amount and choose the best measurements. e.g. 1/4 cup flour times a 4 times batch = 1 cup flour (instead of 4 * 1/4 cups flour)._

## Setup/Installation Requirements

* _Clone the repository from GitHub_
* _Open the webpage in your preferred browser_
* _Use the console to run scaler() for each ingredient as follows `scaler(input, unit, scale)` with 'input' being the amount (e.g. `1` in "1 tsp"), 'unit' being the measurement (e.g. `tsp` in "1 tsp"), and 'scale' being the multiplier (e.g. `3` in make a 3-times batch)._

## Known Bugs

_3 ounces scaled once returns 2 ounce, 1 half ounce, 1 quarter ounce, 1 eighth ounce'.  Should return 3 ounces._
_6 ounces scaled once returns 5 ounce, 1 half ounce, 1 quarter ounce, 1 eighth ounce'.  Should return 6 ounces._
_7 ounces scaled once returns 7 ounce, 1 half ounce, 1 quarter ounce, 1 eighth ounce'.  Should return 7 ounces._

## Future Improvements

* _Add UI to input entire recipes_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _21 October 2021_ _Christopher Neal_