import { Component, OnInit } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'a360-lists',
  templateUrl: 'lists.component.html',
  styleUrls: ['lists.component.css'],
  directives: [MdCheckbox]

})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Lists initialized');
  }

}
