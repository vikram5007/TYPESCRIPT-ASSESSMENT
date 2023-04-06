"use strict";
class Course {
    constructor(c_id, c_name) {
        this.course_id = c_id;
        this.course_name = c_name;
    }
    course_details() {
        console.log('COURSE ID IS : ' + this.course_id + '\n' + 'COURSE NAME IS : ' + this.course_name);
    }
}
class Employee extends Course {
    constructor(c_id, c_name, empid, emp_name, emp_des) {
        super(c_id, c_name);
        this.empId = empid;
        this.empName = emp_name;
        this.empDesignation = emp_des;
    }
    employee_details() {
        super.course_details();
        console.log('EMPLOYEE ID IS : ' + this.empId + '\n' + 'EMP NAME IS : ' + this.empName + '\n' + 'EMPLOYEE DESIGNATION IS : ' + this.empDesignation);
    }
}
class Admin extends Employee {
    constructor(cid, cname, empid, empname, empdes, adid, adname) {
        super(cid, cname, empid, empname, empdes);
        this.adminId = adid;
        this.adminName = adname;
    }
    admindetails() {
        super.course_details();
        super.employee_details();
        console.log("THE ADMIN ID IS : " + this.adminId + "\n" + "THE ADMIN NAME IS : " + this.adminName);
    }
}
var fin = new Admin(101, "PYTHON", 20105117, "VIKRAM", "TRAINEE", 10, "VASANTH");
fin.admindetails();
