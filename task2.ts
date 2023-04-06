class Course{
    public course_id:number;
    public course_name:string;

constructor(c_id:number,c_name:string){
    this.course_id=c_id;
    this.course_name=c_name;
}

public course_details():void{
    console.log('COURSE ID IS : ' + this.course_id + '\n' +'COURSE NAME IS : '+this.course_name);

}

}

class Employee extends Course{
    public  empId:number;
    empName:string;
    empDesignation:string;

constructor(c_id:number,c_name:string,empid:number,emp_name:string,emp_des:string){
    super(c_id,c_name);

    this.empId=empid;
    this.empName=emp_name;
    this.empDesignation=emp_des;



}
public employee_details():void{
    super.course_details();
    console.log('EMPLOYEE ID IS : ' + this.empId +'\n'+'EMP NAME IS : '+this.empName +'\n' + 'EMPLOYEE DESIGNATION IS : '+this.empDesignation);

}

}


class Admin extends Employee{
        public adminId:number;
        public adminName:string;


        constructor(cid:number,cname:string,empid:number,empname:string,empdes:string,adid:number,adname:string){
                super(cid,cname,empid,empname,empdes);
                this.adminId=adid;
                this.adminName=adname;
        }

        public admindetails():void{
            super.course_details();
            super.employee_details();
            console.log("THE ADMIN ID IS : "+this.adminId+"\n" + "THE ADMIN NAME IS : "+this.adminName);
        }

}

var fin=new Admin(101,"PYTHON",20105117,"VIKRAM","TRAINEE",10,"VASANTH");
fin.admindetails();



