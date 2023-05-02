// Example: Function with Void Return Type
let result: number = 0
function addNum(x: number,y: number): void{
   result = x+y
}

addNum(100,500)
console.log(result)

// Example: Function with Number Return Type
function add(x: number, y: number): number{
    return x+y
}
const x = add(500,700)
console.log(x)

// Example: Function with String Return Type
function capitalize(myString: string): string{

        return myString.toUpperCase()
}
const y = capitalize("India got independence in 1947")
console.log(y)

// Example: Function with Array Return Type 
function printEvenNumTill20(): Array<number>{
    let numArray: Array<number> = []
    for(let i=2;i<=20;i +=2){
        numArray.push(i)
    }
    return numArray
}
const z = printEvenNumTill20()
console.log(z)


function profileDetails(name:string,address:string,contact:number,designation:string): object{

    let profileObject: object = {name,address,contact,designation}
    return profileObject
}
const profileData = profileDetails('John Oliver','New York',235235324,'Sr.Project Manager')
console.log(profileData)
