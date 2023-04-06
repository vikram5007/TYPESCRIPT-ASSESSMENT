abstract class Electricity_bill{
    public rate:number;
    public units:number;

    constructor(r:number,units:number){
        this.rate=r;
        this.units=units;

    }

    public abstract bill_details():number;

    
}

class Domestic extends Electricity_bill{
    constructor(r:number,units:number){
       
        super(r,units);
    }
    public bill_details():any{
        console.log("THE TOTAL BILL FOR DOMESTIC USE IS " + (this.rate)*(this.units));

    }


    }


class Commercial extends Electricity_bill{
        constructor(r:number,units:number){
           
            super(r,units);
        }
        public bill_details():any{
            console.log("THE TOTAL BILL FOR COMMERCIAL USE IS " + (this.rate)*(this.units));
    
        }
    
    
        }

var dom=new Domestic(5,250);
dom.bill_details();

var com=new Commercial(10,250);
com.bill_details();



