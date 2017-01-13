import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

   
   employeeNumber= ['<','>','=','<=','>=','<>'];
   employeeName= ['=', "<>", "LIKE"];
   dateOfJoining= ['BETWEEN','<','>','=','<=','>='];
   commonArray= ['IS', 'NOT IS'];
   employees = {"details":[{ empnum: 123, empname: "Chris", dob: "12/12/12", des: "developer", band: "12" }]};
   result=[];
   argument
   json;
    constructor() { }

     // function to return the filtered employees 
     getdata(value: any, opr: any, args: any): string {
    
     console.log("arguments in getdata"+ value+opr+args)
     console.log(this.employees[0].empnum )
     console.log("empobj :"+this.employees[0])
     this.argument= parseInt(args);
     console.log("args"+this.argument);
     let result;

    if (value.length === 0) {
      return value;
    }
     
    if(value== 1){
      if(opr== '<'){
       console.log("if(opr== '<')")
        
         this.result.push(this.employees);

         console.log("result empobj"+ this.result[0].empnum)
         let ar= JSON.stringify(result)
         return ar
      }     
      }//outer if
    }//getdata
       
    
    
  }


