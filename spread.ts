const asia: Array<string> = ['India','Australia']
const europe: Array<string> = ['France','England','Germany']
console.log(asia)
console.log(europe)
// combining 2 arrays using spread operator
const myCountries: Array<string> = [...asia,...europe]
console.log(myCountries)