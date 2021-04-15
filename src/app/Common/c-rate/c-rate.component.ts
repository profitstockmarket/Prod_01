import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-rate',
  templateUrl: './c-rate.component.html',
  styleUrls: ['./c-rate.component.css']
})

  

export class CRateComponent implements OnInit {

  currentRate = 0;
  avgStarrate5 = 0;
  avgStarrate4 = 0;
  avgStarrate3 = 0;
  avgStarrate2 = 0;
  avgStarrate1 = 0;
  
   

  constructor() { }

  ngOnInit(): void {
  }

 

  

}
