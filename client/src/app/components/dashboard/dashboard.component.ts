import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  localUser: string;
  title: string;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.fetchDashBoard();
    this.title = "The Retail Store Discounts";
  }

  fetchDashBoard() {
    this.authService.getDashBoard().subscribe(data => {
      this.localUser = data.name;
    });
  }
  onHandleSubmit(form: NgForm) {
    let Amount = {
      Amount: form.value.Amount,
    };

  }
}
