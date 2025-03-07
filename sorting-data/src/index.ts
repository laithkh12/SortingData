import { SortData } from "./SortData";
import { Numbers } from "./Numbers";
import { Strings } from "./Strings";

const dateArray = [
  new Date(2100, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

const years = dateArray.map((date) => {
  return date.getFullYear();
});

const numbersData = new Numbers(years);
numbersData.sort();
console.log(numbersData);

const stringData = new Strings("vdGryF");
stringData.sort();
console.log(stringData.str);
