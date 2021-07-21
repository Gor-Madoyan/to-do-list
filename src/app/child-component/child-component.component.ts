import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() outputItem = new EventEmitter()
  @Output() outputSearch = new EventEmitter()
  constructor() { }

  addNewItem(val:any) {
    this.outputItem.emit(val)
  }

  searchVal(val:any) {
    this.outputSearch.emit(val)
  } 
  
  ngOnInit(): void {
  }

}
