const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const reg = /\b[^aA\s]{6,}\b/g;
const matches = text.match(reg);
console.log(matches);