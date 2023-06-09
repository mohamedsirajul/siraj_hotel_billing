import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableComponent } from '../table.component';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  @Input() waiter= ""
  @Input() table= ""

  // public print() {
  //   window.print();
  // }
  dateTime=new Date();

  constructor(public dialogRef: MatDialogRef<PrintComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  

  ngOnInit(): void {
  }
 




}
