class Car{

    protected car_name: string
    public car_model: string
    private car_price: string 
    
    constructor(){
        this.car_name = "BMW X5"
        this.car_model = "2005"
        this.car_price = "25 lakhs"  
    }

    private start(){
        console.log('Car has started...')
    }
    private stop(){
        console.log('Car has stopped....')
    }
    public playHorn(){
        console.log('Play Horn....')
    }
    displayCarPrice(){
        console.log(`The car name is ${this.car_price}`)
    }

}
class BMW extends Car{

    
        view(){
            console.log(`The car price is ${this.car_name}`)
        }


}
const c1 = new Car()
c1.displayCarPrice()
const b1 = new BMW()
b1.view()
