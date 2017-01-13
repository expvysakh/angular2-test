import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FilterService  } from './filter.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers:[FilterService]

})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  
  //flags
  employeeNumberFlag1;
  employeeNumberFlag2;
  employeeNameFlag;
  employeeDate1;
  employeeDate2;
  employeeDesi1
  employeeDesi2
  employeeBand1
  employeeBand2
  buttonFlag
  
  //inputs from user
  empnumber 
  array= [];

  operatorfilter
  fieldfilter
  employeeNumber = ['<', '>', '=', '<=', '>=', '<>'];
  employeeName = ['=', "LIKE"];
  dateOfJoining = ['BETWEEN', '<', '>', '=', '<=', '>='];
  commonArray = ['IS', 'NOTIS'];
  fieldFilters = [{ id: 1, filter: 'EmployeeNumber' },
  { id: 2, filter: 'EmployeeName' },
  { id: 3, filter: 'DOJ' },
  { id: 4, filter: 'Designation' },
  { id: 5, filter: 'Band' }];
  employees = [{ empnum: "123", empname: "Chris", dob: "12/12/12", des: "developer", band: "12" }]

  constructor(private datafilter: FilterService){

  }

  ngOnInit() {
    this.employeeNumberFlag1 = false;
    this.employeeNumberFlag2 = false;
    this.employeeNameFlag = false;
    this.employeeDate1 = false;
    this.employeeDate2 = false;
    this.employeeDesi1 = false;
    this.employeeDesi2 = false;
    this.employeeBand1 = false;
    this.employeeBand2 = false;
    this.buttonFlag = false;
  }

  ngOnChanges() {
    console.log(" ngOnChanges: " + this.operatorfilter + this.fieldfilter)

  }

  ngDoCheck() {
    this.buttonFlag = true;
    if (this.fieldfilter == '1') {
      if (this.operatorfilter == "<" || this.operatorfilter == ">" || this.operatorfilter == "<=" || this.operatorfilter == ">=" || this.operatorfilter == "=") {
        this.employeeNumberFlag1 = true;
      }
      if (this.operatorfilter == "<>") {
        this.employeeNumberFlag2 = true;
      }
    }//fieldfilteremployeeNumber clause ends here

    if (this.fieldfilter == '2') {
      if (this.operatorfilter == '=' || this.operatorfilter == "LIKE") {
        this.employeeNameFlag = true;
      }

    }//fieldfilter employeeName clause ends here

    if (this.fieldfilter == '3') {
      if (this.operatorfilter == "<" || this.operatorfilter == ">" || this.operatorfilter == "<=" || this.operatorfilter == ">=" || this.operatorfilter == "=") {
        this.employeeDate1 = true;
      }
      if (this.operatorfilter == "BETWEEN") {
        this.employeeDate2 = true;
      }
     }//fieldfilter employee joining date clause ends here

     if (this.fieldfilter == '4'){
       if(this.operatorfilter == "IS"){
          this.employeeDesi1= true;
       }
       if(this.operatorfilter == "IS NOT"){
          this.employeeDesi2= true;
       }

     }//fieldfilter employee designation clause ends here 

     if (this.fieldfilter == '5'){
       if(this.operatorfilter == "IS"){
          this.employeeBand1= true;
       }
       if(this.operatorfilter == "IS NOT"){
          this.employeeBand2= true;
       }

     }//fieldfilter employee designation clause ends here 
  
}//ngDoCheck ends here

// function to return the filtered employees 
 Filter(){
   this.array= JSON.parse(this.datafilter.getdata(this.fieldfilter, this.operatorfilter, this.empnumber))
 }
}// AppComponent ends here


