interface Person{
    height: string,
    gender: string,
    age: number,
    fullname: string,
    address: string
}
const person: Person = {
    height: '5 8',
    gender: 'male',
    age: 25,
    fullname: 'Ajay Kumar',
    address: 'Delhi',
}
// Extract specific properties
// Get just the age, fullname
const { age, fullname } = person
console.log(age,fullname)