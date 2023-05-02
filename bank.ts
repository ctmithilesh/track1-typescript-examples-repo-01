class Bank{

    public bank_name: string;
    protected bank_manager: string


    constructor(b_name: string, b_manager: string){

            this.bank_name = b_name
            this.bank_manager = b_manager
    }
}
class Customer extends Bank{

    private cust_id: number;
    public cust_name: string;
    private cust_password: string ;
    readonly cust_pan_card: string; 


    constructor(
        c_id: number,
        c_name: string,
        cust_password: string,
        cust_pancard:string
    ){
        super("SBI","South Delhi")
        this.cust_id = c_id
        this.cust_name = c_name
        this.cust_password = cust_password
        this.cust_pan_card = cust_password
    }

}
class PuneBranch extends Bank{


}
const b1 = new Bank('SBI','Anil Kumar')
const c1 = new Customer(2423,"John Oliver",'admin123','AVP35235325')

