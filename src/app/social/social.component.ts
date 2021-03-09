import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
 
export class SocialComponent implements OnInit {
   
  constructor(private route1:Router) { }

  ngOnInit(): void {
  }
  Home(){
    this.route1.navigate(["Homepage"]);
    
    }
  team(){
    this.route1.navigate(["team"]);
    
    }
  socialmedia(){
    this.route1.navigate(["socialmedia"]);
    
    }
  ad(){
    this.route1.navigate(["ad"]);
    
    }
    
        

           
  
}
