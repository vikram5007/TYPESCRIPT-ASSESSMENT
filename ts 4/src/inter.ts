interface Isavingsaccount{
    bal_amount:number
    interest:number
    balance():void;
}
interface ICurrentaccount{
    bal_amount:number
    balance():void;
}

class Displayer2 implements Isavingsaccount,ICurrentaccount{


    bal_amount: number;
    interest:number;
    acc_no:number;
    name:string


    constructor(acc:number,name:string,bal:number,int:number){
        this.acc_no=acc;
        this.name=name;
        this.bal_amount=bal;
        this.interest=int;

    }

    balance():any{
        console.log("helo ")
        if(this.interest==0)
        console.log('BALANCE OF THE A/C ' + this.acc_no +' IS ' +this.bal_amount)
        else{
            console.log('BALANCE OF THE A/C  ' + this.acc_no +' IS ' +this.bal_amount*this.interest)
        }
    }
}


var a=new Displayer2(20105117,'VIKRAM',20000,0);
a.balance();