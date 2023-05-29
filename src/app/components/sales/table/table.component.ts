import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
// import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { SalesComponent } from '../sales.component';
import { ClockComponent } from '../clock/clock.component';
import { QuantityComponent } from './quantity/quantity.component';
import { PrintComponent } from './print/print.component';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  id: number;
  amount: number;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() item = '';
  @Input() table = '';

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  dateTime: any;
  Time: any;

  ELEMENT_DATA: PeriodicElement[] = [
    { id: 1, name: 'Parotta', price: 10.0, quantity: 0, amount: 0.0 },
    { id: 2, name: 'Chicken Biriyani', price: 90.0, quantity: 0, amount: 0.0 },
    {
      id: 3,
      name: 'Chicken Fried Rice',
      price: 90.0,
      quantity: 0,
      amount: 0.0,
    },
    { id: 4, name: 'Chicken Noodles ', price: 70.0, quantity: 0, amount: 0.0 },
    { id: 5, name: 'Chappathi', price: 10.0, quantity: 0, amount: 0.0 },
    { id: 6, name: 'Chicken Parotta', price: 35.0, quantity: 0, amount: 0.0 },
    { id: 7, name: 'Egg Biriyani', price: 70.0, quantity: 0, amount: 0.0 },
    { id: 8, name: 'Egg Fried Rice', price: 70.0, quantity: 0, amount: 0.0 },
    { id: 9, name: 'Egg Noodles', price: 70.0, quantity: 0, amount: 0.0 },
    { id: 10, name: 'Chicken Naan', price: 50.0, quantity: 0, amount: 0.0 },
    { id: 11, name: 'Egg Parotta', price: 20.0, quantity: 0, amount: 0.0 },
    { id: 12, name: 'Beef Biriyani', price: 90.0, quantity: 0, amount: 0.0 },
    { id: 13, name: 'Beef Fried Rice', price: 90.0, quantity: 0, amount: 0.0 },
    { id: 14, name: 'Beef Noodles', price: 90, quantity: 0, amount: 0 },
    { id: 15, name: 'Butter Naan', price: 30, quantity: 0, amount: 0 },
    { id: 16, name: 'Butter Parotta', price: 20, quantity: 0, amount: 0 },
    {
      id: 17,
      name: 'Chicken Thandoori Full',
      price: 300,
      quantity: 0,
      amount: 0,
    },
    {
      id: 18,
      name: 'Chicken Thandoori half',
      price: 150,
      quantity: 0,
      amount: 0,
    },
    {
      id: 19,
      name: 'Chicken Thandoori Quarter',
      price: 75,
      quantity: 0,
      amount: 0,
    },
    { id: 20, name: 'Chicken Grill Full', price: 300, quantity: 0, amount: 0 },
    {
      id: 21,
      name: 'Chicken Kothu Parotta',
      price: 90,
      quantity: 0,
      amount: 0,
    },
    { id: 22, name: 'Egg Kothu Parotta', price: 70, quantity: 0, amount: 0 },
    { id: 22, name: 'Veg Kothu Parotta', price: 70, quantity: 0, amount: 0 },
    { id: 24, name: 'Veg Noodles ', price: 70, quantity: 0, amount: 0 },
    { id: 25, name: 'Veg Biriyani', price: 70, quantity: 0, amount: 0 },
    { id: 26, name: 'Veg Parotta', price: 25, quantity: 0, amount: 0 },
    { id: 27, name: 'veg Naan', price: 35, quantity: 0, amount: 0 },
    { id: 28, name: 'veg Fried Rice', price: 70, quantity: 0, amount: 0 },
    {
      id: 29,
      name: 'Chicken Cylon Parotta',
      price: 40,
      quantity: 0,
      amount: 0,
    },
    {
      id: 30,
      name: 'Thalappakatti Biriyani',
      price: 120,
      quantity: 0,
      amount: 0,
    },
    { id: 31, name: 'Coin Parotta', price: 30, quantity: 0, amount: 0 },
    { id: 32, name: 'Veech Parotta', price: 40, quantity: 0, amount: 0 },
    { id: 33, name: ' Chilli Parotta', price: 40, quantity: 0, amount: 0 },
    { id: 34, name: 'Bun Parotta', price: 30, quantity: 0, amount: 0 },
    { id: 35, name: 'Malabar Biriyani', price: 150, quantity: 0, amount: 0 },
    { id: 36, name: 'Mughlai Biriyani', price: 150, quantity: 0, amount: 0 },
    { id: 37, name: 'Keema Biriyani', price: 150, quantity: 0, amount: 0 },
    { id: 38, name: 'Panner Biriyani', price: 150, quantity: 0, amount: 0 },
    { id: 39, name: 'Chettinad Biriyani', price: 175, quantity: 0, amount: 0 },
    { id: 40, name: 'Malabar Biriyani', price: 300, quantity: 0, amount: 0 },
    { id: 41, name: 'Chicken Grill half', price: 150, quantity: 0, amount: 0 },
    {
      id: 42,
      name: 'Chicken Grill Quarter',
      price: 75,
      quantity: 0,
      amount: 0,
    },
    { id: 43, name: 'Wheat Parotta', price: 18, quantity: 0, amount: 0 },
    { id: 44, name: 'Parotta Fry ', price: 15, quantity: 0, amount: 0 },
    { id: 45, name: 'Mutton Cylon Parotta', price: 70, quantity: 0, amount: 0 },
    { id: 46, name: 'Mutton Biriyani', price: 135, quantity: 0, amount: 0 },
    {
      id: 47,
      name: 'Chicken Idiyappa Kothu',
      price: 120,
      quantity: 0,
      amount: 0,
    },
    {
      id: 48,
      name: 'Mutton Idiyappa Kothu',
      price: 140,
      quantity: 0,
      amount: 0,
    },
    { id: 49, name: 'Kal Dosa', price: 13, quantity: 0, amount: 0 },
    { id: 50, name: 'Spl Dosa', price: 20, quantity: 0, amount: 0 },
    { id: 51, name: 'Egg Dosa', price: 25, quantity: 0, amount: 0 },
    { id: 52, name: 'Chicken Curry Dosa', price: 40, quantity: 0, amount: 0 },
    { id: 53, name: 'Mutton Curry Dosa', price: 60, quantity: 0, amount: 0 },
    { id: 54, name: 'Rotti', price: 15, quantity: 0, amount: 0 },
    { id: 55, name: 'Dragon Chicken', price: 140, quantity: 0, amount: 0 },
    { id: 56, name: 'Prawn Thokku', price: 110, quantity: 0, amount: 0 },
    {
      id: 57,
      name: 'Panner Buttor Masala',
      price: 110,
      quantity: 0,
      amount: 0,
    },
    { id: 58, name: 'Honey Chicken', price: 130, quantity: 0, amount: 0 },
    { id: 59, name: 'Chicken Nuggets', price: 100, quantity: 0, amount: 0 },
    {
      id: 60,
      name: 'Singapure Fride Rice',
      price: 150,
      quantity: 0,
      amount: 0,
    },
  ];

  displayedColumns: string[] = [
    'id',
    'name',
    'quantity',
    'price',
    'amount',
    'action',
  ];
  dataSource = new MatTableDataSource([]);
  actualdata = {};
  data: any = [];
  clientProductForm: any;
  dataToDisplay: any;
  temp_id: any;
  temp_name: any;
  name: any;
  tot_amt: any;
  product_array: any;
  decription: any;
  gst: any;
  GST: any;
  new_gst: any;
  rupees: any;
  tot_pro: any;
  opt_1: any;
  tot_qnt: any;
  tot_product: any;
  tot_quantity: any;
  optionss: any;
  lastdata: any[] = [];
  totamount: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.myControl.value);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  amount: any;
  quantity: any;
  temp_data: any;
  product_name: any;
  options: string[] = [];
  myControl = new FormControl();
  filteredOption: Observable<string[]> | undefined;
  tot_data: any;

  getTotalAmount() {
    let tot_val = 0;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      tot_val = tot_val + this.dataSource.data[i]['amount'];
    }
    this.tot_amt = tot_val;
    return tot_val;
  }
  getTotalProdut() {
    let tot_pro = 0;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      tot_pro = this.data.length;
    }
    this.tot_product = tot_pro;
    return tot_pro;
  }
  getTotalQuantity() {
    let tot_qnt = 0;
    for (let i = 0; i < this.dataSource.data.length; i++) {
      tot_qnt = tot_qnt + this.dataSource.data[i]['quantity'];
    }
    this.tot_quantity = tot_qnt;
    return tot_qnt;
  }

  print_bill() {


    // let params = JSON.stringify(this.data)
    // let test=JSON.parse(params)
    // console.log(params);
    // console.log(test);

    this.http.post('http://localhost/phprestAPI/insert.php', this.lastdata).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );


    let waiter: any = this.item;
    let table: any = this.table;
    let totalamount: any = this.tot_amt;
    let totalproduct: any = this.tot_pro;
    let totalquantity: any = this.tot_qnt;

    let print: any = this.dataSource.data;
    console.log(this.table);
    this.rupees = '₹';
    this.GST = '5.00';
    this.new_gst = this.GST / 2;

    this.gst = (this.tot_amt * 5) / 100;
    console.log(this.gst);
    //  this.GST=this.GST/2;
    //  console.log(this.GST)
    let printContents,
      popupWin: Window | any,
      name_string,
      name,
      quantity_string,
      quantity,
      price_string,
      price,
      amount_string,
      amount;
    this.product_array = this.dataSource.data;
    if (this.product_array.length > 0) {
      let temp_name = [];
      // console.log(this.product_array)
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['name'] = this.product_array[i]['name'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_name.push(this.product_array[i]['name']);
      }

      // console.log(this.product_array)
      name_string = temp_name.toString();
      console.log(name_string);
      name = name_string.replaceAll(',', '<br>');

      let temp_quantity = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['quantity'] = this.product_array[i]['quantity'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_quantity.push(this.product_array[i]['quantity']);
      }

      quantity_string = temp_quantity.toString();
      console.log(quantity_string);
      quantity = quantity_string.replaceAll(',', '<br>');

      let temp_price = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['price'] = this.product_array[i]['price'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_price.push(this.product_array[i]['price']);
      }

      price_string = temp_price.toString();
      console.log(price_string);
      price = price_string.replaceAll(',', '<br>');

      let temp_amount = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['amount'] = this.product_array[i]['amount'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_amount.push(this.product_array[i]['amount']);
      }

      amount_string = temp_amount.toString();
      console.log(amount_string);
      amount = amount_string.replaceAll(',', '<br>');

      // pro.replaceAll(' aj ', '<br>');
      // pro_new=pro.replaceAll('aj','<br>')
      popupWin = window.open(
        '',
        '_blank',
        'top=0,left=0,height=auto,width=auto'
      );
      popupWin.document.open();
      popupWin.document.write(`
  <html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
@page { size: 72mm 120mm }
body.receipt .sheet { width: 120mm; height: 100mm }
@media print {
  body.receipt {
     width: 120mm
  } 
} 
    
 
  .tab{
    margin-bottom: -20px;

  }
  .header{
    margin-right:170px;
  }
 
  .hotel{
    font-size: 25px;
    text-align:center;
    margin-bottom: -16px;
  }
  .place{
    font-size: 15px;
    font-weight: 23px;
    margin-bottom: -16px;

    text-align:center;        
  }
  
  .phone{
    font-weight: 23px;
    font-size: 15px;
          text-align:center;        

  }
  .waiter{
    font-size: 15px;

  }
  
  .table{
    font-size: 15px;
    margin-left:114px;      
  }
  .date{
    font-size: 15px;
    margin-top: -33px;

  }
  .time{
    font-size: 15px;
    margin-left:185px; 
  }

  hr{
      border: none;
      border-top: 1px dashed;
      width: 100%;
  }
  .pro{
    font-size:17px;
    text-align:center;
    margin-left:5px;
  }
  .tab{
    
  }
  .total{
    font-size:20px;
    font-weight: bolder;
    margin-left:125px;
    hight:20px;
  }
  .quantity{
    margin-left:10px;
  }
  .amount{
    margin-left:10px;
  
  }
  .price{
    margin-right:20px;
    font-size:20px;


  }
  .name{
    margin-right:12px;
    font-size:12px;

  }
  td{
    font-size:10px;
    text-align:center;
  }
  

.gst{
  font-size: 12px;
  margin-left:15px;
}
.tabl{
  font-size:12px;
  margin-left:14px;
  
}

</style>
</head>
<body class="receipt"  onload="window.print();window.close()">
<div class="header">
<p class="hotel">HOTEL</p>
<P class="place">NO3,SOUTH STREET,PATEMANAGARAM</P>
<p class="phone">8056457791  ;  9976040756</p>
<table class="tab">
    <tr>
        <td>
<p class="waiter">WAITER:${this.item}</p></td>
<td>
<p class="table">TABLENO:${this.table}</p></td>
</tr>
</table>
<table>
<tr>
<td >
<p class="date">
${this.dateTime}
</p>
</td>
<p class="time">
${this.Time}
</p>
</tr>
</table>
<hr>
<table class="pro">
<tr>
<td >
<p class="name">
Name
</p>
<hr>
</td>
<td>
<p class="tabl">
Quantity
</p>
<hr>
</td>
<td>
<p class="tabl">
Price
</p>
<hr>
</td>
<td>
<p class="tabl">
Amount
</p>
<hr>
</td>
</tr>
<tr>
<td >
<p class:"name">
${name}
</p>
</td>
<td >
<p class:"quantity" >
${quantity}
</p>
</td>
<td >
<p class:"price">
${price}
</p>
</td>
<td >
<p class:"amount">
${amount}
</p>
</td>
</tr>
<tr>
<td>
<hr>
${this.tot_product}
</td>
<td>
<hr>

${this.tot_quantity}

</td>
<td>
</td>

<td class:"amt">
<hr>
${this.rupees}${this.tot_amt}.00
</td>
</table>

<hr>
<table class="tab">
<tr>
<td>
<p class="gst">
GST%
</p>
</td>
<td>
<p class="gst">
CGST%
</p>
</td>
<td>
<p class="gst">
CGST
</p>
</td>
<td>
<p class="gst">
SGST%
</p>
</td>
<td>
<p class="gst">
SGST
</p>

</td>
</tr>
<tr>
<td>
<p class="gst">
${this.GST}
</p>
</td>
<td>
<p class="gst">
${this.new_gst}
</p>
</td>
<td>
<p class="gst">
${this.gst}
</p>
</td>
<td>
<p class="gst">
${this.new_gst}
</p>
</td>
<td>
<p class="gst">
${this.gst}
</p>
</td>

</tr>
</table>
<br>
<hr>



<p class="total">${this.rupees}${this.tot_amt}</p></td>








</body>
</html>`);

      popupWin.document.close();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No Products',
      });
    }
  }

  kot_bill() {
    // window.print();
    let waiter: any = this.item;

    let table: any = this.table;
    let totalamount: any = this.tot_amt;
    let print: any = this.dataSource.data;

    let printContents, popupWin: Window | any, pro_string, pro, pro_new;
    this.product_array = this.dataSource.data;
   
    if (this.product_array.length > 0) {
      let temp_array = [];
      // console.log(this.product_array)
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['description'] =
          this.product_array[i]['quantity'] +
          ' x ' +
          this.product_array[i]['name'] +
          '=' +
          this.product_array[i]['amount'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_array.push(this.product_array[i]['description']);
      }

      // console.log(this.product_array)
      pro_string = temp_array.toString();
      console.log(pro_string);
      pro = pro_string.replaceAll(',', '<br>');
      // pro.replaceAll(' aj ', '<br>');
      // pro_new=pro.replaceAll('aj','<br>')
      popupWin = window.open(
        '',
        '_blank',
        'top=0,left=0,height=auto,width=auto'
      );
      popupWin.document.open();
      popupWin.document.write(`
        <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      
      <style>
      @page { size: 72mm 120mm }
      body.receipt .sheet { width: 120mm; height: 100mm }
      @media print {
        body.receipt {
           width: 120mm
        } 
      } 
      .hotel{
        font-size: 25px;
        text-align:center;
        margin-bottom: -16px;
      }
      .place{
        font-size: 15px;
        font-weight: 23px;
        margin-bottom: -16px;
    
        text-align:center;        
      }
      
      .phone{
        font-weight: 23px;
        font-size: 15px;
              text-align:center;        
    
      }
        .header{
          margin-right:170px;
        }
       
        
        
       
        .waiter{
          font-size: 15px;
  
        }
        .table{
          font-size: 15px;
  
  margin-left:120px;      
        }
        .tabl{
          margin-bottom: -18px;

        }
        .date{
          font-size: 15px;
        }
        .time{
          font-size: 15px;
          margin-left:160px; 
        }
     
        
        hr{
            border: none;
            border-top: 1px dashed;
            width: 100%;
        }
        .pro{
          font-size:20px;
        }
        .total{
          font-size:20px;
          font-weight: bolder;
          margin-left:85px;
          hight:20px;
        }
      
      </style>
      </head>
      <body class="receipt"  onload="window.print();window.close()">
      <div class="header">
      <p class="hotel">HOTEL</p>
      <P class="place">NO3,SOUTH STREET,PATEMANAGARAM</P>
      <p class="phone">8056457791  ;  9976040756</p>
      <table class="tabl">
          <tr>
              <td>
      <p class="waiter">WAITER:${this.item}</p></td>
      <td>
      <p class="table">TABLENO:${this.table}</p></td>
      </tr>
      </table>
      <table>
      <tr>
      <td >
      <p class="date">
      ${this.dateTime}</td>
      </p>
      <td >
      <p class="time">
      ${this.Time}
      </p>
      </td>

      </tr>
      </table>

      <hr>
      <table class="pro">
      ${pro}
  </table>
  
  <hr>
  
  
  
  
  <p class="total">RS:${this.tot_amt}.00</p></td>

      </body>
      </html>`);

      popupWin.document.close();
    } else
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No Products',
      });
  }

  deleteProduct(element: any) {
    this.options.push(element);
    console.log(element);
    
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      this.data.forEach((itemss: any, index: any) => {
        if (itemss == element) this.data.splice(index, 1);
      });
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.dataSource.data);
      this.getTotalAmount();
    }
  }
  

  onSelectionChange(value: any) {
    let temp_id = 0;
    let temp_name;

    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      if (this.ELEMENT_DATA[i].name == value) {
        temp_id = this.ELEMENT_DATA[i].id;
        temp_name = this.ELEMENT_DATA[i].name;
      }
    }
    this.openDialog(temp_id, temp_name,value);
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(public dialog: MatDialog,private http: HttpClient) {}
  openDialog(newVal: any, temp_name: any,value:any) {
    const dialogRef = this.dialog.open(QuantityComponent, {
      data: { name: temp_name, id: newVal },
      // disableClose:true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      if (this.ELEMENT_DATA[i].name == value) {
        this.actualdata = this.ELEMENT_DATA[i];
        
        this.data.push(this.actualdata);
      }
    }
    this.myControl.setValue('');
    //removes duplicate
    this.data = this.data.reduce((a: any[], b: { name: any }) => {
      if (!a.find((data) => data.name === b.name)) {
        a.push(b);
      }
      return a;
    }, []);
    console.log(this.data);
    
   


    
    this.dataSource = new MatTableDataSource(this.data);
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      if (this.ELEMENT_DATA[i].id == result.id) {
        this.ELEMENT_DATA[i].quantity = result.quantity;
        this.ELEMENT_DATA[i].amount = this.ELEMENT_DATA[i].quantity * this.ELEMENT_DATA[i].price;
      }
    }
    for (let i = 0; i < this.data.length; i++) {
      this.lastdata[i] = {id:this.data[i].id,name:this.data[i].name,prize:this.data[i].price,quantity:this.data[i].quantity,amount:this.data[i].amount,date:this.dateTime,time:this.Time}
    }
    console.log(this.lastdata);
    // console.log(this.data);


    
    

  }

  else{
    this.myControl.setValue('');
  }

      console.log(result);
    });
  }

  // printDialog(): void {
  //   const dialogRef = this.dialog.open(PrintComponent, {

  //     data:{
  //       waiter:this.item,
  //       table:this.table,
  //      totalamount: this.tot_amt,
  //       print:this.dataSource.data },

  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }

  ngOnInit(): void {
    
      this.dateTime = this.pipe.transform(Date.now(), 'yyyy-M-d');
    console.log(this.dateTime);
    
      this.Time = this.pipe.transform(Date.now(), 'h:mm a');
      console.log(this.Time);


    this.filteredOption = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      // this.ori_data.push(this.ELEMENT_DATA[i])
      this.options.push(this.ELEMENT_DATA[i].name);
      
    }


  }
}
