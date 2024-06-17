import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
@Input() item=0;

@Output() updateDateEvent=new EventEmitter<any>;

}
