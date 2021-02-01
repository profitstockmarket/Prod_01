import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registernew',
  templateUrl: './registernew.component.html',
  styleUrls: ['./registernew.component.css']
})
export class RegisternewComponent implements OnInit {
  firstname: any="";
  lastname:any="";
  emailid: any="";
  dob: any="" ;
  password:any="";
  field1: any="" ;
  field2: any="" ;
  field3: any="" ;
  field4: any="" ;
  field5: any="" ;

  constructor() { }

  ngOnInit(): void {
  }

}
