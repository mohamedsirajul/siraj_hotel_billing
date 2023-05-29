import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  quantity: any;
  tempval:any;


  constructor(public dialogRef: MatDialogRef<QuantityComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
  }

  changeName(event: Event) {
    this.quantity=Number(
      (<HTMLInputElement>event.target).value
    );
  }
  myEvent(evt:any){
    if(this.quantity>0) {
      this.tempval={id:this.data['id'],quantity:this.quantity}
      console.log(this.tempval);
      console.log(this.quantity);
      
      this.dialogRef.close(this.tempval);

    }
  }
  okey(){
    if(this.quantity>0) {
      this.tempval={id:this.data['id'],quantity:this.quantity}
      this.dialogRef.close(this.tempval);
      console.log(this.tempval);
      
    }
  }
  close(){
      this.dialogRef.close();
  }
}

