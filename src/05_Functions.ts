//tsconfig.json
// Set 'noUnusedParameters' and 'noImplicitReturns' for functions
// Set 'noUnusedLocals' to variables inside functions
function calculateTax(income: number, taxYear: number = 2021): number {
  //   let x;
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

//Optional parameters, put '?' like 'taxYear?: number' or set a default value
calculateTax(13_000);
