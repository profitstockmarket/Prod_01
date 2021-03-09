import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private r1:Router) { }

  ngOnInit(): void {
  }
  
  social(){
    this.r1.navigate(["Social"]);
    
    }
  aboutus(){
    this.r1.navigate(["aboutus"]);
    
    }
  team(){
    this.r1.navigate(["team"]);
    
    }
  socialmedia(){
    this.r1.navigate(["socialmedia"]);
    
    }
  ad(){
    this.r1.navigate(["ad"]);
    
    }
  csr(){
    this.r1.navigate(["csr"]);
    
    }



}
