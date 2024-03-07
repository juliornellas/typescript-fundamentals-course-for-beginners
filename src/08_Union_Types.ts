function KgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") return weight * 1.3;
  else return parseInt(weight) * 1.3;
}

KgToLbs(13);
KgToLbs("13");
