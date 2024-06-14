import { Component } from '@angular/core';
import { Mobile, MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-angular-project';
  constructor(private ms: MobileService){

  }
  mobiles: Mobile[] = [];

  formHeader="Add mobile";
  mobileName= "";
  price:Number  | null = null;
  ram:Number  | null = null;
  storage:Number  | null = null;
  showForm=false;

  ngOnInit() {
   this.loadMobiles();
  }

  loadMobiles() {
    this.ms.getMobileData().subscribe(data => {
      this.mobiles = data;
    });
  }

  deleteMobile(mobile: Mobile) {
    this.ms.deleteMobile(mobile).subscribe(data => {
      this.mobiles = data;
    });
  }

  openForm(data: Mobile | null = null) {
    this.showForm = true;
    if (data) {
      this.formHeader = "Edit Mobile";
      this.mobileName = data.mobile;
      this.price = data.price;
      this.ram = data.ram;
      this.storage = data.storage;
    }  else {
      this.formHeader = "Add Mobile";
      this.mobileName = "";
      this.price = null;
      this.ram = null;
      this.storage = null;
    }
}

closeForm(){
  this.showForm=false;
}
saveMobile(){
  this.showForm=false;
  console.log('Mobile saved:', {
    mobileName: this.mobileName,
    price: this.price,
    ram: this.ram,
    storage: this.storage
});
this.mobileName = "";
this.price = null;
this.ram = null;
this.storage = null;
}
}
