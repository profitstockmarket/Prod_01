import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private route1: Router, public modalService1: NgbModal) { }

  ngOnInit(): void {
  }



  Portfolio() {
    this.route1.navigate(["Portfolio"]);
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

  login() {
    this.route1.navigate(["login"]);

  }
  profitquery() {
    this.route1.navigate(["profitquery"]);

  }

  open() {
    const modalRef = this.modalService1.open(LoginComponent);
    modalRef.componentInstance.name = 'World';
  }

}
