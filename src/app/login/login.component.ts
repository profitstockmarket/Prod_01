import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    
  constructor(private route1: Router,public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }
  Home() {
    this.route1.navigate(["Homepage"]);

  }
  Social() {
    this.route1.navigate(["Social"]);

  }
  analysis() {
    this.route1.navigate(["StockAnalysis"]);

  }
  Portfolio() {
    this.route1.navigate(["Portfolio"]);
  }
  login() {
    this.route1.navigate(["login"]);
  }
  ValidateLogin() {
    this.route1.navigate(["Homepage"]);
  }

}
