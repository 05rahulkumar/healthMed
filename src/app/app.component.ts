import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hgh';

  a = 0;
  updateIncre() {
    this.a++;
    console.log(this.a,'this.a');
  }
data=',mmmm';
  updateData(item:any){
    console.warn(item);
this.data=item;
  }
}
