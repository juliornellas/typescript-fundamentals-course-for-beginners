/**
 * Tuples are useful for 2 values, like key/value pairs.
 * More than that may cause confusion about what it is
 */

//Order of the type matters
let user: [number, string] = [1, "Pele"];

//There is a problem when use push
//You can add a third element and there is no complain about that
user.push(1);
