//Custom Type
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "Tiradentes",
  retire: (date: Date) => {
    console.log(date);
  },
};
