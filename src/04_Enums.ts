/**
 * ENUM
 * List of related constants
 */
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
// Use 'const' before 'enum' to generate a more optimized code
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
