//Literal has to be exact or specific value typed
let quantity: 13 = 13;

let quantity2: 13 | 33 = 33;

type Quantity = 50 | 100;

let quantity3: Quantity = 100;

type Metrics = "cm" | "inch";
