import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  //template: '<h1>Hello</h1>',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
   
  @Input() product ;
  @Output() noti=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}