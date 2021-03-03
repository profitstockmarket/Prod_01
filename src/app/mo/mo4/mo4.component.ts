import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mo4',
  templateUrl: './mo4.component.html',
  styleUrls: ['./mo4.component.css']
  
})
export class Mo4Component implements OnInit {

  constructor(private route2: Router,) { }

  ngOnInit(): void {
  }

  
    
    Home(){
    this.route2.navigate(["Home"]);
    
    }
  
  

}
