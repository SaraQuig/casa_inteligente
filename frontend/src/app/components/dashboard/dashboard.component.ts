import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  template: `
    <button (click)="turnOnLed()">Turn On LED</button>
    <button (click)="turnOffLed()">Turn Off LED</button>
    <button (click)="turnOnMotor()">Turn On Motor</button>
    <button (click)="turnOffMotor()">Turn Off Motor</button>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private http: HttpClient) {}

  turnOnLed() {
    this.http.get('http://localhost:3000/led/on').subscribe();
  }

  turnOffLed() {
    this.http.get('http://localhost:3000/led/off').subscribe();
  }

  turnOnMotor() {
    this.http.get('http://localhost:3000/motor/on').subscribe();
  }

  turnOffMotor() {
    this.http.get('http://localhost:3000/motor/off').subscribe();
  }
}