class Person{
    person_name: string
    address: string 

    constructor(p_name: string, address: string){
        this.person_name = p_name
        this.address = address
    }
    displayInfo(){
        console.log(`The person name is ${this.person_name}`)
        console.log(`The person name is ${this.address}`)
    }

}
// class object
// automatically the constructor is going to be called

const p1 = new Person('Amit Shah','New Delhi')
p1.displayInfo()


