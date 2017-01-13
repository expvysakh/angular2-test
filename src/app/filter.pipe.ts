import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
   employeeNumber= ['<','>','=','<=','>=','<>'];
   employeeName= ['=', "<>", "LIKE"];
   dateOfJoining= ['BETWEEN','<','>','=','<=','>='];
   commonArray= ['IS', 'NOT IS'];
  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    let result;
    for (let item of value) {
      if (item.match(args)) {
        result=item;
      }
    }
    
      if(result== 'EmployeeNumber'){
        return this.employeeNumber
      }

      if(result== 'EmployeeName'){
        return this.employeeName
      }

      if(result== 'DOJ'){
        return this.dateOfJoining
      }

      if(result== 'Designation' || result== 'Band'){
        return this.commonArray
      }
  }

}
