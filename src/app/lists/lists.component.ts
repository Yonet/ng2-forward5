import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a360-lists',
  templateUrl: 'lists.component.html',
  styleUrls: ['lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Lists initialized');
  }

}
